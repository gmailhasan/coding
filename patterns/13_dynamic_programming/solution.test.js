const { knapsack } = require('./solution');

test('basic four items — best is idx 1+2, val=9', () => {
  // wt=[1,3,4,5] val=[1,4,5,7] cap=7 → take wt3+wt4=7, val4+val5=9
  expect(knapsack([1,3,4,5], [1,4,5,7], 7)).toBe(9);
});

test('three items — best is idx 0+1, val=7', () => {
  expect(knapsack([2,3,4], [3,4,5], 5)).toBe(7);
});

test('zero capacity', () => {
  expect(knapsack([1,2,3], [10,20,30], 0)).toBe(0);
});

test('single item fits', () => {
  expect(knapsack([5], [10], 5)).toBe(10);
});

test('single item does not fit', () => {
  expect(knapsack([6], [10], 5)).toBe(0);
});

test('all items fit', () => {
  expect(knapsack([1,2,3], [1,2,3], 10)).toBe(6);
});

test('must choose higher-value item when capacity allows only one', () => {
  // wt=[3,3] val=[4,5] cap=3 → can only take one; pick val=5
  expect(knapsack([3,3], [4,5], 3)).toBe(5);
});

test('items 1+2 are best — val=22', () => {
  // wt=[1,2,3] val=[6,10,12] cap=5 → take wt2+wt3=5, val10+val12=22
  expect(knapsack([1,2,3], [6,10,12], 5)).toBe(22);
});
