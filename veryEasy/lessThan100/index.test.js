const lessThan100 = require('./index.js')

describe('lessThan100', () => {
  test('5 + 57 is less than 100', () => {
    expect(lessThan100(5, 57)).toBe(true)
  })

  test('77 + 30 is not less than 100', () => {
    expect(lessThan100(77, 30)).toBe(false)
  })

  test('0 + 59 is less than 100', () => {
    expect(lessThan100(0, 59)).toBe(true)
  })

  test('78 + 35 is not less than 100', () => {
    expect(lessThan100(78, 35)).toBe(false)
  })
  
})
