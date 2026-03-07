/**
 * Pattern 13 — Dynamic Programming
 * ===================================
 * Problem: 0/1 Knapsack
 *
 * You are given n items, each with a weight and a value, and a knapsack
 * with a maximum weight capacity W.  Find the maximum total value you can
 * fit in the knapsack.  Each item can be taken at most once (0/1).
 *
 * Parameters:
 *   weights  — array of item weights  (length n)
 *   values   — array of item values   (length n)
 *   capacity — maximum weight W the knapsack can hold
 *
 * Examples:
 *   knapsack([1,3,4,5], [1,4,5,7], 7)  →  9   // items idx 1+2: wt=7, val=9
 *   knapsack([2,3,4],   [3,4,5],   5)  →  7   // items idx 0+1: wt=5, val=7
 *   knapsack([1],       [10],      0)  →  0   // capacity 0
 *
 * Constraints:
 *   • 1 ≤ n ≤ 500
 *   • 1 ≤ weights[i] ≤ 1000
 *   • 0 ≤ values[i]  ≤ 1000
 *   • 0 ≤ capacity   ≤ 1000
 *
 * Hint: Build a 2-D DP table dp[i][w] = max value using the first i items
 *       with capacity w.  For item i:
 *         if weights[i-1] > w:  dp[i][w] = dp[i-1][w]
 *         else:                 dp[i][w] = max(dp[i-1][w],
 *                                              dp[i-1][w - weights[i-1]] + values[i-1])
 *
 * @param {number[]} weights
 * @param {number[]} values
 * @param {number}   capacity
 * @returns {number}
 */
function knapsack1(weights, values, capacity) {
  // TODO: implement 0/1 knapsack with DP
  let n = weights.length;
  let dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] > w) {
        dp[i][w] = dp[i - 1][w];
      } else {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1],
        );
      }
    }
  }

  return dp[n][capacity];
}

function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= capacity; c++) {
      // check weight of current item and capacity
      // if doesn't fit , take result from previous one
      // else Math.max(skip, take current + take remaining weight result)
      let currItemIndex = i - 1;
      if (weights[currItemIndex] > c) {
        dp[i][c] = dp[i - 1][c];
      } else {
        dp[i][c] = Math.max(
          dp[i - 1][c],
          dp[i - 1][c - weights[currItemIndex]] + values[currItemIndex],
        );
      }
    }
  }

  return dp[n][capacity];
}

module.exports = { knapsack };
