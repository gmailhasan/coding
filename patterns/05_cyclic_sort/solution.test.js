const { findMissingNumber } = require('./solution');

test('missing middle — [3,0,1] → 2', () => {
  expect(findMissingNumber([3, 0, 1])).toBe(2);
});

test('missing n — [0,1] → 2', () => {
  expect(findMissingNumber([0, 1])).toBe(2);
});

test('missing zero — [1,2,3] → 0', () => {
  expect(findMissingNumber([1, 2, 3])).toBe(0);
});

test('missing last in range — [0,1,2] → 3', () => {
  expect(findMissingNumber([0, 1, 2])).toBe(3);
});

test('single element — [1] → 0', () => {
  expect(findMissingNumber([1])).toBe(0);
});

test('single element — [0] → 1', () => {
  expect(findMissingNumber([0])).toBe(1);
});

test('large array — missing 8', () => {
  expect(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
});

test('missing first — [1,2,3,4] → 0', () => {
  expect(findMissingNumber([1, 2, 3, 4])).toBe(0);
});
