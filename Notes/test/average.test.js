const { average } = require('../utils/for_testings')

describe.skip('average', () => {
  test(' Of one value is the value itself', () => {
    expect(average([1])).toBe(1)
  })
})

test(' of many  is calculating  correctly ', () => {
  expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5)
})

test(' of empy array is  zero', () => {
  expect(average([])).toBe(0)
})
