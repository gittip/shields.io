'use strict'

const { test, given } = require('sazerac')
const TestspacePassRatio = require('./testspace-test-pass-ratio.service')

describe('TestspacePassRatio', function () {
  test(TestspacePassRatio.render, () => {
    given({ passed: 3, total: 5 }).expect({
      message: '60%',
      color: 'critical',
    })

    given({ passed: 4, total: 4 }).expect({
      message: '100%',
      color: 'success',
    })
  })
})
