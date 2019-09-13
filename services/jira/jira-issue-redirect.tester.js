'use strict'

const { ServiceTester } = require('../tester')

const t = (module.exports = new ServiceTester({
  id: 'JiraIssueRedirect',
  title: 'JiraIssueRedirect',
  pathPrefix: '/jira/issue',
}))

t.create('jira issue')
  .get('/https/issues.apache.org/jira/kafka-2896.svg', {
    followRedirect: false,
  })
  .expectStatus(301)
  .expectHeader(
    'Location',
    `/jira/issue/kafka-2896.svg?hostUrl=${encodeURIComponent(
      'https://issues.apache.org/jira'
    )}`
  )
