const { subsets, subsetsWithDup } = require('./solution');

// Normalise: sort each subset, then sort the list so order doesn't matter
function norm(result) {
  return result.map(s => [...s].sort((a,b)=>a-b)).sort((a,b)=>{
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
      if ((a[i]??-Infinity) !== (b[i]??-Infinity)) return (a[i]??-Infinity) - (b[i]??-Infinity);
    }
    return a.length - b.length;
  });
}

test('three elements — 8 subsets', () => {
  const expected = [[], [1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]];
  expect(norm(subsets([1,2,3]))).toEqual(norm(expected));
});

test('single element — 2 subsets', () => {
  expect(norm(subsets([0]))).toEqual(norm([[], [0]]));
});

test('two elements — 4 subsets', () => {
  expect(norm(subsets([1,2]))).toEqual(norm([[],[1],[2],[1,2]]));
});

test('count is exactly 2^n', () => {
  for (let n = 1; n <= 4; n++) {
    expect(subsets(Array.from({length: n}, (_,i) => i))).toHaveLength(2**n);
  }
});

test('empty subset always present', () => {
  const result = subsets([5, 10]);
  expect(result.some(s => s.length === 0)).toBe(true);
});

test('no duplicate subsets', () => {
  const result   = subsets([1, 2, 3]);
  const normalised = result.map(s => JSON.stringify([...s].sort((a,b)=>a-b)));
  expect(new Set(normalised).size).toBe(normalised.length);
});

test('negatives', () => {
  expect(norm(subsets([-1, 0]))).toEqual(norm([[], [-1], [0], [-1, 0]]));
});

// ─── subsetsWithDup tests ───────────────────────────────────────

test('subsetsWithDup — duplicates trimmed', () => {
  const expected = [[], [1], [1,2], [1,2,2], [2], [2,2]];
  expect(norm(subsetsWithDup([1,2,2]))).toEqual(norm(expected));
});

test('subsetsWithDup — all same elements', () => {
  const expected = [[], [3], [3,3], [3,3,3]];
  expect(norm(subsetsWithDup([3,3,3]))).toEqual(norm(expected));
});

test('subsetsWithDup — no duplicates behaves like subsets', () => {
  expect(norm(subsetsWithDup([1,2,3]))).toEqual(norm(subsets([1,2,3])));
});

test('subsetsWithDup — single element', () => {
  expect(norm(subsetsWithDup([0]))).toEqual(norm([[], [0]]));
});

test('subsetsWithDup — no duplicate subsets', () => {
  const result = subsetsWithDup([1, 2, 2, 3]);
  const serialized = result.map(s => JSON.stringify([...s].sort((a,b)=>a-b)));
  expect(new Set(serialized).size).toBe(serialized.length);
});
