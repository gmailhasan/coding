import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import max_sum_subarray


def test_basic_window_of_3():
    # Windows: [2,1,5]=8, [1,5,1]=7, [5,1,3]=9, [1,3,2]=6  →  max = 9
    assert max_sum_subarray([2, 1, 5, 1, 3, 2], 3) == 9


def test_window_of_2():
    # Windows: [2,3]=5, [3,4]=7, [4,1]=5, [1,5]=6  →  max = 7
    assert max_sum_subarray([2, 3, 4, 1, 5], 2) == 7


def test_k_equals_length():
    # Single window covers the whole array
    assert max_sum_subarray([1, 2, 3], 3) == 6


def test_k_equals_1():
    # Window of 1 — just the maximum element
    assert max_sum_subarray([1, 5, 2, 3], 1) == 5


def test_all_same_elements():
    assert max_sum_subarray([3, 3, 3, 3, 3], 2) == 6


def test_negative_numbers():
    # All negative; pick the "least negative" window
    assert max_sum_subarray([-1, -2, -3, -4], 2) == -3   # [-1, -2]


def test_mixed_positive_negative():
    # Windows of 3: [3,-1,4]=6, [-1,4,2]=5, [4,2,1]=7, [2,1,-2]=1  → 7
    assert max_sum_subarray([3, -1, 4, 2, 1, -2], 3) == 7


def test_single_element():
    assert max_sum_subarray([42], 1) == 42
