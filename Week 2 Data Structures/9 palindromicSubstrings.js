/////////////////////////
// https://leetcode.com/problems/palindromic-substrings/
/////////////////////////

// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// use 2 pointers

var countSubstrings = function (s) {
  // define count variable for substring count
  let count = 0;
  // as you move through the string
  for (let i = 0; i < s.length; i++) {
    // check for palindrome for
    expand(i, i); // odd length
    expand(i, i + 1); // even length
  }
  return count;

  // function that checks for palindromes
  function expand(l, r) {
    // when left is greater than 0, right is less than the string lengt and both string values at left and right are equal (palindromes)
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      // increase count
      count++;
      // decrease  left
      l--;
      // increase right
      r++;
    }
  }
};

console.log(countSubstrings("abc")); // Three palindromic strings: "a", "b", "c". => 3
console.log(countSubstrings("aaa")); // Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa". => 6
