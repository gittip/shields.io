'use strict'

const { ServiceTester } = require('../tester')

const t = (module.exports = new ServiceTester({
  id: 'JitpackVersionRedirect',
  title: 'JitpackVersionRedirect',
  pathPrefix: '/jitpack/v',
}))

t.create('jitpack version redirect')
  .get('/jitpack/maven-simple.svg', {
    followRedirect: false,
  })
  .expectStatus(301)
  .expectHeader('Location', '/jitpack/v/github/jitpack/maven-simple.svg')
