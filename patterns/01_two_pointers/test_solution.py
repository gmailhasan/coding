import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import pair_with_target_sum


def test_pair_in_middle():
    # 2 + 4 = 6  →  indices 2 and 4 (1-based)
    assert pair_with_target_sum([1, 2, 3, 4, 6], 6) == [2, 4]


def test_pair_skipping_middle():
    # 2 + 9 = 11  →  indices 1 and 3
    assert pair_with_target_sum([2, 5, 9, 11], 11) == [1, 3]


def test_pair_first_and_last():
    # 1 + 9 = 10  →  indices 1 and 4
    assert pair_with_target_sum([1, 2, 3, 9], 10) == [1, 4]


def test_pair_at_end():
    # 5 + 7 = 12  →  indices 3 and 4
    assert pair_with_target_sum([1, 3, 5, 7], 12) == [3, 4]


def test_two_element_array():
    # Only two elements — must be the answer
    assert pair_with_target_sum([3, 7], 10) == [1, 2]


def test_negative_numbers():
    # -5 + 3 = -2  →  indices 1 and 4
    assert pair_with_target_sum([-5, -1, 0, 3, 7], -2) == [1, 4]


def test_pair_adjacent():
    # 4 + 5 = 9  →  indices 3 and 4
    assert pair_with_target_sum([1, 2, 4, 5, 8], 9) == [3, 4]
