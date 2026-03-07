/**
 * Pattern 08 — Tree DFS (Depth-First Search)
 * ============================================
 * Problem: Binary Tree Path Sum
 *
 * Given the root of a binary tree and an integer target, return true if
 * the tree has a root-to-leaf path whose node values sum to target.
 * A leaf is a node with no children.
 *
 * Example:
 *         5
 *        / \
 *       4   8
 *      /   / \
 *    11   13   4
 *   /  \        \
 *  7    2         1
 *
 *   hasPathSum(root, 22)  →  true    // 5 → 4 → 11 → 2
 *   hasPathSum(root, 26)  →  true    // 5 → 8 → 13
 *   hasPathSum(root, 18)  →  false
 *
 * Constraints:
 *   • 0 ≤ number of nodes ≤ 5000
 *   • -1000 ≤ node.val, target ≤ 1000
 *
 * Hint: Subtract node.val from target as you recurse.  At a leaf,
 *       check whether the remaining target equals zero.
 *
 * @param {TreeNode|null} root
 * @param {number}        target
 * @returns {boolean}
 */

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function hasPathSum1(root, target) {
  // TODO: implement using DFS (recursive or iterative)

  if (!root) return false;
  if (!root.left && !root.right) return target == root.val;

  const newTarget = target - root.val;
  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}

function hasPathSum(root, target) {
  if (!root) return false;
  if (!root.left && !root.right) return target == root.val;
  const newTarget = target - root.val;
  return hasPathSum(root.left, newTarget) || hasPathSum(root.right, newTarget);
}

module.exports = { TreeNode, hasPathSum };
