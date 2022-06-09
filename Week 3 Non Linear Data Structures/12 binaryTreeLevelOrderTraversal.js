/////////////////////////
// https://leetcode.com/problems/binary-tree-level-order-traversal/
/////////////////////////

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// uses recursion and Depth First Search (DFS)

var levelOrder = function (root) {
  let res = [];

  // function checks the current node's value and also recursively checks the left and right nodes
  function dfs(node, depth) {
    // if no node, return
    if (!node) return;

    // if there is no node (result array at that level does not exist), return empty array
    if (!res[depth]) {
      res[depth] = [];
    }
    // otherwise push the value of the node
    res[depth].push(node.val);

    // recursively run the function on the left and right nodes
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  }

  // run function at root, level 0
  dfs(root, 0);

  return res;
};

console.log(levelOrder([3, 9, 20, null, null, 15, 7])); // [[3],[9,20],[15,7]]
console.log(levelOrder([1])); // [[1]]
console.log(levelOrder([])); // []
