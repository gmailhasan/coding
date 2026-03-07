const { findKLargest } = require('./solution');

test('k=3 from six elements', () => {
  expect(findKLargest([3,1,5,12,2,11], 3).sort((a,b)=>a-b)).toEqual([5,11,12]);
});

test('k=1 — maximum only', () => {
  expect(findKLargest([1, 2, 3], 1)).toEqual([3]);
});

test('k equals array length', () => {
  expect(findKLargest([5,3,1], 3).sort((a,b)=>a-b)).toEqual([1,3,5]);
});

test('all same values', () => {
  expect(findKLargest([4,4,4,4], 2).sort((a,b)=>a-b)).toEqual([4,4]);
});

test('all negatives', () => {
  expect(findKLargest([-5,-1,-3,-2], 2).sort((a,b)=>a-b)).toEqual([-2,-1]);
});

test('mixed positive and negative', () => {
  expect(findKLargest([-10,5,0,3,-1], 3).sort((a,b)=>a-b)).toEqual([0,3,5]);
});

test('result has exactly k elements', () => {
  expect(findKLargest([1,2,3,4,5], 3)).toHaveLength(3);
});

test('k=4 from five elements', () => {
  expect(findKLargest([7,2,9,4,1], 4).sort((a,b)=>a-b)).toEqual([2,4,7,9]);
});
