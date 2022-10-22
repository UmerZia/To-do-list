const addListItem = require('./addItem.js');
const getData = require('./addItem.js');

describe('Add item to list:', () => {
  test('length of array: ', () => {
    expect(addListItem('Umer').length).toBe(getData().length);
  });
});