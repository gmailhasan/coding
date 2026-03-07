"""
Pattern 14 — Graphs & Topological Sort
========================================
Problem: Course Schedule (Cycle Detection in a Directed Graph)
----------------------------------------------------------------
There are `num_courses` courses labelled 0 to num_courses-1.
You are given a list of prerequisite pairs [a, b] meaning you must
finish course b BEFORE you can take course a.

Return True if it is possible to finish all courses (i.e. the
dependency graph has no cycle), or False otherwise.

Examples:
  can_finish(2, [[1, 0]])           ->  True   # 0 → 1, no cycle
  can_finish(2, [[1, 0], [0, 1]])   ->  False  # 0 → 1 → 0, cycle!
  can_finish(4, [[1,0],[2,0],[3,1],[3,2]])  ->  True

Constraints:
  • 1 ≤ num_courses ≤ 2000
  • 0 ≤ len(prerequisites) ≤ 5000
  • prerequisites[i] = [a, b] means b must come before a
  • No duplicate prerequisite pairs

Hint (BFS / Kahn's algorithm):
  1. Build an adjacency list and an in-degree array.
  2. Enqueue all courses with in-degree 0.
  3. Process the queue: for each course, decrement its neighbours'
     in-degrees; enqueue any that reach 0.
  4. If the count of processed courses == num_courses, return True.

Hint (DFS cycle detection):
  Use three states per node: unvisited / visiting / visited.
  If you hit a "visiting" node again, a cycle exists.
"""

from collections import deque


def can_finish(num_courses: int, prerequisites: list[list[int]]) -> bool:
    # TODO: implement using BFS (Kahn's) or DFS cycle detection
    raise NotImplementedError
