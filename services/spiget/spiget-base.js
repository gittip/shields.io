'use strict'

const Joi = require('joi')
const BaseJsonService = require('../base-json')

const schema = Joi.object({
  downloads: Joi.number().required(),

  file: Joi.object({
    size: Joi.number().required(),
    sizeUnit: Joi.string().required(),
  }).required(),
}).required()

const versionSchema = Joi.object({
  downloads: Joi.number().required(),
  name: Joi.string().required(),
}).required()

const documentation = `
<p>You can find your resource ID in the url for your resource page.</p>
<p>Example: <code>https://www.spigotmc.org/resources/essentialsx.9089/</code> - Here the Resource ID is 9089.</p>`

class BaseSpigetService extends BaseJsonService {
  async fetch({ resourceid }) {
    const url = `https://api.spiget.org/v2/resources/${resourceid}`

    return this._requestJson({
      schema,
      url,
    })
  }

  async fetchLatestVersion({ resourceid }) {
    const url = `https://api.spiget.org/v2/resources/${resourceid}/versions/latest`

    return this._requestJson({
      schema: versionSchema,
      url,
    })
  }

  static get defaultBadgeData() {
    return { label: 'spiget' }
  }

  static get category() {
    return 'other'
  }
}

module.exports = { documentation, BaseSpigetService }
