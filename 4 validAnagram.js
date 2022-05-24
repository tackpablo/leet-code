/////////////////////////
// https://leetcode.com/problems/valid-anagram/
/////////////////////////

// function to check if t is an anagram of s, return true otherwise return false

var isAnagram = function (s, t) {
  const sortedS = s.split("").sort().join(""); // split the words into an array for each letter, sort and rejoin
  // console.log(sortedS);
  const sortedT = t.split("").sort().join(""); // split the words into an array for each letter, sort and rejoin
  // console.log(sortedT);

  if (sortedS === sortedT) {
    // if both of these sorted arrays equal
    return true; // return true
  } else {
    return false;
  }
};

console.log(isAnagram(anagram, nagaram)); // true
console.log(isAnagram(rat, car)); // false
