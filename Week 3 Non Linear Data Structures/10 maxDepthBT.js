/////////////////////////
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
/////////////////////////

// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// uses Depth First Search (DFS) and recursion

var maxDepth = function (root) {
  // if the root is null or undefined (no nodes) return 0
  if (root === undefined || root === null) {
    return 0;
  }
  // otherwise return the max of the max depth of the left or right of the root
  // add + 1 since the root itself does not count
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // 3
console.log(maxDepth([1, null, 2])); // 2
