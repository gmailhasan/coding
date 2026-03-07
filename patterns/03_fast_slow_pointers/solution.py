"""
Pattern 03 — Fast & Slow Pointers (Floyd's Cycle Detection)
=============================================================
Problem: Linked List Cycle Detection
--------------------------------------
Given the head of a singly linked list, return True if the list
contains a cycle, or False otherwise.

A cycle exists when some node's `next` pointer points back to a
previously visited node.

Example (cycle):
  1 → 2 → 3 → 4 → 2  (node 4 points back to node 2)
  has_cycle(head)  ->  True

Example (no cycle):
  1 → 2 → 3 → 4 → None
  has_cycle(head)  ->  False

Constraints:
  • 0 ≤ number of nodes ≤ 10^4
  • Do NOT use extra memory (no visited set / dict)

Hint: Move slow by 1 step and fast by 2 steps each iteration.
      If they ever meet, there is a cycle.
"""


class ListNode:
    def __init__(self, val: int = 0, next: "ListNode | None" = None):
        self.val  = val
        self.next = next

    def __repr__(self) -> str:
        return f"ListNode({self.val})"


def has_cycle(head: ListNode | None) -> bool:
    # TODO: implement using fast & slow pointers
    raise NotImplementedError
