/////////////////////////
// https://leetcode.com/problems/decode-ways/
/////////////////////////

// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

var numDecodings = function (s) {
  // create dp array the length of the string and fill with 0
  const dp = Array(s.length + 1).fill(0);

  // we initialize the array at index 0 for singular digit
  dp[0] = 1;

  // loop through the string from index 1
  for (let i = 1; i <= s.length; i++) {
    // slice one digit out
    const oneDigit = Number(s.slice(i - 1, i)); // '0' to '9'

    // slice 2 digits out
    const twoDigits = Number(s.slice(i - 2, i)); // '00' to '99'

    // if one digit is not equal to 0, dp array at index is the previous value
    if (oneDigit !== 0) dp[i] += dp[i - 1]; // We want [1, 9]

    // if two digits is between 10-26, dp array at index is the previous 2 values
    if (10 <= twoDigits && twoDigits <= 26) dp[i] += dp[i - 2]; // We want [10, 26]
  }

  // return length (how many one digit + two digit numbers were added to array)
  return dp[s.length];
};

console.log(numDecodings("12")); // "12" could be decoded as "AB" (1 2) or "L" (12). => 2
console.log(numDecodings("226")); // "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6). => 3
console.log(numDecodings("06")); // "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06"). => 0
