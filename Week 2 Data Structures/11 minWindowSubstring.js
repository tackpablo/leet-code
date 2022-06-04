/////////////////////////
// https://leetcode.com/problems/minimum-window-substring/
/////////////////////////

// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

// create a hashmap that counts character frequency of t
// use two pointers to define your window size
// whenever you encounter a character in s that is in your hashmap, decrease the count. When the count is 0, it means that you used up the required amount of this character. Therefore you increase your "match" count.
// When match is equal to numbers of keys in your hashmap, it means that you have a solution. Notice that "uniqueChars" is the number of keys in the hashmap.
// when you have a solution, try to decrease your window size by increasing the left pointer until the window is no longer a solution.
// record the solution you had before

var minWindow = function (s, t) {
  // count t's frequency of its characters
  let map = {},
    uniqueChars = 0;
  for (let char of t) {
    if (char in map) {
      map[char] += 1;
    } else {
      map[char] = 1;
      uniqueChars += 1;
    }
  }

  let ans = "";
  let left = 0,
    match = 0;
  for (let right = 0; right < s.length; right++) {
    let rightChar = s[right];
    if (rightChar in map) {
      map[rightChar] -= 1;
      if (map[rightChar] === 0) match += 1;
    }

    if (match === uniqueChars) {
      // there is a solution
      // try to shrink the window from the left
      while (match === uniqueChars) {
        let leftChar = s[left++];
        if (map[leftChar] === 0) match -= 1;
        map[leftChar] += 1;
      }

      // record the solution, notice that you need to use left-1 instead of left when slicing
      let solution = s.slice(left - 1, right + 1);
      ans =
        ans === "" ? solution : ans.length > solution.length ? solution : ans;
    }
  }
  return ans;
};

console.log(minWindow("ADOBECODEBANC", "ABC")); // The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t. => "BANC"
console.log(minWindow("a", "a")); // The entire string s is the minimum window. => "a"
console.log(minWindow("a", "aa")); // Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string. => ""
