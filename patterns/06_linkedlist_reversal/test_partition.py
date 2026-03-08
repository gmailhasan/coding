import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("partition", None)
sys.path.insert(0, _here)

import pytest
from partition import ListNode, partition


# ── helpers ────────────────────────────────────────────────────────────────

def make_list(values: list[int]) -> ListNode | None:
    if not values:
        return None
    head = ListNode(values[0])
    cur  = head
    for v in values[1:]:
        cur.next = ListNode(v)
        cur = cur.next
    return head


def to_array(head: ListNode | None) -> list[int]:
    result = []
    while head:
        result.append(head.val)
        head = head.next
    return result


# ── tests ──────────────────────────────────────────────────────────────────

def test_basic_partition():
    # 3→5→8→5→10→2→1, k=5  →  3→2→1→5→8→5→10
    head = make_list([3, 5, 8, 5, 10, 2, 1])
    assert to_array(partition(head, 5)) == [3, 2, 1, 5, 8, 5, 10]


def test_all_less_than_k():
    # All nodes are < k — list unchanged
    head = make_list([1, 2, 3])
    assert to_array(partition(head, 5)) == [1, 2, 3]


def test_all_greater_or_equal_to_k():
    # All nodes are >= k — list unchanged
    head = make_list([5, 6, 7])
    assert to_array(partition(head, 3)) == [5, 6, 7]


def test_empty_list():
    assert partition(None, 3) is None


def test_single_node_less():
    head = make_list([1])
    assert to_array(partition(head, 5)) == [1]


def test_single_node_equal():
    head = make_list([5])
    assert to_array(partition(head, 5)) == [5]


def test_relative_order_preserved():
    # 1→4→3→2→5→2, k=3  →  1→2→2→4→3→5
    head = make_list([1, 4, 3, 2, 5, 2])
    assert to_array(partition(head, 3)) == [1, 2, 2, 4, 3, 5]


def test_k_not_in_list():
    # pivot 4 is not present; 1,2,3 < 4 and 5,6 >= 4
    head = make_list([5, 1, 6, 2, 3])
    assert to_array(partition(head, 4)) == [1, 2, 3, 5, 6]


def test_duplicates_of_k():
    # Nodes equal to k must go to the "after" partition
    head = make_list([3, 3, 3])
    assert to_array(partition(head, 3)) == [3, 3, 3]


def test_already_partitioned():
    head = make_list([1, 2, 5, 6])
    assert to_array(partition(head, 5)) == [1, 2, 5, 6]
