/**
 * Pattern 05 — Cyclic Sort
 * ==========================
 * Problem: Find the Missing Number
 *
 * Given an array nums containing n distinct integers in the range [0, n],
 * find and return the one number in that range that is missing.
 *
 * Examples:
 *   findMissingNumber([3, 0, 1])            →  2
 *   findMissingNumber([0, 1])               →  2
 *   findMissingNumber([9,6,4,2,3,5,7,0,1]) →  8
 *
 * Constraints:
 *   • n === nums.length
 *   • 0 ≤ nums[i] ≤ n
 *   • All numbers in nums are unique
 *
 * Hint (cyclic sort approach):
 *   1. Place each number at its correct index: nums[i] = i.
 *      Numbers equal to n cannot be placed in [0, n-1], so skip them.
 *   2. Scan — the first index where nums[i] !== i is the missing number.
 *      If every index matches, the missing number is n.
 *
 * @param {number[]} nums
 * @returns {number}
 */
function findMissingNumber1(nums) {
  let i = 0;
  const n = nums.length;

  while (i < n) {
    const current = nums[i];
    if (current < n && nums[i] !== nums[current]) {
      [nums[i], nums[current]] = [nums[current], nums[i]];
    } else {
      i++;
    }
  }

  for (let j = 0; j < n; j++) {
    if (nums[j] !== j) {
      return j;
    }
  }

  return n;
}

function findMissingNumber(nums) {
  let i = 0;
  let len = nums.length;
  while (i < len) {
    let current = nums[i];
    if (current < len && nums[i] != nums[current]) {
      //swap current
      [nums[i], nums[current]] = [nums[current], nums[i]];
    } else {
      i++;
    }
  }

  for (i = 0; i < len; i++) {
    if (nums[i] !== i) return i;
  }

  return len;
}

module.exports = { findMissingNumber };
