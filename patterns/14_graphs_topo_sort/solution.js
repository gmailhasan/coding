/**
 * Pattern 14 — Graphs & Topological Sort
 * ========================================
 * Problem: Course Schedule (Cycle Detection)
 *
 * There are numCourses courses labelled 0 to numCourses-1.
 * prerequisites[i] = [a, b] means you must finish course b BEFORE
 * taking course a.
 *
 * Return true if it is possible to finish all courses (no cycle),
 * or false otherwise.
 *
 * Examples:
 *   canFinish(2, [[1,0]])           →  true   // 0 → 1, acyclic
 *   canFinish(2, [[1,0],[0,1]])     →  false  // 0 → 1 → 0, cycle
 *   canFinish(4, [[1,0],[2,0],[3,1],[3,2]])  →  true
 *
 * Constraints:
 *   • 1 ≤ numCourses ≤ 2000
 *   • 0 ≤ prerequisites.length ≤ 5000
 *
 * Hint (BFS / Kahn's algorithm):
 *   1. Build adjacency list + in-degree array.
 *   2. Enqueue all nodes with in-degree 0.
 *   3. Process: for each node, decrement neighbours' in-degrees;
 *      enqueue any that reach 0.
 *   4. If processed count === numCourses  →  true.
 *
 * Hint (DFS cycle detection):
 *   Three states: 0=unvisited, 1=visiting, 2=visited.
 *   A back edge to a "visiting" node means a cycle exists.
 *
 * @param {number}     numCourses
 * @param {number[][]} prerequisites
 * @returns {boolean}
 */
function canFinish(numCourses, prerequisites) {
  // TODO: implement using BFS (Kahn's) or DFS cycle detection
  throw new Error('Not implemented');
}

module.exports = { canFinish };
