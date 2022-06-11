/////////////////////////
// https://leetcode.com/problems/merge-k-sorted-lists/
/////////////////////////

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.

var mergeKLists = function (lists) {
  // Create and empty array to save the values from the linked lists
  let listOfValues = [];
  // iterate trough the array of linked lists
  lists.forEach((linkedList) => {
    // for each linked list continue iterating until the current linked list node == null
    while (linkedList) {
      // push the current value of the node to the listOfValues array
      listOfValues.push(linkedList.val);
      // move to the next node if this node becomes null we are at the end of the list
      linkedList = linkedList.next;
    }
  });
  // sort the list in asending order
  listOfValues.sort((a, b) => {
    return a - b;
  });
  // create a holder for the head node
  let headNode = new ListNode();
  // create a node to iterate through the linked list.
  let listIteratorNode = headNode;
  // take each value of the array an perfrom the following
  listOfValues.map((x) => {
    // create a new node with the value of the node being the value from the array
    // and place it as the next of the current node
    listIteratorNode.next = new ListNode(x, null);
    // move the iterator to the newly created node
    listIteratorNode = listIteratorNode.next;
  });
  // We are returning the head node which is the .next of the head holder
  return headNode.next;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
); // The linked-lists are:
//   [
//     1->4->5,
//     1->3->4,
//     2->6
//   ]
//   merging them into one sorted list:
//   1->1->2->3->4->4->5->6  =>  [1,1,2,3,4,4,5,6]
console.log(mergeKLists([])); // []
console.log(mergeKLists([[]])); // []
