/////////////////////////
// https://leetcode.com/problems/house-robber/
/////////////////////////

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

var rob = function (nums) {
  // If there are no houses to rob, the maximum profit must be zero
  if (nums == null || nums.length == 0) return 0;
  // If there is only one house to rob, the maximum profit must be whatever it contains
  if (nums.length === 1) return nums[0];
  // If there are only 2 houses to rob, then rob whichever one is greater
  if (nums.length === 2) return Math.max(...nums);

  // Create an array that will store the maximum profit up to a certain point, such that dp[n] is the maximum profit up to the nth house
  // Similar to above, dp[0] can only be the first house, dp[1] is the max of the first two houses
  let dp = [nums[0], Math.max(nums[0], nums[1])];
  // For every house after the second house, the maximum profit will either be the current house + the profit of two houses ago, or don't rob the house.
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  console.log(dp);

  // Return the maximum profit of all houses
  return dp[dp.length - 1];
};

console.log(rob([1, 2, 3, 1])); // Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4. => 4
console.log(rob([2, 7, 9, 3, 1])); // Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12. => 12
