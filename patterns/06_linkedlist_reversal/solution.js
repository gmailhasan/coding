/**
 * Pattern 06 — In-place LinkedList Reversal
 * ==========================================
 * Problem: Reverse a Linked List
 *
 * Given the head of a singly linked list, reverse the list in-place and
 * return the new head.
 *
 * Example:
 *   Input:   1 → 2 → 3 → 4 → 5 → null
 *   Output:  5 → 4 → 3 → 2 → 1 → null
 *
 * Constraints:
 *   • 0 ≤ number of nodes ≤ 5000
 *   • Must be done in O(1) extra space (no new list, no array)
 *
 * Hint: Keep three pointers — prev, curr, next.
 *       At each step: save next, flip curr.next to prev, advance both.
 *
 * @param {ListNode|null} head
 * @returns {ListNode|null}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList1(head) {
  // TODO: implement in-place reversal
  let prev = null;
  let curr = head;
  let next = head;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function reverseList(head) {
  let prev = null;
  let curr = head;
  let next = head;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

module.exports = { ListNode, reverseList };
