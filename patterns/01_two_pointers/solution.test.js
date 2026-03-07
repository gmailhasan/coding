const { pairWithTargetSum } = require("./solution");

test("pair in middle — 2+4=6", () => {
  expect(pairWithTargetSum([1, 2, 3, 4, 6], 6)).toEqual([2, 4]);
});

test("pair skipping middle — 2+9=11", () => {
  expect(pairWithTargetSum([2, 5, 9, 11], 11)).toEqual([1, 3]);
});

test("pair first and last — 1+9=10", () => {
  expect(pairWithTargetSum([1, 2, 3, 9], 10)).toEqual([1, 4]);
});

test("pair at end — 5+7=12", () => {
  expect(pairWithTargetSum([1, 3, 5, 7], 12)).toEqual([3, 4]);
});

test("two-element array", () => {
  expect(pairWithTargetSum([3, 7], 10)).toEqual([1, 2]);
});

test("negative numbers — -5+3=-2", () => {
  expect(pairWithTargetSum([-5, -1, 0, 3, 7], -2)).toEqual([1, 4]);
});

test("adjacent pair — 4+5=9", () => {
  expect(pairWithTargetSum([1, 2, 4, 5, 9], 9)).toEqual([3, 4]);
});
