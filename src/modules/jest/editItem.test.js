const editElement = require('./editItem.js');
const getData = require('./editItem.js');

describe('Edit item from the list:', () => {
  test('Compare items: ', () => {
    expect(editElement(1, 'ABC')).toBe(getData());
  });
});