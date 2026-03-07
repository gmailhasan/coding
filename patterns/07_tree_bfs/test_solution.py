import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import TreeNode, level_order


# ── helpers ────────────────────────────────────────────────────────────────

def build_tree(values: list) -> TreeNode | None:
    """Build a binary tree from level-order values (None = absent node)."""
    if not values or values[0] is None:
        return None
    root  = TreeNode(values[0])
    queue = [root]
    i     = 1
    while queue and i < len(values):
        node = queue.pop(0)
        if i < len(values) and values[i] is not None:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        if i < len(values) and values[i] is not None:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1
    return root


# ── tests ──────────────────────────────────────────────────────────────────

def test_three_levels():
    root = build_tree([3, 9, 20, None, None, 15, 7])
    assert level_order(root) == [[3], [9, 20], [15, 7]]


def test_single_node():
    root = build_tree([1])
    assert level_order(root) == [[1]]


def test_empty_tree():
    assert level_order(None) == []


def test_left_skewed():
    #   1
    #  /
    # 2
    #  /
    # 3
    root = build_tree([1, 2, None, 3])
    assert level_order(root) == [[1], [2], [3]]


def test_right_skewed():
    root = build_tree([1, None, 2, None, None, None, 3])
    # build manually to be safe
    r = TreeNode(1)
    r.right = TreeNode(2)
    r.right.right = TreeNode(3)
    assert level_order(r) == [[1], [2], [3]]


def test_complete_binary_tree():
    root = build_tree([1, 2, 3, 4, 5, 6, 7])
    assert level_order(root) == [[1], [2, 3], [4, 5, 6, 7]]


def test_two_levels():
    root = build_tree([1, 2, 3])
    assert level_order(root) == [[1], [2, 3]]
