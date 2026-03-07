const { maxSumSubarray } = require('./solution');

test('window of 3 — max is [5,1,3]=9', () => {
  expect(maxSumSubarray([2, 1, 5, 1, 3, 2], 3)).toBe(9);
});

test('window of 2 — max is [3,4]=7', () => {
  expect(maxSumSubarray([2, 3, 4, 1, 5], 2)).toBe(7);
});

test('k equals array length', () => {
  expect(maxSumSubarray([1, 2, 3], 3)).toBe(6);
});

test('k equals 1 — max single element', () => {
  expect(maxSumSubarray([1, 5, 2, 3], 1)).toBe(5);
});

test('all same elements', () => {
  expect(maxSumSubarray([3, 3, 3, 3, 3], 2)).toBe(6);
});

test('all negatives — least negative window', () => {
  expect(maxSumSubarray([-1, -2, -3, -4], 2)).toBe(-3);   // [-1, -2]
});

test('mixed positive and negative', () => {
  // windows of 3: [3,-1,4]=6, [-1,4,2]=5, [4,2,1]=7, [2,1,-2]=1 → max=7
  expect(maxSumSubarray([3, -1, 4, 2, 1, -2], 3)).toBe(7);
});

test('single element array', () => {
  expect(maxSumSubarray([42], 1)).toBe(42);
});
