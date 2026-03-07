/**
 * Pattern 09 — Two Heaps
 * ========================
 * Problem: Find Median from a Data Stream
 *
 * Design a class MedianFinder that supports:
 *   addNum(num)    — add an integer to the data structure
 *   findMedian()   — return the median of all numbers added so far
 *
 * The median is the middle value when sorted.  For an even count,
 * return the average of the two middle values.
 *
 * Examples:
 *   const mf = new MedianFinder();
 *   mf.addNum(1); mf.addNum(2);
 *   mf.findMedian()  →  1.5
 *   mf.addNum(3);
 *   mf.findMedian()  →  2
 *
 * Constraints:
 *   • -10^5 ≤ num ≤ 10^5
 *   • findMedian is called at least once after at least one addNum
 *
 * Hint: Keep two heaps:
 *   • maxHeap (lower half) — use negated values with MinHeap
 *   • minHeap (upper half)
 *   After each insert, rebalance so sizes differ by at most 1.
 *
 * A MinHeap helper class is provided below — you may use it as-is.
 */

// ── Provided helper: MinHeap ──────────────────────────────────────────────────
class MinHeap {
  constructor() { this._d = []; }
  push(v) { this._d.push(v); this._up(this._d.length - 1); }
  pop()  {
    if (this._d.length === 1) return this._d.pop();
    const top = this._d[0];
    this._d[0] = this._d.pop();
    this._down(0);
    return top;
  }
  peek() { return this._d[0]; }
  size() { return this._d.length; }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this._d[p] > this._d[i]) { [this._d[p], this._d[i]] = [this._d[i], this._d[p]]; i = p; }
      else break;
    }
  }
  _down(i) {
    const n = this._d.length;
    while (true) {
      let s = i, l = 2*i+1, r = 2*i+2;
      if (l < n && this._d[l] < this._d[s]) s = l;
      if (r < n && this._d[r] < this._d[s]) s = r;
      if (s === i) break;
      [this._d[s], this._d[i]] = [this._d[i], this._d[s]]; i = s;
    }
  }
}
// To simulate a MaxHeap: negate values on push/pop.
// ─────────────────────────────────────────────────────────────────────────────

class MedianFinder {
  constructor() {
    // TODO: initialise your two heaps here
    throw new Error('Not implemented');
  }

  /** @param {number} num */
  addNum(num) {
    // TODO: add num and rebalance
    throw new Error('Not implemented');
  }

  /** @returns {number} */
  findMedian() {
    // TODO: return the current median
    throw new Error('Not implemented');
  }
}

module.exports = { MedianFinder, MinHeap };
