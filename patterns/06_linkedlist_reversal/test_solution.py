import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import ListNode, reverse_list


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

def test_basic_five_nodes():
    head = make_list([1, 2, 3, 4, 5])
    assert to_array(reverse_list(head)) == [5, 4, 3, 2, 1]


def test_two_nodes():
    head = make_list([1, 2])
    assert to_array(reverse_list(head)) == [2, 1]


def test_single_node():
    head = make_list([42])
    assert to_array(reverse_list(head)) == [42]


def test_empty_list():
    assert reverse_list(None) is None


def test_already_reversed():
    head = make_list([5, 4, 3, 2, 1])
    assert to_array(reverse_list(head)) == [1, 2, 3, 4, 5]


def test_new_head_is_old_tail():
    head = make_list([10, 20, 30])
    new_head = reverse_list(head)
    assert new_head.val == 30


def test_old_head_becomes_tail():
    head = make_list([10, 20, 30])
    new_head = reverse_list(head)
    # Walk to the tail
    cur = new_head
    while cur.next:
        cur = cur.next
    assert cur.val == 10
    assert cur.next is None
