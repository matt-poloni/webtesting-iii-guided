const helpers = require('./helpers.js');

// callback that returns a function
// jest.mock('uuid', () => () => '1234');

describe('helpers', () => {
  describe('makePerson()', () => {
    it('should create a person', () => {
      const expected = { id: '1234', name: 'Frodo Baggins' };
      const actual = helpers.makePerson('Frodo','Baggins');
      expect(actual).toEqual(expected);
    })
  })
})