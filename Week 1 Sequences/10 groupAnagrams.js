/////////////////////////
// https://leetcode.com/problems/group-anagrams/
/////////////////////////

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function (strs) {
  let result = {};

  // loop through array of strings
  for (let string of strs) {
    // letters are the strings broken down, sorted and rejoined
    let letters = string.split("").sort().join("");
    // console.log("letters: ", letters);
    // if result object has the sorted letters as a key
    result[letters]
      ? // push the string value (pre sort)
        result[letters].push(string)
      : // otherwise it equals the string
        (result[letters] = [string]);
  }
  // return all the values of the object
  return Object.values(result);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
