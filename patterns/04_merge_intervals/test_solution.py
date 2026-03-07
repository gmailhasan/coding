import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import merge


def test_basic_overlap():
    assert merge([[1, 3], [2, 6], [8, 10], [15, 18]]) == [[1, 6], [8, 10], [15, 18]]


def test_touching_intervals():
    # [1,4] and [4,5] share endpoint — should merge
    assert merge([[1, 4], [4, 5]]) == [[1, 5]]


def test_one_contained_in_another():
    # [2,3] is fully inside [1,4]
    assert merge([[1, 4], [2, 3]]) == [[1, 4]]


def test_no_overlap():
    assert merge([[1, 2], [3, 4], [5, 6]]) == [[1, 2], [3, 4], [5, 6]]


def test_single_interval():
    assert merge([[5, 10]]) == [[5, 10]]


def test_all_merge_into_one():
    assert merge([[1, 4], [2, 5], [3, 6]]) == [[1, 6]]


def test_unsorted_input():
    # Input is not pre-sorted; the function must sort it
    result = merge([[8, 10], [1, 3], [2, 6], [15, 18]])
    assert result == [[1, 6], [8, 10], [15, 18]]


def test_identical_intervals():
    assert merge([[1, 3], [1, 3], [1, 3]]) == [[1, 3]]
