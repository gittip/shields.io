const t = (function() {
  export default __a;
}())

t.create('license (valid)')
  .get('/vibe-d.json')
  .expectBadge({ label: 'license', message: 'MIT' })

t.create('license (not found)')
  .get('/not-a-package.json')
  .expectBadge({ label: 'license', message: 'not found' })
