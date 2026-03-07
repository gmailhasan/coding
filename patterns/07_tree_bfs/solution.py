"""
Pattern 07 — Tree BFS (Breadth-First Search)
==============================================
Problem: Binary Tree Level Order Traversal
-------------------------------------------
Given the root of a binary tree, return its level-order traversal as a
list of lists, where each inner list contains the values of nodes at
that depth, left to right.

Example:
        3
       / \\
      9   20
         /  \\
        15   7

  level_order(root)  ->  [[3], [9, 20], [15, 7]]

Constraints:
  • 0 ≤ number of nodes ≤ 2000
  • -1000 ≤ node.val ≤ 1000
  • Return [] for an empty tree

Hint: Use a queue (collections.deque).  At the start of each level,
      record the current queue size — that's how many nodes belong to
      this level.
"""

from collections import deque


class TreeNode:
    def __init__(self, val: int = 0,
                 left: "TreeNode | None" = None,
                 right: "TreeNode | None" = None):
        self.val   = val
        self.left  = left
        self.right = right

    def __repr__(self) -> str:
        return f"TreeNode({self.val})"


def level_order(root: TreeNode | None) -> list[list[int]]:
    # TODO: implement BFS level-order traversal
    raise NotImplementedError
