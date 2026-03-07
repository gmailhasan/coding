/**
 * Pattern 11 — Binary Search
 * ============================
 * Problem: Classic Binary Search
 *
 * Given a sorted array of distinct integers and a target value, return
 * the index of the target, or -1 if not found.
 *
 * Examples:
 *   binarySearch([-1,0,3,5,9,12], 9)   →  4
 *   binarySearch([-1,0,3,5,9,12], 2)   →  -1
 *   binarySearch([5], 5)                →  0
 *
 * Constraints:
 *   • 1 ≤ nums.length ≤ 10^4
 *   • -10^4 ≤ nums[i], target ≤ 10^4
 *   • All values are distinct and sorted in ascending order
 *   • Do NOT use Array.indexOf or built-in search methods
 *
 * Hint: Maintain low and high pointers.  At each step compute
 *       mid = Math.floor((low + high) / 2) and compare nums[mid]
 *       with target.
 *
 * @param {number[]} nums
 * @param {number}   target
 * @returns {number}  index, or -1 if not found
 */
function binarySearch1(nums, target) {
  // TODO: implement iterative binary search
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
module.exports = { binarySearch };
