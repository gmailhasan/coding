"""
Pattern 05 — Cyclic Sort
==========================
Problem: Find the Missing Number
----------------------------------
Given an array `nums` containing n distinct integers in the range [0, n],
find and return the one number in that range that is missing.

Examples:
  find_missing_number([3, 0, 1])           ->  2
  find_missing_number([0, 1])              ->  2
  find_missing_number([9,6,4,2,3,5,7,0,1])->  8

Constraints:
  • n == len(nums)
  • 0 ≤ nums[i] ≤ n
  • All numbers in nums are unique

Hint (cyclic sort approach):
  1. Place each number at its correct index: nums[i] = i.
     Any number equal to n cannot be placed in [0, n-1], so leave it.
  2. Scan the sorted array — the first index where nums[i] != i is the
     missing number.  If every index matches, the missing number is n.
"""


def find_missing_number(nums: list[int]) -> int:
    # TODO: implement using cyclic sort
    raise NotImplementedError
