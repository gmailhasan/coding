"""
Pattern 02 — Sliding Window
=============================
Problem: Maximum Sum Subarray of Size K
-----------------------------------------
Given an array of integers and a positive integer k, find the maximum
sum of any contiguous subarray of size exactly k.

Examples:
  max_sum_subarray([2, 1, 5, 1, 3, 2], 3)  ->  9   # [5, 1, 3]
  max_sum_subarray([2, 3, 4, 1, 5],     2)  ->  7   # [3, 4]

Constraints:
  • 1 ≤ k ≤ len(arr) ≤ 10^5
  • -10^4 ≤ arr[i] ≤ 10^4

Hint: Compute the first window's sum, then slide by subtracting the
      element leaving the left edge and adding the element entering
      the right edge.
"""


def max_sum_subarray(arr: list[int], k: int) -> int:
    # TODO: implement using a sliding window
    raise NotImplementedError
