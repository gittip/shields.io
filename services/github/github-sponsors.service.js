'use strict'

const gql = require('graphql-tag')
const Joi = require('joi')
const { metric } = require('../text-formatters')
const { nonNegativeInteger } = require('../validators')
const { redirector, NotFound } = require('..')
const { GithubAuthV4Service } = require('./github-auth-service')
const { documentation, transformErrors } = require('./github-helpers')

const schema = Joi.object({
  data: Joi.object({
    repositoryOwner: Joi.object({
      sponsorshipsAsMaintainer: Joi.object({
        totalCount: nonNegativeInteger,
      }),
    }).allow(null),
  }).required(),
}).required()

class GithubSponsors extends GithubAuthV4Service {
  static get category() {
    return 'social'
  }

  static get route() {
    return {
      base: 'github/sponsors',
      pattern: ':user',
    }
  }

  static get examples() {
    return [
      {
        title: 'GitHub Sponsors',
        namedParams: { user: 'Homebrew' },
        staticPreview: this.render({
          count: '217',
        }),
        documentation,
      },
    ]
  }

  static get defaultBadgeData() {
    return {
      label: 'sponsors',
      namedLogo: 'github',
    }
  }

  static render({ count }) {
    return {
      message: metric(count),
      color: '4183C4',
      style: 'social',
    }
  }

  async fetch({ user }) {
    return this._requestGraphql({
      query: gql`
        query($user: String!) {
          repositoryOwner(login: $user) {
            ... on User {
              sponsorshipsAsMaintainer {
                totalCount
              }
            }
            ... on Organization {
              sponsorshipsAsMaintainer {
                totalCount
              }
            }
          }
        }
      `,
      variables: { user },
      schema,
      transformErrors,
    })
  }

  transform({ data }) {
    if (data.repositoryOwner == null) {
      throw new NotFound({ prettyMessage: 'user/org not found' })
    }

    const count = data.repositoryOwner.sponsorshipsAsMaintainer.totalCount
    return { count }
  }

  async handle({ user }) {
    const json = await this.fetch({ user })
    const { count } = this.transform({ data: json.data })
    return this.constructor.render({
      count,
    })
  }
}

const redirects = {
  GithubSponsorsRedirect: redirector({
    category: 'social',
    route: {
      base: 'github/sponsors',
      pattern: ':user',
    },
    transformPath: ({ user }) => `/github/sponsors/${user}`,
    dateAdded: new Date('2020-10-09'),
  }),
}

module.exports = {
  GithubSponsors,
  ...redirects,
}
