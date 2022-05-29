/////////////////////////
// https://leetcode.com/problems/reverse-linked-list/
/////////////////////////

// Given the head of a singly linked list, reverse the list, and return the reversed list.

var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current) {
    // destructures the current position of the array as it loops and switches the order around
    [current.next, prev, current] = [prev, current, current.next];
  }
  return prev;
};

console.log(reverseList([1, 2, 3, 4, 5])); // [5,4,3,2,1]
console.log(reverseList([1, 2])); // [2,1]
console.log(reverseList([])); // []
