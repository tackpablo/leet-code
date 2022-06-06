/////////////////////////
// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
/////////////////////////

// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// A preorder traversal is [node, left, right] while an inorder traversal is [left, node, right].

// We know that the root node for a tree is the first element of the preorder array (P). We also know that every element to the left of the root element in the inorder array (I) is on the left subtree, and everything to the right of the root element in I is on the right subtree.

// Since we know the length of the left and right subtrees by finding the root in I, and since we know the order of the left and right subtrees in P, we can use that to determine the location of the root node in P for each of the two subtrees.

// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/discuss/1258712/JS-Python-Java-C%2B%2B-or-Easy-Recursive-Solution-w-Explanation   ====> check here for diagram and explanations

var buildTree = function (preorder, inorder) {
  // when the inorder runs out of values, return null
  if (inorder.length < 1) return null;

  // find the root of the tree as the first value of the preorder is the root
  const rootVal = preorder.shift();
  // find the index of the root in the inorder tree
  const rootIndex = inorder.indexOf(rootVal);
  // create a treenode
  const rootNode = new TreeNode(rootVal);

  // values on the left of the root in inorder tree is the left side of the binary tree
  const left = inorder.slice(0, rootIndex);
  // values on the right of the root in inorder tree is the right side of the binary tree
  const right = inorder.slice(rootIndex + 1);

  // recursively build add to the created treenode
  rootNode.left = buildTree(preorder, left);
  rootNode.right = buildTree(preorder, right);

  return rootNode;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])); // [3,9,20,null,null,15,7]
console.log(buildTree([-1], [-1])); // [-1]
