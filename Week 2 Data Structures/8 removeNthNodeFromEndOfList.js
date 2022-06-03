/////////////////////////
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
/////////////////////////

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Uses fast + slow pointer technique (also know as the tortoise and hare algorithm) - the slow and fast pointer are apart by n + 1 nodes, meaning that when the slow pointer reaches the nth node from the end, we can make it skip, and thus both pointers will finish the iteration at the same time

var removeNthFromEnd = function (head, n) {
  // define the slow and fast pointer
  let slow = head,
    fast = head;

  // while the nth node from the end of the list is greater than 0
  while (n > 0) {
    // make the fast pointer move up one, this allows an exit condition where we stop one node earlier than required
    fast = fast.next;
    // reduce the nth node from the end by one
    n--;
  }
  // If p2 has reached the end, then, head node is to be deleted
  if (fast === null) {
    head = head.next;
    return head;
  }

  // while the fast pointer is not null
  while (fast.next !== null) {
    // both pointers move up by one
    slow = slow.next;
    fast = fast.next;
  }

  // when slow pointer reaches the nth node from the end, skip it
  slow.next = slow.next.next;

  return head;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)); // [1,2,3,5]
console.log(removeNthFromEnd([1], 1)); // []
console.log(removeNthFromEnd([1, 2], 1)); // [1]
