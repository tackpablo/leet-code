/////////////////////////
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/////////////////////////

// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// uses Depth First Search (DFS) and recursion

var serialize = function (root) {
  const answer = [];

  // recursive function for each node
  function serialize(node) {
    // if the specific node does not exist (null), push null
    if (!node) return answer.push(null);
    // recursively check both left and right parts of the current node recursively
    serialize(node.right);
    serialize(node.left);
    // and push their values
    answer.push(node.val);
  }
  // run the recursive function on the root
  serialize(root);
  // return the array as a string
  return answer.join(",");
};

var deserialize = function (data) {
  // let the previous answer split and become an array
  data = data.split(",");

  // recursive function
  function build() {
    // curVal is equal to the last value in the data
    const curVal = data.pop();
    // if curVal is and empty string, return null
    if (curVal === "") return null;
    // create a new tree node where curVal is a number
    const node = new TreeNode(+curVal);
    // build the left and right part of the tree recursively
    node.left = build();
    node.right = build();
    return node;
  }
  return build();
};

console.log(deserialize(serialize([1, 2, 3, null, null, 4, 5]))); // [1,2,3,null,null,4,5]
console.log(deserialize(serialize([]))); // []
