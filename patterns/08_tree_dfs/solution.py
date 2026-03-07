"""
Pattern 08 — Tree DFS (Depth-First Search)
============================================
Problem: Binary Tree Path Sum
-------------------------------
Given the root of a binary tree and an integer `target`, return True if
the tree has a root-to-leaf path whose node values sum to `target`,
or False otherwise.

A leaf is a node with no children.

Example:
        5
       / \\
      4   8
     /   / \\
    11  13   4
   /  \\       \\
  7    2        1

  has_path_sum(root, 22)  ->  True   # path: 5 → 4 → 11 → 2
  has_path_sum(root, 26)  ->  True   # path: 5 → 8 → 13
  has_path_sum(root, 18)  ->  False

Constraints:
  • 0 ≤ number of nodes ≤ 5000
  • -1000 ≤ node.val ≤ 1000
  • -1000 ≤ target ≤ 1000

Hint: Subtract node.val from target as you recurse.  At a leaf, check
      whether the remaining target equals zero.
"""


class TreeNode:
    def __init__(self, val: int = 0,
                 left: "TreeNode | None" = None,
                 right: "TreeNode | None" = None):
        self.val   = val
        self.left  = left
        self.right = right


def has_path_sum(root: TreeNode | None, target: int) -> bool:
    # TODO: implement using DFS (recursive or iterative)
    raise NotImplementedError
