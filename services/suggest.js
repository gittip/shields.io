// Suggestion API
//
// eg. /$suggest/v1?url=https://github.com/badges/shields
//
// This endpoint is called from frontend/components/suggestion-and-search.js.

'use strict'

const { URL } = require('url')
const request = require('request')

function twitterPage(url) {
  if (url.protocol === null) {
    return null
  }

  const schema = url.protocol.slice(0, -1)
  const host = url.host
  const path = url.pathname
  return {
    title: 'Twitter',
    example: {
      pattern: '/twitter/url/:protocol(https|http)/:hostAndPath+',
      namedParams: { protocol: `${schema}`, hostAndPath: `${host}${path}` },
      queryParams: {
        link: `https://twitter.com/intent/tweet?text=Wow:&url=${encodeURIComponent(
          url.href
        )}`,
      },
    },
    preview: {
      style: 'social',
    },
  }
}

function githubIssues(user, repo) {
  const repoSlug = `${user}/${repo}`
  return {
    title: 'GitHub issues',
    example: {
      pattern: '/github/issues/:user/:repo',
      namedParams: { user, repo },
      queryParams: { link: `https://github.com/${repoSlug}/issues` },
    },
  }
}

function githubForks(user, repo) {
  const repoSlug = `${user}/${repo}`
  return {
    title: 'GitHub forks',
    example: {
      pattern: '/github/forks/:user/:repo',
      namedParams: { user, repo },
      queryParams: { link: `https://github.com/${repoSlug}/network` },
    },
  }
}

function githubStars(user, repo) {
  const repoSlug = `${user}/${repo}`
  return {
    title: 'GitHub stars',
    example: {
      pattern: '/github/stars/:user/:repo',
      namedParams: { user, repo },
      queryParams: { link: `https://github.com/${repoSlug}/stargazers` },
    },
  }
}

async function githubLicense(githubApiProvider, user, repo) {
  const repoSlug = `${user}/${repo}`

  let link = `https://github.com/${repoSlug}`

  const { buffer } = await githubApiProvider.requestAsPromise(
    request,
    `/repos/${repoSlug}/license`
  )
  try {
    const data = JSON.parse(buffer)
    if ('html_url' in data) {
      link = data.html_url
    }
  } catch (e) {}

  return {
    title: 'GitHub license',
    example: {
      pattern: '/github/license/:user/:repo',
      namedParams: { user, repo },
      queryParams: { link },
    },
  }
}

async function findSuggestions(githubApiProvider, url) {
  let promises = []
  if (url.hostname === 'github.com') {
    const userRepo = url.pathname.slice(1).split('/')
    const user = userRepo[0]
    const repo = userRepo[1]
    promises = promises.concat([
      githubIssues(user, repo),
      githubForks(user, repo),
      githubStars(user, repo),
      githubLicense(githubApiProvider, user, repo),
    ])
  }
  promises.push(twitterPage(url))

  const suggestions = await Promise.all(promises)

  return suggestions.filter(b => b != null)
}

// data: {url}, JSON-serializable object.
// end: function(json), with json of the form:
//  - suggestions: list of objects of the form:
//    - title: string
//    - link: target as a string URL.
//    - queryParams: Object containing query params (Optional)
function setRoutes(allowedOrigin, githubApiProvider, server) {
  server.ajax.on('suggest/v1', (data, end, ask) => {
    // The typical dev and production setups are cross-origin. However, in
    // Heroku deploys and some self-hosted deploys these requests may come from
    // the same host. Chrome does not send an Origin header on same-origin
    // requests, but Firefox does.
    //
    // It would be better to solve this problem using some well-tested
    // middleware.
    const origin = ask.req.headers.origin
    if (origin) {
      let host
      try {
        host = new URL(origin).hostname
      } catch (e) {
        ask.res.setHeader('Access-Control-Allow-Origin', 'null')
        end({ err: 'Disallowed' })
        return
      }

      if (host !== ask.req.headers.host) {
        if (allowedOrigin.includes(origin)) {
          ask.res.setHeader('Access-Control-Allow-Origin', origin)
        } else {
          ask.res.setHeader('Access-Control-Allow-Origin', 'null')
          end({ err: 'Disallowed' })
          return
        }
      }
    }

    let url
    try {
      url = new URL(data.url)
    } catch (e) {
      end({ err: `${e}` })
      return
    }

    findSuggestions(githubApiProvider, url)
      // This interacts with callback code and can't use async/await.
      // eslint-disable-next-line promise/prefer-await-to-then
      .then(suggestions => {
        end({ suggestions })
      })
      .catch(err => {
        end({ suggestions: [], err })
      })
  })
}

module.exports = {
  findSuggestions,
  githubLicense,
  setRoutes,
}
