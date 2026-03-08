"""
Linked List Partition around Pivot K
======================================
Problem:
  Given the head of a singly linked list and a pivot value k, rearrange
  the nodes so that:
    • all nodes with val < k  appear BEFORE
    • all nodes with val >= k appear AFTER
  The relative order within each partition must be preserved.

Examples:
  Input:  3 → 5 → 8 → 5 → 10 → 2 → 1,  k = 5
  Output: 3 → 2 → 1 → 5 → 8 → 5 → 10

  Input:  1 → 4 → 3 → 2 → 5 → 2,  k = 3
  Output: 1 → 2 → 2 → 4 → 3 → 5

Constraints:
  • 0 ≤ number of nodes ≤ 10^4
  • -10^4 ≤ node.val, k ≤ 10^4
  • Relative order within each half must be preserved
  • O(1) extra space — do NOT collect nodes into a list

Hint: Create two dummy-headed sub-lists ("before" and "after").
      Walk the original list once, appending each node to the
      appropriate sub-list.  Connect before.tail → after.head at the end.

Time:  O(n)
Space: O(1)
"""


class ListNode:
    def __init__(self, val: int = 0, next: "ListNode | None" = None):
        self.val  = val
        self.next = next


def partition(head: ListNode | None, k: int) -> ListNode | None:
    # TODO: implement using two dummy-headed sub-lists
    raise NotImplementedError
