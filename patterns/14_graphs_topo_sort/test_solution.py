import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import can_finish


def test_simple_chain_no_cycle():
    # 0 → 1  (take 0 first, then 1)
    assert can_finish(2, [[1, 0]]) is True


def test_simple_two_node_cycle():
    # 0 → 1 → 0
    assert can_finish(2, [[1, 0], [0, 1]]) is False


def test_no_prerequisites():
    # No edges — always possible
    assert can_finish(5, []) is True


def test_single_course():
    assert can_finish(1, []) is True


def test_diamond_no_cycle():
    # 0 → 1 → 3, 0 → 2 → 3  (diamond shape, acyclic)
    assert can_finish(4, [[1, 0], [2, 0], [3, 1], [3, 2]]) is True


def test_three_node_cycle():
    # 0 → 1 → 2 → 0
    assert can_finish(3, [[1, 0], [2, 1], [0, 2]]) is False


def test_disconnected_acyclic():
    # Two independent chains: 0→1 and 2→3
    assert can_finish(4, [[1, 0], [3, 2]]) is True


def test_self_loop():
    # Course 0 requires itself
    assert can_finish(2, [[0, 0]]) is False


def test_long_chain():
    # 0 → 1 → 2 → 3 → 4  (acyclic)
    prereqs = [[i + 1, i] for i in range(4)]
    assert can_finish(5, prereqs) is True


def test_long_chain_with_cycle():
    # 0 → 1 → 2 → 3 → 4 → 1  (cycle)
    prereqs = [[i + 1, i] for i in range(4)] + [[1, 4]]
    assert can_finish(5, prereqs) is False
