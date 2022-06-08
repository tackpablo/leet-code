/////////////////////////
// https://leetcode.com/problems/reverse-linked-list/
/////////////////////////

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

var maxPathSum = function (root) {
  // Initialize to a very small number to handle a path of negative values
  var max = -Infinity;
  // Call our recursive fn to start the program
  getMaxSum(root);

  // Once we have popped out of our recursive calls, `max` contains our maximum path sum
  return max;

  function getMaxSum(tree) {
    // Termination condition
    if (tree == null) {
      return 0;
    }

    // calculate the root to leaf sum where root is the left node
    const leftBranch = Math.max(0, getMaxSum(tree.left));
    // calculate the root to leaf sum where root is the right node
    const rightBranch = Math.max(0, getMaxSum(tree.right));
    // Sum the path: left -> root -> right (leaf to leaf)
    const currentPath = leftBranch + tree.val + rightBranch;

    // if the current path is greater than the previous value of `max`, update `max` to the current path sum
    max = Math.max(max, currentPath);
    return tree.val + Math.max(leftBranch, rightBranch);
  }
};

console.log(maxPathSum([1, 2, 3])); // The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6. => 6
console.log(maxPathSum([-10, 9, 20, null, null, 15, 7])); // The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42. => 42
