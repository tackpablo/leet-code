/////////////////////////
// https://leetcode.com/problems/implement-trie-prefix-tree/
/////////////////////////

// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

var Trie = function () {
  // acts as a constructor, for constructing its properties when used with "new Trie()"

  this.children = new Array(26);

  // override the values of children that default to undefined into null
  for (let i = 0; i < this.children.length; i++) {
    this.children[i] = null;
  }

  this.isWord = false;
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  // node refers to the current trie
  let node = this;

  // put every letter of the word into the Trie
  for (let i = 0; i < word.length; i++) {
    let letterCharCodeIdx = word[i].charCodeAt(0) - 97;
    if (node.children[letterCharCodeIdx] === null) {
      // if the letter doesn't exist in the Trie, then add a new Trie into it
      node.children[letterCharCodeIdx] = new Trie();
    }

    // go to the newly or just created node in the Trie
    node = node.children[letterCharCodeIdx];
  }

  // default set the specific node's isWord to true, Since if the for loop ends, it means the entire word is added into the Trie, so the last letter should be given the value true for the property isWord
  node.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  // node refers to the current trie
  let node = this;

  for (let i = 0; i < word.length; i++) {
    let letterCharCodeIdx = word[i].charCodeAt(0) - 97;

    // if the idx doesn't exist, it means the letter doesn't exist in the Trie therefore return false
    if (node.children[letterCharCodeIdx] === null) {
      return false;
    }
    // console.log(word[i])
    // console.log(node)

    // go deeper into the Trie
    node = node.children[letterCharCodeIdx];
  }

  // if it made it to the end, return the isWord boolean. If it is the end of a word that is inserted into the Trie, it would be true. If not then it would be false
  return node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  // node refers to the current trie
  let node = this;

  for (let i = 0; i < prefix.length; i++) {
    let letterCharCodeIdx = prefix[i].charCodeAt(0) - 97;

    // if the idx doesn't exist, it means the letter doesn't exist in the Trie therefore return false
    if (node.children[letterCharCodeIdx] === null) {
      return false;
    }

    // go deeper into the Trie
    node = node.children[letterCharCodeIdx];
  }

  // if it made it to the end, return true. Since if all the letters exist in the Trie of the prefix, then its true that theres a prefix in the Trie
  return true;
};
