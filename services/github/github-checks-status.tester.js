'use strict'

const t = (module.exports = require('../tester').createServiceTester())
const { isBuildStatus } = require('../build-status')

t.create('branch checks (branch)')
  .get('/badges/shields/master.json')
  .expectBadge({
    label: 'checks',
    message: isBuildStatus,
  })

t.create('checks - nonexistent ref')
  .get('/badges/shields/this-ref-does-not-exist.json')
  .expectBadge({
    label: 'checks',
    message: 'ref or repo not found',
    color: 'red',
  })
