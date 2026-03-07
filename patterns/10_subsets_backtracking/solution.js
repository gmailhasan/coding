/**
 * Pattern 10 — Subsets / Backtracking
 * =====================================
 * Problem: Generate All Subsets (Power Set)
 *
 * Given an array of DISTINCT integers, return all possible subsets.
 * The solution set must not contain duplicate subsets; order does not matter.
 *
 * Examples:
 *   subsets([1,2,3])  →  [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
 *   subsets([0])      →  [[], [0]]
 *
 * Constraints:
 *   • 1 ≤ nums.length ≤ 10
 *   • -10 ≤ nums[i] ≤ 10
 *   • All elements are distinct
 *
 * Hint (iterative / BFS):
 *   Start with [[]], then for each number copy every existing subset,
 *   append the number to each copy, and add those copies to the result.
 *
 * Hint (backtracking / DFS):
 *   At each index choose to include or exclude the element, then recurse.
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function subsets1(nums) {
  let result = [];
  function backtrack(start, path) {
    result.push(path);
    for (let i = start; i < nums.length; i++) {
      backtrack(i + 1, [...path, nums[i]]);
    }
  }
  backtrack(0, []);
  return result;
}

/**
 * Subsets II — with duplicate elements
 * ======================================
 * Given an array that MAY contain duplicates, return all possible
 * subsets without duplicate subsets.
 *
 * Examples:
 *   subsetsWithDup([1,2,2])  →  [[],[1],[1,2],[1,2,2],[2],[2,2]]
 *   subsetsWithDup([0])      →  [[],[0]]
 *
 * Approach:
 *   1. Sort nums so duplicates are adjacent.
 *   2. Backtrack as before, but skip nums[i] when nums[i] === nums[i-1]
 *      and i > start  (avoids picking the same value again at the same
 *      decision level).
 *
 * Time:  O(n · 2^n)  — up to 2^n subsets, each copied in O(n)
 * Space: O(n)        — recursion depth (excluding output)
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
function subsetsWithDup(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  function backtrack(start, path) {
    result.push(path);
    for (let i = start; i < nums.length; i++) {
      // skip duplicate at the same decision level
      if (i > start && nums[i] === nums[i - 1]) continue;
      // path.push(nums[i]);
      backtrack(i + 1, [...path, nums[i]]);
      // path.pop();
    }
  }

  backtrack(0, []);
  return result;
}

function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push(path);
    for (let i = start; i < nums.length; i++) {
      backtrack(i + 1, [...path, nums[i]]);
    }
  }

  backtrack(0, []);
  return result;
}

module.exports = { subsets, subsetsWithDup };
