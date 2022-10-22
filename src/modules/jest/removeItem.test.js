const deleteElement = require('./removeItem.js');
const getData = require('./removeItem.js');

describe('Remove item from the list:', () => {
  test('length of array: ', () => {
    expect(deleteElement(1).length).toBe(getData().length);
  });
});