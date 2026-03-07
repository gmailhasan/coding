import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import knapsack


def test_basic_four_items():
    # items: wt=[1,3,4,5] val=[1,4,5,7], cap=7
    # Best: items 1+2 (0-idx), wt=3+4=7, val=4+5=9
    assert knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7) == 9


def test_three_items():
    # wt=[2,3,4] val=[3,4,5] cap=5
    # Best: items 0+1, wt=5, val=7
    assert knapsack([2, 3, 4], [3, 4, 5], 5) == 7


def test_zero_capacity():
    assert knapsack([1, 2, 3], [10, 20, 30], 0) == 0


def test_single_item_fits():
    assert knapsack([5], [10], 5) == 10


def test_single_item_does_not_fit():
    assert knapsack([6], [10], 5) == 0


def test_all_items_fit():
    assert knapsack([1, 2, 3], [1, 2, 3], 10) == 6


def test_must_choose_best_item():
    # wt=[3,3] val=[4,5] cap=3 — can only pick one; pick val=5
    assert knapsack([3, 3], [4, 5], 3) == 5


def test_large_capacity():
    # wt=[1,2,3] val=[6,10,12] cap=5
    # Best: items 1+2, wt=5, val=22
    assert knapsack([1, 2, 3], [6, 10, 12], 5) == 22
