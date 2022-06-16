/////////////////////////
// https://leetcode.com/problems/house-robber-ii/
/////////////////////////

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// This is similar to a more simple state machine/transition problem in which you need to keep track of two states and their best values at any given time. In this case, those states would be "rob", meaning that we stole from the current house, and "skip", meaning that we skipped the current house.

// Logic will tell us that, at each stop, the new value of "rob" would have to come from the previous "skip" value (representing the best possible value obtained while skipping the last house) added to the current house amount (n[i]). The new value of the "skip" state would then be either the previous "rob" state (forced to skip this house) or else the previous "skip" state (skipping again), whichever is better.

// The extra complexity with this problem is considering the line of houses as a circle, meaning that you can't rob from both the first and last houses. In order to keep track of this complexity, we can just duplicate the two states into four states, with one set (r1 & s1) following the normal route, and the second set (r2 & s2) forcefully skipping the first house.

// In this case, we can set our initial variable values and then start at the second iteration (i = 1). Rather than building full arrays for each state, I'll just use four simple variables and array destructuring to keep things neat.

// Once we reach the end, we can check to see which value is the largest, excluding the value of r1, which represents the case of robbing from both the first and last houses. Adding in a n[0] accounts for the edge case with only one house, and adding in a || 0 accounts for the edge case without any houses (even though that's specifically against the stated conditions).

var rob = function (nums) {
  let r1 = nums[0],
    s1 = (r2 = s2 = 0);

  for (let i = 1; i < nums.length; i++)
    [r1, s1, r2, s2] = [
      s1 + nums[i],
      Math.max(r1, s1),
      s2 + nums[i],
      Math.max(r2, s2),
    ];
  return Math.max(s1, r2, s2, nums[0]) || 0;
};

console.log(rob([2, 3, 2])); // You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses. => 3
console.log(rob([1, 2, 3, 1])); // Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount you can rob = 1 + 3 = 4. => 4
