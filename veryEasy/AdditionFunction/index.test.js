const addSum = require('./index.js');

describe('addSum', () => {
  test('5 + 5 is equal to 10', () => {
    expect(addSum(5, 5)).toBe(10);
  });

  test('10 + 10 is equal to 20', () => {
    expect(addSum(10, 10)).toBe(20);
  });

  test('0 + 0 is equal to 0', () => {
    expect(addSum(0, 0)).toBe(0);
  });

  test('0 + 10 is equal to 10', () => {
    expect(addSum(0, 10)).toBe(10);
  });

  test('10 + 5 is equal to 15', () => {
    expect(addSum(10, 5)).toBe(15);
  });

  test('10 + 20 is equal to 30', () => {
    expect(addSum(10, 20)).toBe(30);
  });

});
