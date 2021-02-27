'use strict'

const Joi = require('joi')
const { nonNegativeInteger } = require('../validators')
const KeybaseProfile = require('./keybase-profile')

const keyFingerprintSchema = Joi.object({
  status: Joi.object({
    code: nonNegativeInteger.required(),
  }).required(),
  them: Joi.array()
    .items(
      Joi.object({
        public_keys: {
          primary: {
            key_fingerprint: Joi.string().hex().required(),
          },
        },
      })
        .required()
        .allow(null)
    )
    .min(0)
    .max(1),
}).required()

module.exports = class KeybasePGP extends KeybaseProfile {
  static route = {
    base: 'keybase/pgp',
    pattern: ':username',
  }

  static examples = [
    {
      title: 'Keybase PGP',
      namedParams: { username: 'skyplabs' },
      staticPreview: this.render({ fingerprint: '1863145FD39EE07E' }),
    },
  ]

  static defaultBadgeData = {
    label: 'pgp',
    color: 'informational',
  }

  static render({ fingerprint }) {
    return {
      message: fingerprint.slice(-16).toUpperCase(),
    }
  }

  static apiVersion = '1.0'

  async handle({ username }) {
    const options = {
      qs: {
        usernames: username,
        fields: 'public_keys',
      },
    }

    const data = await this.fetch({
      schema: keyFingerprintSchema,
      options,
    })

    const { user } = this.transform({ data })
    const primaryKey = user.public_keys.primary

    if (primaryKey == null) {
      return {
        message: 'no key fingerprint found',
        color: 'inactive',
      }
    }

    return this.constructor.render({ fingerprint: primaryKey.key_fingerprint })
  }
}
