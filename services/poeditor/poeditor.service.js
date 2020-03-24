'use strict'

const Joi = require('@hapi/joi')
const { nonNegativeInteger } = require('../validators')
const { coveragePercentage } = require('../color-formatters')
const { BaseJsonService } = require('..')

const documentation = `
  <p>
    You must specify the read-only API token from the POEditor account to which the project belongs.
  </p>
  <p>
    As per <a href="https://poeditor.com/docs/api">the POEditor API documentation</a>,
    <q>all requests to the API must contain the parameter api_token. You can get this key from your POEditor account.
    You'll find it in <a href="https://poeditor.com/account/api">My Account > API Access</a>.</q>
  </p>
`

const schema = Joi.object({
  response: Joi.object({
    code: nonNegativeInteger.required(),
    message: Joi.string().required(),
  }).required(),
  result: Joi.object({
    languages: Joi.array()
      .items({
        name: Joi.string().required(),
        code: Joi.string().required(),
        percentage: Joi.number()
          .min(0)
          .max(100)
          .required(),
      })
      .required(),
  }),
}).required()

const queryParamSchema = Joi.object({
  token: Joi.string().required(),
}).required()

module.exports = class POEditor extends BaseJsonService {
  static get category() {
    return 'other'
  }

  static get route() {
    return {
      base: 'poeditor',
      pattern: 'progress/:projectId/:languageCode',
      queryParamSchema,
    }
  }

  static get examples() {
    return [
      {
        title: 'POEditor',
        namedParams: { projectId: '323337', languageCode: 'fr' },
        queryParams: { token: 'abc123def456' },
        staticPreview: this.render({
          code: 200,
          message: 'OK',
          language: { percentage: 93, code: 'fr', name: 'French' },
        }),
        keywords: ['l10n'],
        documentation,
      },
    ]
  }

  static render({ code, message, language }) {
    const color = 'red'

    if (code !== 200) {
      return { message, color }
    }

    if (language === undefined) {
      return { message: `Language not in project`, color }
    }

    return {
      label: language.name,
      message: `${language.percentage.toFixed(0)}%`,
      color: coveragePercentage(language.percentage),
    }
  }

  async fetch({ projectId, token }) {
    return this._requestJson({
      schema,
      url: 'https://api.poeditor.com/v2/languages/list',
      options: {
        method: 'POST',
        form: {
          api_token: token,
          id: projectId,
        },
      },
    })
  }

  async handle({ projectId, languageCode }, { token }) {
    const {
      response: { code, message },
      result: { languages } = { languages: [] },
    } = await this.fetch({ projectId, token })
    return this.constructor.render({
      code,
      message,
      language: languages.find(lang => lang.code === languageCode),
    })
  }
}
