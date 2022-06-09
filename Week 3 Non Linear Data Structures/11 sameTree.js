/////////////////////////
// https://leetcode.com/problems/same-tree/
/////////////////////////

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// uses recursion and binary tree structure

var isSameTree = function (p, q) {
  // if both are null (have no nodes), no need to check their values
  if (!p && !q) return true;
  // if p or q or their values are not equal, return false
  if (!p || !q || p.val !== q.val) return false;

  // recursively check both left and right nodes of both trees
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree([1, 2, 3], [1, 2, 3])); // true
console.log(isSameTree([1, 2], [1, null, 2])); // false
console.log(isSameTree([1, 2, 1], [112])); // false
