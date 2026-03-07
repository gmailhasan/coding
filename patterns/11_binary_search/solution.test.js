const { binarySearch } = require('./solution');

test('target in middle', () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
});

test('target not found', () => {
  expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
});

test('target at index 0', () => {
  expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
});

test('target at last index', () => {
  expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
});

test('single element — found', () => {
  expect(binarySearch([5], 5)).toBe(0);
});

test('single element — not found', () => {
  expect(binarySearch([5], 3)).toBe(-1);
});

test('two elements — first', () => {
  expect(binarySearch([1, 2], 1)).toBe(0);
});

test('two elements — second', () => {
  expect(binarySearch([1, 2], 2)).toBe(1);
});

test('negative numbers', () => {
  expect(binarySearch([-10, -5, 0, 3, 7], -5)).toBe(1);
});

test('target larger than all elements', () => {
  expect(binarySearch([1, 2, 3], 100)).toBe(-1);
});

test('target smaller than all elements', () => {
  expect(binarySearch([1, 2, 3], -1)).toBe(-1);
});
