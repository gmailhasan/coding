import sys, os
_here = os.path.dirname(os.path.abspath(__file__))
sys.modules.pop("solution", None)
sys.path.insert(0, _here)

import pytest
from solution import TreeNode, has_path_sum


# ── helpers ────────────────────────────────────────────────────────────────

def build_tree(values: list) -> TreeNode | None:
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

def test_path_exists_left():
    #       5
    #      / \
    #     4   8
    #    /   / \
    #   11  13   4
    #  /  \       \
    # 7    2        1
    root = build_tree([5, 4, 8, 11, None, 13, 4, 7, 2, None, None, None, None, None, 1])
    assert has_path_sum(root, 22) is True   # 5→4→11→2


def test_path_exists_right():
    root = build_tree([5, 4, 8, 11, None, 13, 4, 7, 2, None, None, None, None, None, 1])
    assert has_path_sum(root, 26) is True   # 5→8→13


def test_path_not_found():
    root = build_tree([5, 4, 8, 11, None, 13, 4, 7, 2, None, None, None, None, None, 1])
    assert has_path_sum(root, 18) is False


def test_empty_tree():
    assert has_path_sum(None, 0) is False


def test_single_node_match():
    root = TreeNode(5)
    assert has_path_sum(root, 5) is True


def test_single_node_no_match():
    root = TreeNode(5)
    assert has_path_sum(root, 3) is False


def test_negative_values():
    #   -2
    #     \
    #     -3
    root = TreeNode(-2)
    root.right = TreeNode(-3)
    assert has_path_sum(root, -5) is True


def test_only_leaf_paths_count():
    # Target 1 — the path 1→2 sums to 3, not 1; node 1 alone is not a leaf
    root = TreeNode(1)
    root.left = TreeNode(2)
    assert has_path_sum(root, 1) is False
