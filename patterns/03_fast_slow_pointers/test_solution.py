import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import ListNode, has_cycle


# ── helpers ────────────────────────────────────────────────────────────────

def make_list(values: list[int]) -> ListNode | None:
    """Create a plain linked list (no cycle) from a list of values."""
    if not values:
        return None
    head = ListNode(values[0])
    cur  = head
    for v in values[1:]:
        cur.next = ListNode(v)
        cur = cur.next
    return head


def make_cycle_list(values: list[int], cycle_pos: int) -> ListNode | None:
    """
    Create a linked list where the tail's next points to the node at
    index `cycle_pos` (0-based).  Pass cycle_pos = -1 for no cycle.
    """
    if not values:
        return None
    nodes = [ListNode(v) for v in values]
    for i in range(len(nodes) - 1):
        nodes[i].next = nodes[i + 1]
    if cycle_pos >= 0:
        nodes[-1].next = nodes[cycle_pos]  # create the cycle
    return nodes[0]


# ── tests ──────────────────────────────────────────────────────────────────

def test_cycle_tail_to_second():
    # 1 → 2 → 3 → 4 → 2 (cycle at index 1)
    head = make_cycle_list([1, 2, 3, 4], cycle_pos=1)
    assert has_cycle(head) is True


def test_cycle_tail_to_head():
    # 1 → 2 → 3 → 1 (cycle at index 0)
    head = make_cycle_list([1, 2, 3], cycle_pos=0)
    assert has_cycle(head) is True


def test_no_cycle_basic():
    head = make_list([1, 2, 3, 4, 5])
    assert has_cycle(head) is False


def test_no_cycle_single_node():
    head = make_list([1])
    assert has_cycle(head) is False


def test_empty_list():
    assert has_cycle(None) is False


def test_self_loop():
    # Single node pointing to itself
    node = ListNode(1)
    node.next = node
    assert has_cycle(node) is True


def test_two_node_cycle():
    # 1 → 2 → 1
    head = make_cycle_list([1, 2], cycle_pos=0)
    assert has_cycle(head) is True


def test_two_node_no_cycle():
    head = make_list([1, 2])
    assert has_cycle(head) is False
