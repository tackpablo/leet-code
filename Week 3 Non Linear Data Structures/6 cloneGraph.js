/////////////////////////
// https://leetcode.com/problems/clone-graph/
/////////////////////////

// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

// uses Hashmap and Depth First Search (DFS)

// Questions
// How is our input graph represented?

// Insights
// We essentially want to just recreate our graph, and are allowed to use an auxiliary data structure to do so.
// We can construct an adjacency-list like structure, clone out and set references to neighbors, and return our new copied root node.

// Approach
// Create a hashmap to store copied nodes, references.
// Write recursive logic to help us clone each node (and its neighbors).
// If our hashmap doesn't already have a key with our node.val:
// Create a new key/value pair in our hashmap, set the value to a new node (new Node(node.val)).
// Recursively clone this entry's neighbors (based on current node.neighbors) and add to hashmap.
// Return the copied/new reference to our original node (map.get(node.val)).
// Return the hashmap entry of our copied input node.

var cloneGraph = function (node, copyNode = new Map()) {
  // Handle null case
  if (!node) return null;

  // If our graph hasn't already copied the input node
  if (!copyNode.has(node.val)) {
    // Create new copy node (+ reference in map)
    copyNode.set(node.val, new Node(node.val));
    // Recursively clone neighbors
    copyNode.get(node.val).neighbors = node.neighbors.map((neighbor) =>
      cloneGraph(neighbor, copyNode)
    );
  }

  // Return copied/new node (* not * the original node passed in)
  return copyNode.get(node.val);
};

console.log(
  cloneGraph([
    [2, 4],
    [1, 3],
    [2, 4],
    [1, 3],
  ])
); // There are 4 nodes in the graph.
// 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
// 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
// 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3). => [[2,4],[1,3],[2,4],[1,3]]
console.log(cloneGraph([[]])); // Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors => [[]]
console.log(cloneGraph([])); // This an empty graph, it does not have any nodes. => []
