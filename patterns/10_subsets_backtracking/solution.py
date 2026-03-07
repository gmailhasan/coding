"""
Pattern 10 — Subsets / Backtracking
======================================
Problem: Generate All Subsets (Power Set)
------------------------------------------
Given a list of DISTINCT integers, return all possible subsets
(the power set).  The solution set must not contain duplicate subsets,
but the order of subsets in the output does not matter.

Examples:
  subsets([1, 2, 3])  ->  [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
                          (any order is fine)

  subsets([0])        ->  [[], [0]]

Constraints:
  • 1 ≤ len(nums) ≤ 10
  • -10 ≤ nums[i] ≤ 10
  • All elements of nums are distinct

Hint (BFS / iterative approach):
  Start with [[]], then for each number extend every existing subset
  with that number and add the new subsets to the result.

Hint (backtracking / DFS approach):
  At each index, choose to include or exclude the element, then recurse.
"""


def subsets(nums: list[int]) -> list[list[int]]:
    # TODO: implement — return all 2^n subsets
    raise NotImplementedError
