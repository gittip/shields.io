import {redirector} from '..';

export default redirector({
  category: 'other',
  route: {
    base: 'badge/endpoint',
    pattern: '',
  },
  transformPath: () => '/endpoint',
  dateAdded: new Date('2019-02-19'),
});
