import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import find_k_largest


def test_k_equals_3():
    result = find_k_largest([3, 1, 5, 12, 2, 11], 3)
    assert sorted(result) == [5, 11, 12]


def test_k_equals_1():
    assert find_k_largest([1, 2, 3], 1) == [3]


def test_k_equals_length():
    result = find_k_largest([5, 3, 1], 3)
    assert sorted(result) == [1, 3, 5]


def test_all_same():
    result = find_k_largest([4, 4, 4, 4], 2)
    assert sorted(result) == [4, 4]


def test_negatives():
    result = find_k_largest([-5, -1, -3, -2], 2)
    assert sorted(result) == [-2, -1]


def test_mixed_sign():
    result = find_k_largest([-10, 5, 0, 3, -1], 3)
    assert sorted(result) == [0, 3, 5]


def test_result_length():
    result = find_k_largest([1, 2, 3, 4, 5], 3)
    assert len(result) == 3


def test_large_k():
    result = find_k_largest([7, 2, 9, 4, 1], 4)
    assert sorted(result) == [2, 4, 7, 9]
