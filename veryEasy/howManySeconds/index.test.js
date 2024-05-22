const howManySeconds = require('./index.js')

describe('howManySeconds', () => {
  test('1 hour is 3600 seconds', () => {
    expect(howManySeconds(1)).toBe(3600)
  })
  test('2 hours is 7200 seconds', () => {
    expect(howManySeconds(2)).toBe(7200)
  })
  test('3 hours is 10800 seconds', () => {
    expect(howManySeconds(3)).toBe(10800)
  })
  test('14 hours is 50400 seconds', () => {
    expect(howManySeconds(14)).toBe(50400)
  })
  test('22 hours is 79200 seconds', () => {
    expect(howManySeconds(22)).toBe(79200)
  })
})
