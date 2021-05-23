import {ServiceTester} from '../tester.js';

const t = (function() {
  export default __a;
}())

t.create('Appveyor CI')
  .get('/gruntjs/grunt', {
    followRedirect: false,
  })
  .expectStatus(301)
  .expectHeader('Location', '/appveyor/build/gruntjs/grunt.svg')

t.create('Appveyor CI (branch)')
  .get('/gruntjs/grunt/develop', {
    followRedirect: false,
  })
  .expectStatus(301)
  .expectHeader('Location', '/appveyor/build/gruntjs/grunt/develop.svg')
