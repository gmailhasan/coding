/**
 * Pattern 02 — Sliding Window
 * =============================
 * Problem: Maximum Sum Subarray of Size K
 *
 * Given an array of integers and a positive integer k, find the maximum
 * sum of any contiguous subarray of size exactly k.
 *
 * Examples:
 *   maxSumSubarray([2, 1, 5, 1, 3, 2], 3)  →  9   // [5, 1, 3]
 *   maxSumSubarray([2, 3, 4, 1, 5],     2)  →  7   // [3, 4]
 *
 * Constraints:
 *   • 1 ≤ k ≤ arr.length ≤ 10^5
 *   • -10^4 ≤ arr[i] ≤ 10^4
 *
 * Hint: Compute the first window's sum, then slide by subtracting
 *       the element leaving the left and adding the element entering
 *       the right.
 *
 * @param {number[]} arr
 * @param {number}   k
 * @returns {number}
 */
function maxSumSubarray1(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
}

function maxSumSubarray(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(windowSum, maxSum);
  }

  return maxSum;
}

module.exports = { maxSumSubarray };
