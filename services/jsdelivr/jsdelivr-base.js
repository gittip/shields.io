'use strict'

const Joi = require('joi')
const { metric } = require('../../lib/text-formatters')
const { BaseJsonService } = require('..')

const schema = Joi.object({
  total: Joi.number().required(),
}).required()

const periodMap = {
  hd: 'day',
  hw: 'week',
  hm: 'month',
  hy: 'year',
}

class BaseJsDelivrService extends BaseJsonService {
  static render({ period, hits }) {
    return {
      message: `${metric(hits)}/${periodMap[period]}`,
    }
  }

  static get defaultBadgeData() {
    return {
      label: 'jsdelivr',
      color: 'brightgreen',
    }
  }

  static get category() {
    return 'downloads'
  }
}

module.exports = { schema, periodMap, BaseJsDelivrService }
