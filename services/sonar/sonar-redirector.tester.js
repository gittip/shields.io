'use strict'

const queryString = require('querystring')
const { ServiceTester } = require('../tester')

const t = (module.exports = new ServiceTester({
  id: 'SonarRedirect',
  title: 'SonarRedirect',
  pathPrefix: '/sonar',
}))

t.create('sonar version')
  .get(
    '/4.2/http/sonar.petalslink.com/org.ow2.petals:petals-se-ase/alert_status.svg',
    {
      followRedirect: false,
    }
  )
  .expectStatus(301)
  .expectHeader(
    'Location',
    `/sonar/org.ow2.petals:petals-se-ase/alert_status.svg?${queryString.stringify(
      {
        server: 'http://sonar.petalslink.com',
        sonarVersion: '4.2',
      }
    )}`
  )

t.create('sonar host parameter')
  .get(
    '/http/sonar.petalslink.com/org.ow2.petals:petals-se-ase/alert_status.svg',
    {
      followRedirect: false,
    }
  )
  .expectStatus(301)
  .expectHeader(
    'Location',
    `/sonar/org.ow2.petals:petals-se-ase/alert_status.svg?${queryString.stringify(
      {
        server: 'http://sonar.petalslink.com',
      }
    )}`
   )

t.create('sonar host parameter with version')
  .get(
    '/http/sonar.petalslink.com/org.ow2.petals:petals-se-ase/alert_status.svg?sonarVersion=4.2',
    {
      followRedirect: false,
    }
  )
  .expectStatus(301)
  .expectHeader(
    'Location',
    `/sonar/org.ow2.petals:petals-se-ase/alert_status.svg?${queryString.stringify(
      {
        server: 'http://sonar.petalslink.com',
        sonarVersion: '4.2',
      }
    )}`
  )
