const { ListNode, reverseList } = require('./solution');

// ── helpers ─────────────────────────────────────────────────────────────────

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

// ── tests ────────────────────────────────────────────────────────────────────

test('five nodes reversed', () => {
  expect(toArray(reverseList(makeList([1,2,3,4,5])))).toEqual([5,4,3,2,1]);
});

test('two nodes', () => {
  expect(toArray(reverseList(makeList([1, 2])))).toEqual([2, 1]);
});

test('single node unchanged', () => {
  expect(toArray(reverseList(makeList([42])))).toEqual([42]);
});

test('empty list returns null', () => {
  expect(reverseList(null)).toBeNull();
});

test('already reversed input', () => {
  expect(toArray(reverseList(makeList([5,4,3,2,1])))).toEqual([1,2,3,4,5]);
});

test('new head is old tail', () => {
  const newHead = reverseList(makeList([10, 20, 30]));
  expect(newHead.val).toBe(30);
});

test('old head becomes new tail with null next', () => {
  const newHead = reverseList(makeList([10, 20, 30]));
  let cur = newHead;
  while (cur.next) cur = cur.next;
  expect(cur.val).toBe(10);
  expect(cur.next).toBeNull();
});
