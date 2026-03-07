const { TreeNode, levelOrder } = require('./solution');

// ── helper: build tree from level-order array (null = absent node) ───────────

function buildTree(values) {
  if (!values || values[0] == null) return null;
  const root  = new TreeNode(values[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < values.length) {
    const node = queue.shift();
    if (i < values.length && values[i] != null) { node.left  = new TreeNode(values[i]); queue.push(node.left);  } i++;
    if (i < values.length && values[i] != null) { node.right = new TreeNode(values[i]); queue.push(node.right); } i++;
  }
  return root;
}

// ── tests ─────────────────────────────────────────────────────────────────────

test('three levels', () => {
  const root = buildTree([3, 9, 20, null, null, 15, 7]);
  expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
});

test('single node', () => {
  expect(levelOrder(buildTree([1]))).toEqual([[1]]);
});

test('empty tree returns []', () => {
  expect(levelOrder(null)).toEqual([]);
});

test('left-skewed tree', () => {
  const root = new TreeNode(1);
  root.left  = new TreeNode(2);
  root.left.left = new TreeNode(3);
  expect(levelOrder(root)).toEqual([[1], [2], [3]]);
});

test('right-skewed tree', () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.right = new TreeNode(3);
  expect(levelOrder(root)).toEqual([[1], [2], [3]]);
});

test('complete binary tree — 4 levels of 7 nodes', () => {
  expect(levelOrder(buildTree([1,2,3,4,5,6,7]))).toEqual([[1],[2,3],[4,5,6,7]]);
});

test('two levels', () => {
  expect(levelOrder(buildTree([1, 2, 3]))).toEqual([[1], [2, 3]]);
});
