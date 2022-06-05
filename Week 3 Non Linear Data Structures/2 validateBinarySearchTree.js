/////////////////////////
// https://leetcode.com/problems/validate-binary-search-tree/
/////////////////////////

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// https://leetcode.com/problems/validate-binary-search-tree/discuss/783930/Easy-to-understand-2-lines-solution!-O(n)-with-Examples-and-Explanation-JavaScript   ====> check here for diagram and explanations

var isValidBST = function (root, min = null, max = null) {
  // if root is null, it is a valid BST
  if (!root) return true;
  // checkk if key is outside the permitted range
  if (root.val <= min || root.val >= max) return false;

  // recursively check both left and right side of root
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

console.log(isValidBST([2, 1, 3])); // true
console.log(isValidBST([5, 1, 4, null, null, 3, 6])); // false
