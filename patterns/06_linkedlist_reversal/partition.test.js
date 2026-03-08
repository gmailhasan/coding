const { ListNode, partition } = require('./partition');

// ── helpers ──────────────────────────────────────────────────────────────────

function makeList(values) {
  if (!values.length) return null;
  let head = new ListNode(values[0]);
  let cur  = head;
  for (let i = 1; i < values.length; i++) { cur.next = new ListNode(values[i]); cur = cur.next; }
  return head;
}

function toArray(head) {
  const out = [];
  while (head) { out.push(head.val); head = head.next; }
  return out;
}

// ── tests ─────────────────────────────────────────────────────────────────────

test('basic partition — k=5', () => {
  // 3→5→8→5→10→2→1  →  3→2→1→5→8→5→10
  expect(toArray(partition(makeList([3,5,8,5,10,2,1]), 5))).toEqual([3,2,1,5,8,5,10]);
});

test('all nodes less than k — order unchanged', () => {
  expect(toArray(partition(makeList([1,2,3]), 5))).toEqual([1,2,3]);
});

test('all nodes >= k — order unchanged', () => {
  expect(toArray(partition(makeList([5,6,7]), 3))).toEqual([5,6,7]);
});

test('empty list', () => {
  expect(partition(null, 3)).toBeNull();
});

test('single node less than k', () => {
  expect(toArray(partition(makeList([1]), 5))).toEqual([1]);
});

test('single node equal to k', () => {
  expect(toArray(partition(makeList([5]), 5))).toEqual([5]);
});

test('relative order preserved within each partition', () => {
  // 1→4→3→2→5→2, k=3  →  1→2→2→4→3→5
  expect(toArray(partition(makeList([1,4,3,2,5,2]), 3))).toEqual([1,2,2,4,3,5]);
});

test('k not present in list', () => {
  // 5→1→6→2→3, k=4  →  1→2→3→5→6
  expect(toArray(partition(makeList([5,1,6,2,3]), 4))).toEqual([1,2,3,5,6]);
});

test('all nodes equal to k stay in after-partition', () => {
  expect(toArray(partition(makeList([3,3,3]), 3))).toEqual([3,3,3]);
});

test('already partitioned — list unchanged', () => {
  expect(toArray(partition(makeList([1,2,5,6]), 5))).toEqual([1,2,5,6]);
});

test('no cycle introduced — tail.next must be null', () => {
  const result = partition(makeList([3,5,8,5,10,2,1]), 5);
  let cur = result, count = 0;
  // Walk up to 20 nodes; if we go further there's a cycle
  while (cur && count <= 20) { cur = cur.next; count++; }
  expect(cur).toBeNull();
});
