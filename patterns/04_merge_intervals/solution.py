"""
Pattern 04 — Merge Intervals
==============================
Problem: Merge Overlapping Intervals
--------------------------------------
Given a list of intervals [start, end], merge all overlapping intervals
and return the result as a list of non-overlapping intervals sorted by
start time.

Two intervals [a, b] and [c, d] overlap when c ≤ b.

Examples:
  merge([[1,3],[2,6],[8,10],[15,18]])  ->  [[1,6],[8,10],[15,18]]
  merge([[1,4],[4,5]])                 ->  [[1,5]]   # touching counts
  merge([[1,4],[2,3]])                 ->  [[1,4]]   # one inside the other

Constraints:
  • 1 ≤ len(intervals) ≤ 10^4
  • 0 ≤ start ≤ end ≤ 10^4

Hint: Sort by start time first, then walk through and either extend the
      last merged interval or start a new one.
"""


def merge(intervals: list[list[int]]) -> list[list[int]]:
    # TODO: implement the merge-intervals algorithm
    raise NotImplementedError
