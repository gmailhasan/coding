/**
 * Linked List Partition around Pivot K
 * ======================================
 * Problem:
 *   Given the head of a singly linked list and a pivot value k, rearrange
 *   the nodes so that:
 *     • all nodes with val <  k appear BEFORE
 *     • all nodes with val >= k appear AFTER
 *   The relative order within each partition must be preserved.
 *
 * Examples:
 *   Input:  3 → 5 → 8 → 5 → 10 → 2 → 1,  k = 5
 *   Output: 3 → 2 → 1 → 5 → 8 → 5 → 10
 *
 *   Input:  1 → 4 → 3 → 2 → 5 → 2,  k = 3
 *   Output: 1 → 2 → 2 → 4 → 3 → 5
 *
 * Constraints:
 *   • 0 ≤ number of nodes ≤ 10^4
 *   • Relative order within each half must be preserved
 *   • O(1) extra space — do NOT collect nodes into an array
 *
 * Hint: Create two dummy-headed sub-lists ("before" and "after").
 *       Walk the original list once, appending each node to the
 *       appropriate sub-list.  Connect beforeTail.next = afterHead at the end.
 *       Remember to set afterTail.next = null to avoid a cycle.
 *
 * Time:  O(n)
 * Space: O(1)
 *
 * @param {ListNode|null} head
 * @param {number}        k
 * @returns {ListNode|null}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function partition(head, k) {
  let before = new ListNode();
  let after = new ListNode();
  let beforeHead = before;
  let afterHead = after;
  let curr = head;

  while (curr) {
    if (curr.val < k) {
      beforeHead.next = curr;
      beforeHead = beforeHead.next;
    } else {
      afterHead.next = curr;
      afterHead = afterHead.next;
    }
    curr = curr.next;
  }

  afterHead.next = null;
  beforeHead.next = after.next;
  return before.next;
}

module.exports = { ListNode, partition };
