import {deprecatedService} from '..';

export default deprecatedService({
  category: 'other',
  route: {
    base: 'cauditor',
    pattern: ':various*',
  },
  label: 'cauditor',
  dateAdded: new Date('2018-02-15'),
});
