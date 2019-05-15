const helpers = require('./helpers.js');

// callback that returns a function
// jest.mock('uuid', () => () => '1234');
// ^^^^^ replaced w/ uuid.js in __mocks__

describe('helpers', () => {
  describe('makePerson()', () => {
    it('should create a person', () => {
      const expected = { id: '1234', name: 'Frodo Baggins' };
      const actual = helpers.makePerson('Frodo','Baggins');
      expect(actual).toEqual(expected);
    })
  })

  describe('forEvenOnly()', () => {
    it('should invoke callback when given an even number', () => {
      const spy = jest.fn();
      helpers.forEvenOnly(2, spy);
      helpers.forEvenOnly(4, spy);
      expect(spy).toHaveBeenCalledTimes(2);
      expect(spy).toHaveBeenNthCalledWith(1,2);
      expect(spy).toHaveBeenNthCalledWith(2,4);
    })

    it('should NOT invoke callback when given an odd number', () => {
      const spy = jest.fn();
      helpers.forEvenOnly(3, spy);
      expect(spy).not.toHaveBeenCalled();
    })
  })
})