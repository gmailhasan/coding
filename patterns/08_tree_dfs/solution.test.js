const { TreeNode, hasPathSum } = require('./solution');

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

// Build the example tree: 5,4,8,11,null,13,4,7,2,null,null,null,null,null,1
function exampleTree() {
  return buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, null, null, 1]);
}

test('path exists left — 5+4+11+2=22', () => {
  expect(hasPathSum(exampleTree(), 22)).toBe(true);
});

test('path exists right — 5+8+13=26', () => {
  expect(hasPathSum(exampleTree(), 26)).toBe(true);
});

test('no matching path', () => {
  expect(hasPathSum(exampleTree(), 18)).toBe(false);
});

test('empty tree returns false', () => {
  expect(hasPathSum(null, 0)).toBe(false);
});

test('single node — matches', () => {
  expect(hasPathSum(new TreeNode(5), 5)).toBe(true);
});

test('single node — no match', () => {
  expect(hasPathSum(new TreeNode(5), 3)).toBe(false);
});

test('negative values', () => {
  const root = new TreeNode(-2);
  root.right = new TreeNode(-3);
  expect(hasPathSum(root, -5)).toBe(true);
});

test('internal node is NOT a leaf — root alone should not match', () => {
  const root = new TreeNode(1);
  root.left  = new TreeNode(2);
  expect(hasPathSum(root, 1)).toBe(false);  // 1 has a child, not a leaf
});
