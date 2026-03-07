"""
Pattern 11 — Binary Search
============================
Problem: Classic Binary Search
--------------------------------
Given a sorted array of distinct integers and a target value, return
the index of the target in the array.  Return -1 if the target is not
found.

Examples:
  binary_search([-1, 0, 3, 5, 9, 12], 9)   ->  4
  binary_search([-1, 0, 3, 5, 9, 12], 2)   ->  -1
  binary_search([5], 5)                     ->  0

Constraints:
  • 1 ≤ len(nums) ≤ 10^4
  • -10^4 ≤ nums[i], target ≤ 10^4
  • All values in nums are distinct
  • nums is sorted in ascending order

Hint: Maintain `low` and `high` pointers.  At each step compute
      mid = (low + high) // 2 and compare nums[mid] with target.
      Do NOT use Python's built-in bisect module.
"""


def binary_search(nums: list[int], target: int) -> int:
    # TODO: implement iterative binary search
    raise NotImplementedError
