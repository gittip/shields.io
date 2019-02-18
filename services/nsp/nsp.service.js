'use strict'

const { deprecatedService } = require('..')

module.exports = deprecatedService({
  route: {
    base: 'nsp/npm',
    format: '(?:.+)',
  },
  label: 'nsp',
  category: 'other',
  dateAdded: new Date('2018-12-13'),
})
