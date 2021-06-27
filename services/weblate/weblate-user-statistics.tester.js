'use strict'

const { ServiceTester } = require('../tester')
const { withRegex } = require('../test-validators')

const t = (module.exports = new ServiceTester({
  id: 'weblate',
  title: 'Weblate',
}))

t.create('Translations')
  .get('/user/nijel/translations.json?server=https://hosted.weblate.org')
  .expectBadge({ label: 'weblate', message: withRegex(/^\d+ translations$/) })

t.create('Suggestions')
  .get('/user/nijel/suggestions.json?server=https://hosted.weblate.org')
  .expectBadge({ label: 'weblate', message: withRegex(/^\d+ suggestions$/) })

t.create('Uploads')
  .get('/user/nijel/uploads.json?server=https://hosted.weblate.org')
  .expectBadge({ label: 'weblate', message: withRegex(/^\d+ uploads$/) })

t.create('Comments')
  .get('/user/nijel/comments.json?server=https://hosted.weblate.org')
  .expectBadge({ label: 'weblate', message: withRegex(/^\d+ comments$/) })

t.create('Languages')
  .get('/user/nijel/languages.json?server=https://hosted.weblate.org')
  .expectBadge({ label: 'weblate', message: withRegex(/^\d+ languages$/) })

t.create('Invalid Protocol')
  .get('/user/nijel/translations.json?server=ftp://hosted.weblate.org')
  .expectBadge({ label: 'weblate', message: 'invalid query parameter: server' })
