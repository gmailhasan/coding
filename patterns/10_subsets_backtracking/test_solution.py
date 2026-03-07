import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import subsets


def _normalise(result: list[list[int]]) -> list[tuple[int, ...]]:
    """Sort each subset, then sort the list of subsets for comparison."""
    return sorted(tuple(sorted(s)) for s in result)


def test_three_elements():
    result = subsets([1, 2, 3])
    expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
    assert _normalise(result) == _normalise(expected)


def test_single_element():
    result = subsets([0])
    assert _normalise(result) == _normalise([[], [0]])


def test_two_elements():
    result = subsets([1, 2])
    expected = [[], [1], [2], [1, 2]]
    assert _normalise(result) == _normalise(expected)


def test_count_is_power_of_two():
    for n in range(1, 5):
        nums   = list(range(n))
        result = subsets(nums)
        assert len(result) == 2 ** n, f"Expected 2^{n}={2**n} subsets, got {len(result)}"


def test_empty_subset_always_present():
    result = subsets([5, 10])
    assert [] in result or any(len(s) == 0 for s in result)


def test_no_duplicates():
    result = subsets([1, 2, 3])
    normalised = [tuple(sorted(s)) for s in result]
    assert len(normalised) == len(set(normalised)), "Duplicate subsets found"


def test_negatives():
    result = subsets([-1, 0])
    expected = [[], [-1], [0], [-1, 0]]
    assert _normalise(result) == _normalise(expected)
