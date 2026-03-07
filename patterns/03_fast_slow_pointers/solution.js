/**
 * Pattern 03 — Fast & Slow Pointers (Floyd's Cycle Detection)
 * =============================================================
 * Problem: Linked List Cycle Detection
 *
 * Given the head of a singly linked list, return true if the list
 * contains a cycle, or false otherwise.
 *
 * A cycle exists when some node's next pointer points back to a
 * previously visited node.
 *
 * Example (cycle):    1 → 2 → 3 → 4 → 2  (node 4 points back to node 2)
 *   hasCycle(head)  →  true
 *
 * Example (no cycle): 1 → 2 → 3 → 4 → null
 *   hasCycle(head)  →  false
 *
 * Constraints:
 *   • 0 ≤ number of nodes ≤ 10^4
 *   • Do NOT use extra memory (no visited Set / Map)
 *
 * Hint: Move slow by 1 step and fast by 2 steps.
 *       If they ever meet, there is a cycle.
 *
 * @param {ListNode|null} head
 * @returns {boolean}
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle1(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }
  return false;
}

function hasCycle(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) return true;
  }
  return false;
}

module.exports = { ListNode, hasCycle };
