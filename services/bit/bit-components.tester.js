const t = (function() {
  export default __a;
}())
import {isMetric} from '../test-validators.js';

t.create('collection (valid)').get('/ramda/ramda.json').expectBadge({
  label: 'components',
  message: isMetric,
})

t.create('collection (valid)')
  .get('/bit/no-collection-test.json')
  .expectBadge({ label: 'components', message: 'collection not found' })
