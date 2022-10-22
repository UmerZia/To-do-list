const clearAll = require('./clearAll.js');
const getData = require('./clearAll.js');

describe('Remove complete status items from the list:', () => {
  test('Compare items: ', () => {
    expect(clearAll()).toBe(getData());
  });
});