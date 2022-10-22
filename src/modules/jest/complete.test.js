const ToggleCompleted = require('./complete.js');
const getData = require('./complete.js');

describe('Edit complete status from the list:', () => {
  test('Compare items: ', () => {
    expect(ToggleCompleted('1', true)).toBe(getData());
  });
});