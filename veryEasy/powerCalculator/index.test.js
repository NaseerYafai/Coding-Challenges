const circuitPower = require('./index.js');

describe('circuitPower', () => {
  test('1.5V and 2A should return 3', () => {
    expect(circuitPower(1.5, 2)).toBe(3);
  });

  test('12V and 5A should return 60', () => {
    expect(circuitPower(12, 5)).toBe(60);
  });

  test('230V and 10A should return 2300', () => {
    expect(circuitPower(230, 10)).toBe(2300);
  });

  test('110V and 3A should return 330', () => {
    expect(circuitPower(110, 3)).toBe(330);
  });

  test('480V and 20A should return 9600', () => {
    expect(circuitPower(480, 20)).toBe(9600);
  });
});