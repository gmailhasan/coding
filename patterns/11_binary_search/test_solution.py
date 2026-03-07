import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import binary_search


def test_target_in_middle():
    assert binary_search([-1, 0, 3, 5, 9, 12], 9) == 4


def test_target_not_found():
    assert binary_search([-1, 0, 3, 5, 9, 12], 2) == -1


def test_target_at_start():
    assert binary_search([1, 3, 5, 7, 9], 1) == 0


def test_target_at_end():
    assert binary_search([1, 3, 5, 7, 9], 9) == 4


def test_single_element_found():
    assert binary_search([5], 5) == 0


def test_single_element_not_found():
    assert binary_search([5], 3) == -1


def test_two_elements_first():
    assert binary_search([1, 2], 1) == 0


def test_two_elements_second():
    assert binary_search([1, 2], 2) == 1


def test_negative_numbers():
    assert binary_search([-10, -5, 0, 3, 7], -5) == 1


def test_target_larger_than_all():
    assert binary_search([1, 2, 3], 100) == -1


def test_target_smaller_than_all():
    assert binary_search([1, 2, 3], -1) == -1
