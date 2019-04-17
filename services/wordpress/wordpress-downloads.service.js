'use strict'

const Joi = require('joi')
const { metric } = require('../text-formatters')
const { downloadCount: downloadCountColor } = require('../color-formatters')
const { BaseJsonService, NotFound } = require('..')
const BaseWordpress = require('./wordpress-base')

const dateSchema = Joi.object()
  .pattern(Joi.date().iso(), Joi.number().integer())
  .required()

const extensionData = {
  plugin: {
    capt: 'Plugin',
    exampleSlug: 'bbpress',
  },
  theme: {
    capt: 'Theme',
    exampleSlug: 'twentyseventeen',
  },
}

function DownloadsForExtensionType(extensionType) {
  const { capt, exampleSlug } = extensionData[extensionType]

  return class WordpressDownloads extends BaseWordpress {
    static get name() {
      return `Wordpress${capt}Downloads`
    }

    static render({ downloadCount }) {
      return {
        message: metric(downloadCount),
        color: downloadCountColor(downloadCount),
      }
    }

    async handle({ slug }) {
      const { downloaded: downloadCount } = await this.fetch({
        extensionType,
        slug,
      })
      return this.constructor.render({ downloadCount })
    }

    static get category() {
      return 'downloads'
    }

    static get defaultBadgeData() {
      return { label: 'downloads' }
    }

    static get route() {
      return {
        base: `wordpress/${extensionType}/dt`,
        pattern: ':slug',
      }
    }

    static get examples() {
      return [
        {
          title: `Wordpress ${capt} Downloads`,
          namedParams: { slug: exampleSlug },
          staticPreview: this.render({ downloadCount: 200000 }),
        },
      ]
    }
  }
}

function InstallsForExtensionType(extensionType) {
  const { capt, exampleSlug } = extensionData[extensionType]

  return class WordpressInstalls extends BaseWordpress {
    static get name() {
      return `Wordpress${capt}Installs`
    }

    static get category() {
      return 'downloads'
    }

    static render({ installCount }) {
      return {
        message: metric(installCount),
        color: downloadCountColor(installCount),
      }
    }

    async handle({ slug }) {
      const { active_installs: installCount } = await this.fetch({
        extensionType,
        slug,
      })
      return this.constructor.render({ installCount })
    }

    static get defaultBadgeData() {
      return { label: 'active installs' }
    }

    static get route() {
      return {
        base: `wordpress/${extensionType}/installs`,
        pattern: ':slug',
      }
    }

    static get examples() {
      return [
        {
          title: `Wordpress ${capt} Active Installs`,
          namedParams: { slug: exampleSlug },
          staticPreview: this.render({ installCount: 300000 }),
        },
      ]
    }
  }
}

function DownloadsForInterval(interval) {
  const { base, messageSuffix = '', query, name } = {
    day: {
      base: 'wordpress/plugin/dd',
      messageSuffix: '/day',
      query: 1,
      name: 'WordpressDownloadsDay',
    },
    week: {
      base: 'wordpress/plugin/dw',
      messageSuffix: '/week',
      query: 7,
      name: 'WordpressDownloadsWeek',
    },
    month: {
      base: 'wordpress/plugin/dm',
      messageSuffix: '/month',
      query: 30,
      name: 'WordpressDownloadsMonth',
    },
    year: {
      base: 'wordpress/plugin/dy',
      messageSuffix: '/year',
      query: 365,
      name: 'WordpressDownloadsYear',
    },
  }[interval]

  return class WordpressDownloads extends BaseJsonService {
    static get name() {
      return name
    }

    static get category() {
      return 'downloads'
    }

    static get defaultBadgeData() {
      return { label: 'downloads' }
    }

    static get route() {
      return {
        base,
        pattern: ':slug',
      }
    }

    static get examples() {
      return [
        {
          title: 'WordPress Plugin Downloads',
          namedParams: { slug: 'bbpress' },
          staticPreview: this.render({ downloads: 30000 }),
        },
      ]
    }

    static render({ downloadCount }) {
      return {
        message: `${metric(downloadCount)}${messageSuffix}`,
        color: downloadCountColor(downloadCount),
      }
    }

    async handle({ slug }) {
      const json = await this._requestJson({
        schema: dateSchema,
        url: `https://api.wordpress.org/stats/plugin/1.0/downloads.php`,
        options: {
          qs: {
            slug,
            limit: query,
          },
        },
      })
      const size = Object.keys(json).length
      const downloadCount = Object.values(json).reduce(
        (a, b) => parseInt(a) + parseInt(b)
      )
      // This check is for non-existent and brand-new plugins both having new stats.
      // Non-Existent plugins results are the same as a brandspanking new plugin with no downloads.
      if (downloadCount <= 0 && size <= 1) {
        throw new NotFound({ prettyMessage: 'plugin not found or too new' })
      }
      return this.constructor.render({ downloadCount })
    }
  }
}

const intervalServices = ['day', 'week', 'month', 'year'].map(
  DownloadsForInterval
)
const downloadServices = ['plugin', 'theme'].map(DownloadsForExtensionType)
const installServices = ['plugin', 'theme'].map(InstallsForExtensionType)
const modules = [...intervalServices, ...downloadServices, ...installServices]
module.exports = modules
