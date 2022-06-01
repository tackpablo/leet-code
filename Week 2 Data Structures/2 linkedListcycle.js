/////////////////////////
// https://leetcode.com/problems/linked-list-cycle/
/////////////////////////

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Uses fast + slow pointer technique (also know as the tortoise and hare algorithm) - more info visit https://codeburst.io/fast-and-slow-pointer-floyds-cycle-detection-algorithm-9c7a8693f491

var hasCycle = function (head) {
  // // define fast as head
  let fast = head;
  // loop slow and fast pointer
  while (fast && fast.next) {
    // head = slow
    head = head.next;
    // fast = fast
    fast = fast.next.next;
    // if they ever meet, return true since they have to be cyclic to catch up at any point
    if (head === fast) return true;
  }

  // otherwise return false as they will never meet due to the linked list not being cyclic
  return false;
};

console.log(hasCycle([3, 2, 0, -4])); // pos= 1, true
console.log(hasCycle([1, 2])); // pos = 0, true
console.log(hasCycle([1])); // pos = -1, false
