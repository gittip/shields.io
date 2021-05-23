import Joi from 'joi';
const t = (function() {
  export default __a;
}())

const isPipeSeparatedDjangoVersions = Joi.string().regex(
  /^([1-9]\.[0-9]+(?: \| )?)+$/
)

t.create('supported django versions (valid, package version in request)')
  .get('/djangorestframework/3.7.3.json')
  .expectBadge({
    label: 'django versions',
    message: isPipeSeparatedDjangoVersions,
  })

t.create('supported django versions (valid, no package version specified)')
  .get('/djangorestframework.json')
  .expectBadge({
    label: 'django versions',
    message: isPipeSeparatedDjangoVersions,
  })

t.create('supported django versions (no versions specified)')
  .get('/django/1.11.json')
  .expectBadge({ label: 'django versions', message: 'missing' })

t.create('supported django versions (invalid)')
  .get('/not-a-package.json')
  .expectBadge({
    label: 'django versions',
    message: 'package or version not found',
  })
