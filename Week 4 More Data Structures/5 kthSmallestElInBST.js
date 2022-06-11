/////////////////////////
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
/////////////////////////

// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// uses Binary Search Tree (BST), recursion, stacks, Depth First Search (DFS)

var kthSmallest = function (root, k) {
  // stack where we push every node into, go through left nodes first that are the smallest (BST characteristic)
  let stack = [];

  function dfs(root) {
    // if no node or length of stack is less than the k value, returns null as there is nothing to check
    if (!root || stack.length > k) {
      return null;
    }

    // go through left node of root first
    dfs(root.left);

    // add nodes to stack
    stack.push(root.val);

    // go through right node of root after if none exist on the left node of root
    dfs(root.right);
  }

  // run DFS on root
  dfs(root);

  // return value at k
  return stack[k - 1];
};

console.log(kthSmallest([3, 1, 4, null, 2], 1)); // 1
console.log(kthSmallest([5, 3, 6, 2, 4, null, null, 1], 3)); // 3
