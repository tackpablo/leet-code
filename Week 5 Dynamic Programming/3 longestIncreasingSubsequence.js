/////////////////////////
// https://leetcode.com/problems/longest-increasing-subsequence/
/////////////////////////

// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

var lengthOfLIS = function (nums) {
  // create dp array with value 1 for the length of nums array
  let dp = new Array(nums.length).fill(1);
  // loop through the nums array
  for (let i = 0; i < nums.length - 1; i++) {
    // loop through nums array from one ahead of i
    for (let j = i + 1; j < nums.length; j++) {
      // if num at j is greater than num at i
      if (nums[j] > nums[i]) {
        // dp array value at j is the max between dp[i + 1] or dp[j]
        dp[j] = Math.max(dp[i] + 1, dp[j]);
      }
    }
  }
  return Math.max(...dp);
};

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // The longest increasing subsequence is [2,3,7,101], therefore the length is 4. => 4
// console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // 4 [1,1,1,1,1,1,]
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // 1
console.log(lengthOfLIS([1, 2, 3, 4])); // 1
