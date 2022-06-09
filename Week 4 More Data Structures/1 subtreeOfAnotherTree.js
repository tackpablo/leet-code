/////////////////////////
// https://leetcode.com/problems/subtree-of-another-tree/
/////////////////////////

// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

// uses Depth First Search (DFS)

var isSubtree = function (root, subRoot) {
  // function to check if 2 nodes are equal
  const areEqual = (node1, node2) => {
    // if either node1 or node2 dont exist, return noes as they are equal
    if (!node1 || !node2) return !node1 && !node2;

    // if the value of node1 does not equal node2, return false
    if (node1.val !== node2.val) return false;

    // recursively check node1/node2 left and node1/node2 right values
    return (
      areEqual(node1.left, node2.left) && areEqual(node1.right, node2.right)
    );
  };

  // function that does the search
  const dfs = (node) => {
    // if no node, return false
    if (!node) return false;

    // if the function to see 2 nodes (node and subroot) are true, return true
    if (areEqual(node, subRoot)) return true;
    // recursively do search on the left and right
    return dfs(node.left) || dfs(node.right);
  };
  return dfs(root);
};

console.log(isSubtree([3, 4, 5, 1, 2], [4, 1, 2])); // true
console.log(isSubtree([3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2])); // false
