/////////////////////////
// https://leetcode.com/problems/longest-repeating-character-replacement/
/////////////////////////

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Use 2 point sliding window + frequency counter

// Maintain left and right pointer, max instances of a single char, and visit counts for each char.
// for each char in string
// increment visit count for this char
// if new visit count is higher than max, update max
// if length of current string without max char count is greater than k,
// then we know the new char made it such that there are more chars missing than can be replaced by k,
// so we will remove the first char
// and increment left pointer
// increment right pointer to look at next char.

// In the end, the answer is whatever the window size is. This is because we never shrink the window size.
// As we look at new chars, we increase the window size.
// Once we see we can no longer increase due to limitation of k, we slide the window forward.
// In these inbetween states, it's possible the window doesn't span a valid subset,
// but that doesn't matter because the window size at one point did span a valid set.
// Instead, we wait until there's a possibility of a better set, which is when there is a substring with more instances of some char.

var characterReplacement = function (s, k) {
  // define left/right index, maxCharCount and frequency counter visited
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  // while the right index is less than the string length as it moves to the right
  while (right < s.length) {
    // define char, which is the string value at the position as it moves up
    const char = s[right];
    // if frequency counter doesnt have the string value of the string as it moves up, initialize it (=1) or if it exists, add to it (+1)
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    // maxCharCount keeps track of the highest value in the frequency counter (whichever letter has the most in the counter)
    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    // if length of current string without maxCharCount is greater than k
    // then we know the new char made it such that there are more chars missing than can be replaced by k,
    if (right - left + 1 - maxCharCount > k) {
      // remove the first char
      visited[s[left]]--;
      // increment left pointer
      left++;
    }
    // move onto next value up the string
    right++;
  }

  return right - left;
};

console.log(characterReplacement("ABAB", 2)); // Replace the two 'A's with two 'B's or vice versa. => 4
console.log(characterReplacement("AABABBA", 1)); // Replace the one 'A' in the middle with 'B' and form "AABBBBA". The substring "BBBB" has the longest repeating letters, which is 4. => 4
