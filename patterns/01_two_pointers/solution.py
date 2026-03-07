"""
Pattern 01 — Two Pointers
==========================
Problem: Pair with Target Sum
-------------------------------
Given a SORTED array of integers and a target integer, return the
1-based indices [left, right] of the two numbers that add up to the
target.  Exactly one valid pair is guaranteed to exist.

Examples:
  pair_with_target_sum([1, 2, 3, 4, 6], 6)  ->  [2, 4]   # 2 + 4 = 6
  pair_with_target_sum([2, 5, 9, 11],   11) ->  [1, 3]   # 2 + 9 = 11

Constraints:
  • 2 ≤ len(arr) ≤ 10^5
  • -10^4 ≤ arr[i] ≤ 10^4
  • arr is sorted in non-decreasing order
  • Exactly one valid pair exists — do NOT use the same element twice

Hint: Start one pointer at each end and move them inward.
"""


def pair_with_target_sum(arr: list[int], target: int) -> list[int]:
    # TODO: implement using the two-pointers technique
    raise NotImplementedError
