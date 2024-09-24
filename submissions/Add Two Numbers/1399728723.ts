# Title: Add Two Numbers
# Submission ID: 1399728723
# Status: Accepted
# Date: September 23, 2024 at 09:14:45 PM GMT+5:30

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy: ListNode = new ListNode(0); // Create a dummy node to simplify the result list construction
    let current: ListNode = dummy;
    let carry: number = 0;

    // Loop through both lists until both are exhausted
    while (l1 !== null || l2 !== null || carry !== 0) {
        // Get the values of the current nodes, or 0 if the list is exhausted
        let val1: number = l1 !== null ? l1.val : 0;
        let val2: number = l2 !== null ? l2.val : 0;

        // Calculate the sum and carry
        let total: number = val1 + val2 + carry;
        carry = Math.floor(total / 10);  // Calculate the carry for the next iteration
        current.next = new ListNode(total % 10);  // Create a new node for the current digit

        // Move pointers forward
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummy.next;  // Return the next node after the dummy, which is the start of the result list
}
