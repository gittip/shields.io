'use strict'

const { downloadCount } = require('../color-formatters')
const { BaseJsonService } = require('..')
const Joi = require('@hapi/joi')

const profileSchema = Joi.object({
  carbonMonths: Joi.array()
    .items(
      Joi.object({
        projects: Joi.array()
          .items(
            Joi.object({
              numberOfTonnes: Joi.number().positive(),
            })
          )
          .required(),
      }).required()
    )
    .required(),
}).required()

module.exports = class OffsetEarthCarbonOffset extends BaseJsonService {
  static get category() {
    return 'other'
  }

  static get route() {
    return {
      base: 'offset-earth/carbon',
      pattern: ':owner',
    }
  }

  static get examples() {
    return [
      {
        title: 'Offset Earth (Carbon Offset)',
        namedParams: { owner: 'offsetearth' },
        staticPreview: this.render({ count: 15.05 }),
      },
    ]
  }

  static get defaultBadgeData() {
    return { label: 'carbon offset' }
  }

  static render({ count }) {
    return { message: `${count} tonnes`, color: downloadCount(count) }
  }

  async fetch({ owner }) {
    const url = `https://api.offset.earth/users/${owner}/profile`
    return this._requestJson({
      url,
      schema: profileSchema,
      errorMessages: {
        404: 'profile not found',
      },
    })
  }

  async handle({ owner }) {
    const json = await this.fetch({ owner })
    let count = 0

    json.carbonMonths.forEach(function(carbonMonth) {
      carbonMonth.projects.forEach(function(project) {
        if (project.numberOfTonnes !== undefined) {
          count += project.numberOfTonnes
          return
        }

        count += 1
      })
    })

    return this.constructor.render({ count })
  }
}
