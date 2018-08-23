'use strict'

const BaseHTTPService = require('../base-http')
const { addv: versionText } = require('../../lib/text-formatters')
const { version: versionColor } = require('../../lib/color-formatters')
const { InvalidResponse } = require('../errors')

module.exports = class FDroid extends BaseHTTPService {
  async fetch({ appId }) {
    const url = `https://f-droid.org/en/packages/${appId}/`;
    return this._requestHTTP({
      url,
      options: { },
      errorMessages: {
        404: 'app not found',
      },
    }).then(({ res, buffer }) => {
      const website = buffer.toString();
      const match = website.match(/<div\s[^>]*class="package-version-header"(?:\s[^>]*)?>[^<]*<a\s+name="([^:>]*)"(?:\s[^>]*)?>/);
      if (!match) {
        throw new InvalidResponse({
          prettyMessage: 'fix this badge',
          underlyingError: new Error("could not find version on website"),
        })
      }
      return { version: match[1] };
    });
  }
  
  static render({ version }) {
    return {
      message: versionText(version),
      color: versionColor(version),
    }
  }

  async handle({ appId }) {
    const result = await this.fetch({ appId })
    return this.constructor.render(result)
  }

  // Metadata
  static get defaultBadgeData() {
    return { label: 'F-Droid' }
  }
  
  static get category() {
    return 'build'
  }

  static get url() {
    return {
      base: 'f-droid/version',
      format: '(.+)',
      capture: ['appId'],
    }
  }

  static get examples() {
    return [
      {
        previewUrl: 'wercker/go-wercker-api',
      },
      {
        title: `${this.name} branch`,
        previewUrl: 'wercker/go-wercker-api/master',
      },
    ]
  }
}

