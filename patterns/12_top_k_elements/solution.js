/**
 * Pattern 12 — Top K Elements
 * =============================
 * Problem: K Largest Elements in an Array
 *
 * Given an integer array nums and an integer k, return the k largest
 * elements.  The result may be returned in any order.
 *
 * Examples:
 *   findKLargest([3,1,5,12,2,11], 3)  →  [5,11,12]  (any order)
 *   findKLargest([1,2,3], 1)          →  [3]
 *
 * Constraints:
 *   • 1 ≤ k ≤ nums.length ≤ 10^4
 *   • Do NOT simply sort the full array (defeats the purpose)
 *
 * Hint: Use a min-heap of size k.
 *   • Push the first k elements.
 *   • For each remaining element, if it is larger than heap.peek(),
 *     pop the minimum and push the new element.
 *   • The heap contains the k largest elements at the end.
 *
 * A MinHeap helper class is provided below.
 */

// ── Provided helper: MinHeap ──────────────────────────────────────────────────
class MinHeap {
  constructor() {
    this._d = [];
  }
  push(v) {
    this._d.push(v);
    this._up(this._d.length - 1);
  }
  pop() {
    if (this._d.length === 1) return this._d.pop();
    const top = this._d[0];
    this._d[0] = this._d.pop();
    this._down(0);
    return top;
  }
  peek() {
    return this._d[0];
  }
  size() {
    return this._d.length;
  }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this._d[p] > this._d[i]) {
        [this._d[p], this._d[i]] = [this._d[i], this._d[p]];
        i = p;
      } else break;
    }
  }
  _down(i) {
    const n = this._d.length;
    while (true) {
      let s = i,
        l = 2 * i + 1,
        r = 2 * i + 2;
      if (l < n && this._d[l] < this._d[s]) s = l;
      if (r < n && this._d[r] < this._d[s]) s = r;
      if (s === i) break;
      [this._d[s], this._d[i]] = [this._d[i], this._d[s]];
      i = s;
    }
  }
}
// ─────────────────────────────────────────────────────────────────────────────

/**
 * @param {number[]} nums
 * @param {number}   k
 * @returns {number[]}
 */
function findKLargest1(nums, k) {
  // TODO: implement using a min-heap of size k

  let minHeap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    if (minHeap.size() < k) minHeap.push(nums[i]);
    else if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  const result = [];
  while (minHeap.size() > 0) {
    result.push(minHeap.pop());
  }
  return result;
}

function findKLargest(nums, k) {
  let minHeap = new MinHeap();
  for (let i = 0; i < nums.length; i++) {
    if (minHeap.size() < k) {
      minHeap.push(nums[i]);
    } else if (minHeap.peek() < nums[i]) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  let result = [];
  while (minHeap.size() > 0) {
    result.push(minHeap.pop());
  }

  return result;
}

module.exports = { findKLargest, MinHeap };
