import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import find_missing_number


def test_missing_middle():
    assert find_missing_number([3, 0, 1]) == 2


def test_missing_n():
    # n = 2, range [0,2], array has 0 and 1  →  missing is 2
    assert find_missing_number([0, 1]) == 2


def test_missing_zero():
    assert find_missing_number([1, 2, 3]) == 0


def test_missing_last_in_range():
    assert find_missing_number([0, 1, 2]) == 3


def test_single_element_zero():
    # [1] means n=1, range [0,1], 0 is missing
    assert find_missing_number([1]) == 0


def test_single_element_one():
    # [0] means n=1, range [0,1], 1 is missing
    assert find_missing_number([0]) == 1


def test_large_array():
    assert find_missing_number([9, 6, 4, 2, 3, 5, 7, 0, 1]) == 8


def test_sequential_missing_first():
    # n=4, range [0,4] — 0 is the missing element
    assert find_missing_number([1, 2, 3, 4]) == 0
