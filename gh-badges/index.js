'use strict'

const { makeBadge } = require('./lib/make-badge')
const { PDFKitTextMeasurer, QuickTextMeasurer } = require('./lib/text-measurer')

class BadgeFactory {
  constructor({ fontPath, fallbackFontPath, precomputeWidths = false }) {
    this.measurer = precomputeWidths
      ? new QuickTextMeasurer(fontPath, fallbackFontPath)
      : new PDFKitTextMeasurer(fontPath, fallbackFontPath)
  }

  /**
   * Create a badge
   *
   * @param {object} format - Object specifying badge data
   * @param {string[]} format.text
   * @param {string} format.colorscheme
   * @param {string} format.colorA
   * @param {string} format.colorB
   * @param {string} format.format
   * @param {string} format.template
   * @return {string} Badge in SVG or JSON format
   * @see https://github.com/badges/shields/tree/master/gh-badges/README.md
   */
  create(format) {
    return makeBadge(this.measurer, format)
  }
}

module.exports = {
  BadgeFactory,
}
