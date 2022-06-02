/////////////////////////
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/////////////////////////

// Given a string s, find the length of the longest substring without repeating characters.

// Substring is a contiguous sequence of characters within a string. For instance, "the best of" is a substring of "It was the best of times". In contrast, "Itwastimes" is a subsequence of "It was the best of times", but not a substring.

var lengthOfLongestSubstring = function (s) {
  // keeps track of the most recent index of each letter.
  const seen = new Map();
  // keeps track of the starting index of the current substring.
  let start = 0;
  // keeps track of the maximum substring length.
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    // if the current char was seen, move the start to (1 + the last index of this char)
    // max prevents moving backward, 'start' can only move forward
    if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start);
    seen.set(s[i], i);
    // maximum of the current substring length and maxLen
    maxLen = Math.max(i - start + 1, maxLen);
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // The answer is "abc", with the length of 3. => 3
console.log(lengthOfLongestSubstring("bbbbb")); // The answer is "b", with the length of 1. => 1
console.log(lengthOfLongestSubstring("pwwkew")); // The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring. => 3
