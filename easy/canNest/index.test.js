const canNest = require('./index')

describe('canNest', () => {
  test('canNest function is defined', () => {
    expect(typeof canNest).toEqual('function')
  })

  test('canNest([1, 2, 3, 4], [0, 6]) returns true', () => {
    expect(canNest([1, 2, 3, 4], [0, 6])).toBe(true)
  })

  test('canNest([3, 1], [4, 0]) returns true', () => {
    expect(canNest([3, 1], [4, 0])).toBe(true)
  })

  test('canNest([9, 9, 8], [8, 9]) returns false', () => {
    expect(canNest([9, 9, 8], [8, 9])).toBe(false)
  })

  test('canNest([1, 2, 3, 4], [2, 3]) returns false', () => {
    expect(canNest([1, 2, 3, 4], [2, 3])).toBe(false)
  })

  test('canNest([1, 2, 3, 4], [2, 4]) returns false', () => {
    expect(canNest([1, 2, 3, 4], [2, 4])).toBe(false)
  })

  test('canNest([1, 2, 3, 4], [2, 5]) returns false', () => {
    expect(canNest([1, 2, 3, 4], [2, 5])).toBe(false)
  })

  test('canNest([1, 2, 3, 4], [2, 2]) returns false', () => {
    expect(canNest([1, 2, 3, 4], [2, 2])).toBe(false)
  })

  test('canNest([1, 2, 3, 4], [2, 1]) returns false', () => {
    expect(canNest([1, 2, 3, 4], [2, 1])).toBe(false)
  })

  test('canNest([1, 2, 3, 4], [1, 2]) returns false', () => {
    expect(canNest([1, 2, 3, 4], [1, 2])).toBe(false)
  })
})
