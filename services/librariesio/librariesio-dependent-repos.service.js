'use strict'

const { metric } = require('../text-formatters')
const { BaseJsonService } = require('..')
const { fetchProject } = require('./librariesio-common')

// https://libraries.io/api#project-dependent-repositories
module.exports = class LibrariesIoDependentRepos extends BaseJsonService {
  static category = 'other'

  static route = {
    base: 'librariesio/dependent-repos',
    pattern: ':platform/:scope(@[^/]+)?/:packageName',
  }

  static examples = [
    {
      title: 'Dependent repos (via libraries.io)',
      pattern: ':platform/:packageName',
      namedParams: {
        platform: 'npm',
        packageName: 'got',
      },
      staticPreview: this.render({ dependentReposCount: 84000 }),
    },
    {
      title: 'Dependent repos (via libraries.io), scoped npm package',
      pattern: ':platform/:scope/:packageName',
      namedParams: {
        platform: 'npm',
        scope: '@babel',
        packageName: 'core',
      },
      staticPreview: this.render({ dependentReposCount: 50 }),
    },
  ]

  static defaultBadgeData = {
    label: 'dependent repos',
  }

  static render({ dependentReposCount }) {
    return {
      message: metric(dependentReposCount),
      color: dependentReposCount === 0 ? 'orange' : 'brightgreen',
    }
  }

  async handle({ platform, scope, packageName }) {
    const { dependent_repos_count: dependentReposCount } = await fetchProject(
      this,
      {
        platform,
        scope,
        packageName,
      }
    )
    return this.constructor.render({ dependentReposCount })
  }
}
