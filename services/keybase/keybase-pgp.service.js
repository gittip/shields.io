'use strict'

const { BaseJsonService } = require('..')
const Joi = require('joi')

const profileFoundSchema = Joi.object({
  them: Joi.array()
    .items(
      Joi.object({
        public_keys: {
          primary: {
            key_fingerprint: Joi.string()
              .hex()
              .required(),
          },
        },
      }).required()
    )
    .min(0)
    .max(1),
}).required()

const profileNotFoundSchema = Joi.object({
  them: Joi.array().empty(),
}).required()

const collectionFoundOrNotFound = Joi.alternatives(
  profileFoundSchema,
  profileNotFoundSchema
)

module.exports = class KeybasePGP extends BaseJsonService {
  static get category() {
    return 'social'
  }

  static get route() {
    return {
      base: 'keybase/pgp',
      pattern: ':username',
    }
  }

  static get defaultBadgeData() {
    return { label: 'pgp' }
  }

  async handle({ username }) {
    const data = await this.fetch({ username })

    try {
      const fingerprint = data.them[0].public_keys.primary.key_fingerprint
      return this.constructor.render(fingerprint)
    } catch (err) {
      return {
        message: 'not found',
        color: 'inactive',
      }
    }
  }

  async fetch({ username }) {
    return this._requestJson({
      schema: collectionFoundOrNotFound,
      url: `https://keybase.io/_/api/1.0/user/lookup.json?usernames=${username}`,
    })
  }

  static render(fingerprint) {
    const fingerprint64 = fingerprint.slice(-16).toUpperCase()

    return {
      message: fingerprint64,
      color: 'informational',
    }
  }

  static get examples() {
    return [
      {
        title: 'Keybase PGP',
        namedParams: { username: 'Keybase username' },
        staticPreview: this.render('1863145FD39EE07E'),
        keywords: ['keybase', 'pgp'],
      },
    ]
  }
}
