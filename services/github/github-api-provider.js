'use strict'

const Joi = require('@hapi/joi')
const log = require('../../core/server/log')
const { TokenPool } = require('../../core/token-pooling/token-pool')
const { nonNegativeInteger } = require('../validators')

const headerSchema = Joi.object({
  'x-ratelimit-limit': nonNegativeInteger,
  'x-ratelimit-remaining': nonNegativeInteger,
  'x-ratelimit-reset': nonNegativeInteger,
})
  .required()
  .unknown(true)

const bodySchema = Joi.object({
  data: Joi.object({
    rateLimit: Joi.object({
      limit: nonNegativeInteger,
      remaining: nonNegativeInteger,
      resetAt: Joi.date().iso(),
    })
      .required()
      .unknown(true),
  })
    .required()
    .unknown(true),
})
  .required()
  .unknown(true)

// Provides an interface to the Github API. Manages the base URL.
class GithubApiProvider {
  // reserveFraction: The amount of much of a token's quota we avoid using, to
  //   reserve it for the user.
  constructor({
    baseUrl,
    withPooling = true,
    onTokenInvalidated = tokenString => {},
    globalToken,
    reserveFraction = 0.25,
  }) {
    Object.assign(this, {
      baseUrl,
      withPooling,
      onTokenInvalidated,
      globalToken,
      reserveFraction,
    })

    if (this.withPooling) {
      this.standardTokens = new TokenPool({ batchSize: 25 })
      this.searchTokens = new TokenPool({ batchSize: 5 })
      this.graphqlTokens = new TokenPool({ batchSize: 25 })
    }
  }

  serializeDebugInfo({ sanitize = true } = {}) {
    if (this.withPooling) {
      return {
        standardTokens: this.standardTokens.serializeDebugInfo({ sanitize }),
        searchTokens: this.searchTokens.serializeDebugInfo({ sanitize }),
        graphqlTokens: this.graphqlTokens.serializeDebugInfo({ sanitize }),
      }
    } else {
      return {}
    }
  }

  addToken(tokenString) {
    if (this.withPooling) {
      this.standardTokens.add(tokenString)
      this.searchTokens.add(tokenString)
      this.graphqlTokens.add(tokenString)
    } else {
      throw Error('When not using a token pool, do not provide tokens')
    }
  }

  getRateLimitFromHeaders(headers) {
    const h = Joi.attempt(headers, headerSchema)
    return {
      rateLimit: h['x-ratelimit-limit'],
      totalUsesRemaining: h['x-ratelimit-remaining'],
      nextReset: h['x-ratelimit-reset'],
    }
  }

  getRateLimitFromBody(body) {
    const parsedBody = JSON.parse(body)
    const b = Joi.attempt(parsedBody, bodySchema)
    return {
      rateLimit: b.data.rateLimit.limit,
      totalUsesRemaining: b.data.rateLimit.remaining,
      nextReset: Date.parse(b.data.rateLimit.resetAt) / 1000,
    }
  }

  updateToken({ token, url, res }) {
    let rateLimit, totalUsesRemaining, nextReset
    if (url.startsWith('/graphql')) {
      try {
        ;({
          rateLimit,
          totalUsesRemaining,
          nextReset,
        } = this.getRateLimitFromBody(res.body))
      } catch (e) {
        console.error(
          `Could not extract rate limit info from response body ${res.body}`
        )
        log.error(e)
        return
      }
    } else {
      try {
        ;({
          rateLimit,
          totalUsesRemaining,
          nextReset,
        } = this.getRateLimitFromHeaders(res.headers))
      } catch (e) {
        const logHeaders = {
          'x-ratelimit-limit': res.headers['x-ratelimit-limit'],
          'x-ratelimit-remaining': res.headers['x-ratelimit-remaining'],
          'x-ratelimit-reset': res.headers['x-ratelimit-reset'],
        }
        console.error(
          `Invalid GitHub rate limit headers ${JSON.stringify(
            logHeaders,
            undefined,
            2
          )}`
        )
        log.error(e)
        return
      }
    }

    const reserve = Math.ceil(this.reserveFraction * rateLimit)
    const usesRemaining = totalUsesRemaining - reserve

    token.update(usesRemaining, nextReset)
  }

  invalidateToken(token) {
    token.invalidate()
    this.onTokenInvalidated(token.id)
  }

  tokenForUrl(url) {
    if (url.startsWith('/search')) {
      return this.searchTokens.next()
    } else if (url.startsWith('/graphql')) {
      return this.graphqlTokens.next()
    } else {
      return this.standardTokens.next()
    }
  }

  // Act like request(), but tweak headers and query to avoid hitting a rate
  // limit. Inject `request` so we can pass in `cachingRequest` from
  // `request-handler.js`.
  request(request, url, options = {}, callback) {
    const { baseUrl } = this

    let token
    let tokenString
    if (this.withPooling) {
      try {
        token = this.tokenForUrl(url)
      } catch (e) {
        callback(e)
        return
      }
      tokenString = token.id
    } else {
      tokenString = this.globalToken
    }

    options.url = url
    options.baseUrl = baseUrl
    options.headers = {
      'User-Agent': 'Shields.io',
      Accept: 'application/vnd.github.v3+json',
      Authorization: `token ${tokenString}`,
    }

    request(options, (err, res, buffer) => {
      if (err === null) {
        if (this.withPooling) {
          if (res.statusCode === 401) {
            this.invalidateToken(token)
          } else if (res.statusCode < 500) {
            this.updateToken({ token, url, res })
          }
        }
      }
      callback(err, res, buffer)
    })
  }

  requestAsPromise(request, url, options) {
    return new Promise((resolve, reject) => {
      this.request(request, url, options, (err, res, buffer) => {
        if (err) {
          reject(err)
        } else {
          resolve({ res, buffer })
        }
      })
    })
  }
}

module.exports = GithubApiProvider
