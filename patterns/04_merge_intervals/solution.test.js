const { merge } = require('./solution');

test('basic overlap', () => {
  expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
});

test('touching intervals merge', () => {
  expect(merge([[1,4],[4,5]])).toEqual([[1,5]]);
});

test('one interval contained in another', () => {
  expect(merge([[1,4],[2,3]])).toEqual([[1,4]]);
});

test('no overlap', () => {
  expect(merge([[1,2],[3,4],[5,6]])).toEqual([[1,2],[3,4],[5,6]]);
});

test('single interval', () => {
  expect(merge([[5,10]])).toEqual([[5,10]]);
});

test('all merge into one', () => {
  expect(merge([[1,4],[2,5],[3,6]])).toEqual([[1,6]]);
});

test('unsorted input must be sorted first', () => {
  expect(merge([[8,10],[1,3],[2,6],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
});

test('identical intervals', () => {
  expect(merge([[1,3],[1,3],[1,3]])).toEqual([[1,3]]);
});
