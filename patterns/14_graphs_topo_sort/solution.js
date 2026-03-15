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
  // create a graph  with adjacency list from prerequisites
  // count = 0
  // calculate indegree for nodes
  // for all indegree=0, add them in queue
  // do bfs with starting nodes
  // decrement indegree for neighbors and when a indegree becomes 0, add to queue
  // count++

  // check if we have count == numCourses
  let graph = new Map();
  let output = [];
  let indegree = new Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    let [c, p] = prerequisites[i];
    if (!graph.has(p)) {
      graph.set(p, []);
    }
    graph.get(p).push(c);
    indegree[c]++;
  }

  let queue = [];
  let count = 0;
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] == 0) {
      queue.push(i);
      output.push(i);
      count++;
    }
  }

  while (queue.length > 0) {
    const curLen = queue.length;
    for (i = 0; i < curLen; i++) {
      const courseIdx = queue.shift();
      const allChildCourse = graph.get(courseIdx);
      for (c of allChildCourse ?? []) {
        indegree[c]--;
        if (indegree[c] == 0) {
          output.push(c);
          count++;
          queue.push(c);
        }
      }
    }
  }
  return count === numCourses;
}

canFinish(4, [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
]);
module.exports = { canFinish };
