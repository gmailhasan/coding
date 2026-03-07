"""
Pattern 09 — Two Heaps
========================
Problem: Find Median from a Data Stream
-----------------------------------------
Design a class `MedianFinder` that supports:

  add_num(num)   — add an integer to the data structure
  find_median()  — return the median of all numbers added so far
                   (float if even count, int or float if odd count)

The median is the middle value when the list is sorted.
For an even count, return the average of the two middle values.

Examples:
  mf = MedianFinder()
  mf.add_num(1)
  mf.add_num(2)
  mf.find_median()  ->  1.5    # (1 + 2) / 2

  mf.add_num(3)
  mf.find_median()  ->  2.0    # middle element

Constraints:
  • -10^5 ≤ num ≤ 10^5
  • At least one number is added before find_median is called
  • Up to 5 × 10^4 calls total

Hint: Keep two heaps:
  • max-heap (lower half) — Python's heapq is a min-heap, so negate values
  • min-heap (upper half)
  After each insert, rebalance so sizes differ by at most 1.
"""

import heapq


class MedianFinder:
    def __init__(self):
        # TODO: initialise your two heaps here
        raise NotImplementedError

    def add_num(self, num: int) -> None:
        # TODO: add num and rebalance
        raise NotImplementedError

    def find_median(self) -> float:
        # TODO: return the current median
        raise NotImplementedError
