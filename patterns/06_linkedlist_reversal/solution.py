"""
Pattern 06 — In-place LinkedList Reversal
==========================================
Problem: Reverse a Linked List
--------------------------------
Given the head of a singly linked list, reverse the list in-place and
return the new head.

Example:
  Input:   1 → 2 → 3 → 4 → 5 → None
  Output:  5 → 4 → 3 → 2 → 1 → None

  reverse_list(head)  ->  <node with val 5>

Constraints:
  • 0 ≤ number of nodes ≤ 5000
  • -5000 ≤ node.val ≤ 5000
  • Must be done in O(1) extra space (no new list, no array)

Hint: Keep three pointers — prev, curr, and next_node.
      At each step: save next, flip curr.next to prev, advance both.
"""


class ListNode:
    def __init__(self, val: int = 0, next: "ListNode | None" = None):
        self.val  = val
        self.next = next

    def __repr__(self) -> str:
        return f"ListNode({self.val})"


def reverse_list(head: ListNode | None) -> ListNode | None:
    # TODO: implement in-place reversal
    raise NotImplementedError
