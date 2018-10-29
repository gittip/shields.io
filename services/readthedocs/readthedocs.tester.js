'use strict'

const Joi = require('joi')
const createServiceTester = require('../create-service-tester')
const { isBuildStatus } = require('../test-validators')

const t = createServiceTester()
module.exports = t

t.create('build status')
  .get('/pip.json')
  .expectJSONTypes(
    Joi.object().keys({
      name: 'docs',
      value: Joi.alternatives().try(isBuildStatus, Joi.equal('unknown')),
    })
  )

t.create('build status for named version')
  .get('/pip/stable.json')
  .expectJSONTypes(
    Joi.object().keys({
      name: 'docs',
      value: Joi.alternatives().try(isBuildStatus, Joi.equal('unknown')),
    })
  )

t.create('build status for named semantic version')
  .get('/scrapy/1.0.json')
  .expectJSONTypes(
    Joi.object().keys({
      name: 'docs',
      value: Joi.alternatives().try(isBuildStatus, Joi.equal('unknown')),
    })
  )

t.create('unknown project')
  .get('/this-repo/does-not-exist.json')
  .expectJSON({ name: 'docs', value: 'project or build not found' })
