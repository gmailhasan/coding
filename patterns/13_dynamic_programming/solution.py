"""
Pattern 13 — Dynamic Programming
===================================
Problem: 0/1 Knapsack
-----------------------
You are given n items, each with a weight and a value, and a knapsack
with a maximum weight capacity W.  Find the maximum total value you can
fit in the knapsack.  Each item can be taken at most once (0/1).

Parameters:
  weights  — list of item weights  (len == n)
  values   — list of item values   (len == n)
  capacity — maximum weight the knapsack can hold (W)

Returns: the maximum value achievable without exceeding the capacity.

Examples:
  knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7)  ->  9   # items 2+3 (0-idx 1,2): wt=7, val=9
  knapsack([2, 3, 4],    [3, 4, 5],    5)  ->  7   # items 0+1: wt=5, val=7
  knapsack([1],          [10],         0)  ->  0   # capacity 0

Constraints:
  • 1 ≤ n ≤ 500
  • 1 ≤ weights[i] ≤ 1000
  • 0 ≤ values[i]  ≤ 1000
  • 0 ≤ capacity   ≤ 1000

Hint: Build a 2D DP table dp[i][w] = max value using the first i items
      with capacity w.  For item i:
        • If weights[i-1] > w: dp[i][w] = dp[i-1][w]
        • Else: dp[i][w] = max(dp[i-1][w],  dp[i-1][w - weights[i-1]] + values[i-1])
"""


def knapsack(weights: list[int], values: list[int], capacity: int) -> int:
    # TODO: implement 0/1 knapsack with DP
    raise NotImplementedError
