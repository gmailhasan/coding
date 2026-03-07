/**
 * Pattern 07 — Tree BFS (Breadth-First Search)
 * ==============================================
 * Problem: Binary Tree Level Order Traversal
 *
 * Given the root of a binary tree, return its level-order traversal as
 * an array of arrays, where each inner array contains the values of nodes
 * at that depth, left to right.  Return [] for an empty tree.
 *
 * Example:
 *         3
 *        / \
 *       9   20
 *          /  \
 *         15   7
 *
 *   levelOrder(root)  →  [[3], [9, 20], [15, 7]]
 *
 * Constraints:
 *   • 0 ≤ number of nodes ≤ 2000
 *   • -1000 ≤ node.val ≤ 1000
 *
 * Hint: Use a queue (array used as queue).  At the start of each level,
 *       record the current queue length — that is how many nodes belong
 *       to this level.
 *
 * @param {TreeNode|null} root
 * @returns {number[][]}
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function levelOrder1(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    let size = queue.length;
    let levelItems = [];
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      levelItems.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    result.push(levelItems);
  }
  return result;
}

function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    let levelOrder = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      levelOrder.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    result.push(levelOrder);
  }
  return result;
}

module.exports = { TreeNode, levelOrder };
