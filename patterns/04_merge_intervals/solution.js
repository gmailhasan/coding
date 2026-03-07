/**
 * Pattern 04 — Merge Intervals
 * ==============================
 * Problem: Merge Overlapping Intervals
 *
 * Given a list of intervals [start, end], merge all overlapping intervals
 * and return the result sorted by start time.
 *
 * Two intervals [a, b] and [c, d] overlap when c ≤ b.
 *
 * Examples:
 *   merge([[1,3],[2,6],[8,10],[15,18]])  →  [[1,6],[8,10],[15,18]]
 *   merge([[1,4],[4,5]])                 →  [[1,5]]    // touching counts
 *   merge([[1,4],[2,3]])                 →  [[1,4]]    // one inside the other
 *
 * Constraints:
 *   • 1 ≤ intervals.length ≤ 10^4
 *   • 0 ≤ start ≤ end ≤ 10^4
 *
 * Hint: Sort by start time, then walk through and either extend the last
 *       merged interval or start a new one.
 *
 * @param {number[][]} intervals
 * @returns {number[][]}
 */
function merge1(intervals) {
  // TODO: implement the merge-intervals algorithm
  intervals.sort((a, b) => a[0] - b[0]);
  let len = intervals.length;
  let result = [];
  result.push(intervals[0]);
  let current = intervals[0];
  for (let i = 1; i < len; i++) {
    //check if they are overlapping - yes, merge and add , no just add
    if (current[1] >= intervals[i][0]) {
      //overlap
      //adjust current end
      current[1] = Math.max(current[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
      current = intervals[i];
    }
  }

  return result;
}

function merge(intervals) {
  let len = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  let current = intervals[0];
  let result = [current];
  for (let i = 1; i < len; i++) {
    // check if interval i has start time less than current end time. if so merge, else add the result to result array
    if (current[1] >= intervals[i][0]) {
      current[1] = Math.max(current[1], intervals[i][1]); // adjust the end time
    } else {
      result.push(intervals[i]);
      current = intervals[i];
    }
  }
  return result;
}

module.exports = { merge };
