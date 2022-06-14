/////////////////////////
// https://leetcode.com/problems/word-search-ii/
/////////////////////////

// Given an m x n board of characters and a list of strings words, return all words on the board.

// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// uses trie (digital tree or prefix tree)

var findWords = function (board, words) {
  const trie = {},
    res = [];

  //Lines below just populate our trie.
  for (let word of words) {
    let curNode = trie;
    for (let char of word) curNode = curNode[char] = curNode[char] || {};
    curNode.end = word;
  }

  //Here we loop through entire board, if char at those coords is in
  //our trie on the root level, we call our traverse function.
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (trie[board[row][col]]) traverse(row, col);
    }
  }

  return res;

  //Function takes row, col and node.  First time called, node is root
  //level of our trie, as the function runs node stays in sync with where
  //our recursive calls are at.
  function traverse(row, col, node = trie) {
    //Further down in this function we set board[row][col] to 0 before trying
    //neighboring coordinates.  The line below keeps us from visiting the same
    //cell more than once.
    if (!board[row][col]) return;

    //Here we capture the char on the board at coords, and we also move down
    //within the trie to the level that matches that char.
    const char = board[row][col],
      curNode = node[char];

    //If there is no curNode (I.e.- Current letter not within our trie node),
    //we return, because our sequence of correct letters has been broken.
    if (!curNode) return;

    //If current node has the end property, we push the word that's the value
    //for curNode.end (We set this above in the trie).  We then set end to
    //null to keep from pushing the same word more than once.
    if (curNode.end) {
      res.push(curNode.end);
      curNode.end = null;
    }

    //Here we set board[row][col] to 0 in order to keep track of where we
    //have already visited.  Then we try all options and set it back afterward.
    board[row][col] = 0;
    col - 1 >= 0 && traverse(row, col - 1, curNode);
    col + 1 < board[row].length && traverse(row, col + 1, curNode);
    row - 1 >= 0 && traverse(row - 1, col, curNode);
    row + 1 < board.length && traverse(row + 1, col, curNode);
    board[row][col] = char;
  }
};

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
  )
); // ["eat","oath"]
console.log(
  findWords(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ["abcb"]
  )
); // []
