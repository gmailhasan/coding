const { canFinish } = require('./solution');

test('simple chain — acyclic', () => {
  expect(canFinish(2, [[1, 0]])).toBe(true);
});

test('two-node cycle', () => {
  expect(canFinish(2, [[1,0],[0,1]])).toBe(false);
});

test('no prerequisites — always possible', () => {
  expect(canFinish(5, [])).toBe(true);
});

test('single course', () => {
  expect(canFinish(1, [])).toBe(true);
});

test('diamond shape — acyclic', () => {
  // 0→1→3, 0→2→3
  expect(canFinish(4, [[1,0],[2,0],[3,1],[3,2]])).toBe(true);
});

test('three-node cycle', () => {
  expect(canFinish(3, [[1,0],[2,1],[0,2]])).toBe(false);
});

test('disconnected acyclic graph', () => {
  // Two independent chains: 0→1 and 2→3
  expect(canFinish(4, [[1,0],[3,2]])).toBe(true);
});

test('self-loop', () => {
  expect(canFinish(2, [[0,0]])).toBe(false);
});

test('long chain — acyclic', () => {
  const prereqs = Array.from({length: 4}, (_, i) => [i+1, i]);
  expect(canFinish(5, prereqs)).toBe(true);
});

test('long chain with cycle at end', () => {
  const prereqs = [...Array.from({length: 4}, (_, i) => [i+1, i]), [1, 4]];
  expect(canFinish(5, prereqs)).toBe(false);
});
