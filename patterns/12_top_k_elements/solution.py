"""
Pattern 12 — Top K Elements
=============================
Problem: K Largest Elements in an Array
-----------------------------------------
Given an integer array `nums` and an integer k, return the k largest
elements in the array.  The result may be returned in any order.

Examples:
  find_k_largest([3, 1, 5, 12, 2, 11], 3)  ->  [5, 11, 12]  (any order)
  find_k_largest([1, 2, 3], 1)              ->  [3]

Constraints:
  • 1 ≤ k ≤ len(nums) ≤ 10^4
  • -10^4 ≤ nums[i] ≤ 10^4

Hint: Use a min-heap of size k.
  • Push the first k elements onto the heap.
  • For each remaining element, if it is larger than the heap's minimum
    (heap[0]), pop the minimum and push the new element.
  • At the end the heap contains the k largest elements.

Do NOT simply sort the full array — that misses the point of the pattern.
"""

import heapq


def find_k_largest(nums: list[int], k: int) -> list[int]:
    # TODO: implement using a min-heap of size k
    raise NotImplementedError
