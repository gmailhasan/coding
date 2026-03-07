/**
 * Pattern 01 — Two Pointers
 * ==========================
 * Problem: Pair with Target Sum
 *
 * Given a SORTED array of integers and a target integer, return the
 * 1-based indices [left, right] of the two numbers that add up to the
 * target.  Exactly one valid pair is guaranteed to exist.
 *
 * Examples:
 *   pairWithTargetSum([1, 2, 3, 4, 6], 6)  →  [2, 4]   // 2 + 4 = 6
 *   pairWithTargetSum([2, 5, 9, 11],   11) →  [1, 3]   // 2 + 9 = 11
 *
 * Constraints:
 *   • 2 ≤ arr.length ≤ 10^5
 *   • arr is sorted in non-decreasing order
 *   • Exactly one valid pair exists — do NOT use the same element twice
 *
 * Hint: Start one pointer at each end and move them inward.
 *
 * @param {number[]} arr
 * @param {number}   target
 * @returns {number[]}  1-based indices [left, right]
 */
function pairWithTargetSum1(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}

function pairWithTargetSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == target) return [left + 1, right + 1];
    else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}

module.exports = { pairWithTargetSum, pairWithTargetSum1 };
