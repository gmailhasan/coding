const { MedianFinder } = require('./solution');

test('two numbers', () => {
  const mf = new MedianFinder();
  mf.addNum(1); mf.addNum(2);
  expect(mf.findMedian()).toBe(1.5);
});

test('three numbers', () => {
  const mf = new MedianFinder();
  mf.addNum(1); mf.addNum(2); mf.addNum(3);
  expect(mf.findMedian()).toBe(2);
});

test('single number', () => {
  const mf = new MedianFinder();
  mf.addNum(5);
  expect(mf.findMedian()).toBe(5);
});

test('even count — average of two middles', () => {
  const mf = new MedianFinder();
  [1, 3, 5, 7].forEach(n => mf.addNum(n));
  expect(mf.findMedian()).toBe(4);   // (3+5)/2
});

test('odd count — exact middle', () => {
  const mf = new MedianFinder();
  [2, 3, 4].forEach(n => mf.addNum(n));
  expect(mf.findMedian()).toBe(3);
});

test('out-of-order insertion', () => {
  const mf = new MedianFinder();
  [5, 1, 3].forEach(n => mf.addNum(n));
  expect(mf.findMedian()).toBe(3);   // sorted: [1,3,5]
});

test('negative numbers', () => {
  const mf = new MedianFinder();
  [-5, -3, -1].forEach(n => mf.addNum(n));
  expect(mf.findMedian()).toBe(-3);
});

test('growing stream — median updates correctly', () => {
  const mf = new MedianFinder();
  mf.addNum(6);  expect(mf.findMedian()).toBe(6);
  mf.addNum(10); expect(mf.findMedian()).toBe(8);    // (6+10)/2
  mf.addNum(2);  expect(mf.findMedian()).toBe(6);    // [2,6,10]
  mf.addNum(6);  expect(mf.findMedian()).toBe(6);    // [2,6,6,10] avg=6
});
