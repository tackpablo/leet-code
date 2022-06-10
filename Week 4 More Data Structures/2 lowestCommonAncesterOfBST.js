/////////////////////////
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
/////////////////////////

// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

var lowestCommonAncestor = function (root, p, q) {
  // if the root value is less than p value and q value
  if (root.val < p.val && root.val < q.val) {
    // recursively check the right root as the node can be a descendant itself
    return lowestCommonAncestor(root.right, p, q);
  }
  // if the root value is less than p value and q value
  if (root.val > p.val && root.val > q.val) {
    // recursively check the left root as the node can be a descendant itself
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};

console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8)
); // The LCA of nodes 2 and 8 is 6. => 6
console.log(
  lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4)
); // The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition. => 2
console.log(lowestCommonAncestor([2, 1], 2, 1)); // 2
