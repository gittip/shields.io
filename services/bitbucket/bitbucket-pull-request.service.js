'use strict'

const Joi = require('joi')
const { AuthHelper } = require('../../core/base-service/auth-helper')
const { metric } = require('../text-formatters')
const { nonNegativeInteger, optionalUrl } = require('../validators')
const { BaseJsonService } = require('..')

const schema = Joi.object({
  size: nonNegativeInteger,
}).required()

const queryParamSchema = Joi.object({
  server: optionalUrl,
}).required()

const errorMessages = {
  401: 'invalid credentials',
  403: 'private repo',
  404: 'not found',
}

function pullRequestClassGenerator(raw) {
  const routePrefix = raw ? 'pr-raw' : 'pr'
  const badgeSuffix = raw ? '' : ' open'

  return class BitbucketPullRequest extends BaseJsonService {
    static name = `BitbucketPullRequest${raw ? 'Raw' : ''}`
    static category = 'issue-tracking'
    static route = {
      base: `bitbucket/${routePrefix}`,
      pattern: `:project/:repo`,
      queryParamSchema,
    }

    static examples = [
      {
        title: 'Bitbucket open pull requests',
        namedParams: {
          project: 'atlassian',
          repo: 'python-bitbucket',
        },
        staticPreview: this.render({ prs: 22 }),
      },
      {
        title: 'Bitbucket Server open pull requests',
        namedParams: {
          project: 'foo',
          repo: 'bar',
        },
        queryParams: { server: 'https://bitbucket.mydomain.net' },
        staticPreview: this.render({ prs: 42 }),
      },
    ]

    static defaultBadgeData = { label: 'pull requests' }

    static render({ prs }) {
      return {
        message: `${metric(prs)}${badgeSuffix}`,
        color: prs ? 'yellow' : 'brightgreen',
      }
    }

    constructor(context, config) {
      super(context, config)

      this.bitbucketAuthHelper = new AuthHelper(
        {
          userKey: 'bitbucket_username',
          passKey: 'bitbucket_password',
          authorizedOrigins: ['https://bitbucket.org'],
        },
        config
      )
      this.bitbucketServerAuthHelper = new AuthHelper(
        {
          userKey: 'bitbucket_server_username',
          passKey: 'bitbucket_server_password',
          serviceKey: 'bitbucketServer',
        },
        config
      )
    }

    async fetchCloud({ project, repo }) {
      return this._requestJson(
        this.bitbucketAuthHelper.withBasicAuth({
          url: `https://bitbucket.org/api/2.0/repositories/${project}/${repo}/pullrequests/`,
          schema,
          options: { qs: { state: 'OPEN', limit: 0 } },
          errorMessages,
        })
      )
    }

    // https://docs.atlassian.com/bitbucket-server/rest/5.16.0/bitbucket-rest.html#idm46229602363312
    async fetchServer({ server, project, repo }) {
      return this._requestJson(
        this.bitbucketServerAuthHelper.withBasicAuth({
          url: `${server}/rest/api/1.0/projects/${project}/repos/${repo}/pull-requests`,
          schema,
          options: {
            qs: {
              state: 'OPEN',
              limit: 100,
              withProperties: false,
              withAttributes: false,
            },
          },
          errorMessages,
        })
      )
    }

    async fetch({ server, project, repo }) {
      if (server !== undefined) {
        return this.fetchServer({ server, project, repo })
      } else {
        return this.fetchCloud({ project, repo })
      }
    }

    async handle({ project, repo }, { server }) {
      const data = await this.fetch({ server, project, repo })
      return this.constructor.render({ prs: data.size })
    }
  }
}

module.exports = [true, false].map(pullRequestClassGenerator)
