const { ListNode, hasCycle } = require('./solution');

// ── helpers ─────────────────────────────────────────────────────────────────

function makeList(values) {
  if (!values.length) return null;
  const nodes = values.map(v => new ListNode(v));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
  return nodes[0];
}

function makeCycleList(values, cyclePos) {
  if (!values.length) return null;
  const nodes = values.map(v => new ListNode(v));
  for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
  if (cyclePos >= 0) nodes[nodes.length - 1].next = nodes[cyclePos]; // create cycle
  return nodes[0];
}

// ── tests ────────────────────────────────────────────────────────────────────

test('cycle — tail points to second node', () => {
  const head = makeCycleList([1, 2, 3, 4], 1);
  expect(hasCycle(head)).toBe(true);
});

test('cycle — tail points to head', () => {
  const head = makeCycleList([1, 2, 3], 0);
  expect(hasCycle(head)).toBe(true);
});

test('no cycle — basic list', () => {
  expect(hasCycle(makeList([1, 2, 3, 4, 5]))).toBe(false);
});

test('no cycle — single node', () => {
  expect(hasCycle(makeList([1]))).toBe(false);
});

test('empty list', () => {
  expect(hasCycle(null)).toBe(false);
});

test('self-loop — single node points to itself', () => {
  const node = new ListNode(1);
  node.next = node;
  expect(hasCycle(node)).toBe(true);
});

test('two-node cycle', () => {
  expect(hasCycle(makeCycleList([1, 2], 0))).toBe(true);
});

test('two nodes, no cycle', () => {
  expect(hasCycle(makeList([1, 2]))).toBe(false);
});
