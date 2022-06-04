/////////////////////////
// https://leetcode.com/problems/invert-binary-tree/
/////////////////////////

// Given the root of a binary tree, invert the tree, and return its root.

// can be solved using recursion, depth first search (DFS) or breadth first search (BFS)

// Recursion
// function invertTree(root) {
//   if (root == null) return root;
//   [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
//   return root;
// }

// // DFS
// function invertTree(root) {
//   const stack = [root];

//   while (stack.length) {
//     const n = stack.pop();
//     if (n != null) {
//       [n.left, n.right] = [n.right, n.left];
//       stack.push(n.left, n.right);
//     }
//   }

//   return root;
// }

// // BFS
// function invertTree(root) {
//   const queue = [root];

//   while (queue.length) {
//     const n = queue.shift();
//     if (n != null) {
//       [n.left, n.right] = [n.right, n.left];
//       queue.push(n.left, n.right);
//     }
//   }

//   return root;
// }

console.log(invertTree([4, 2, 7, 1, 3, 6, 9])); // [4,7,2,9,6,3,1]
console.log(invertTree([2, 1, 3])); // [2,3,1]
console.log(invertTree([])); // []
