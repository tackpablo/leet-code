/////////////////////////
// https://leetcode.com/problems/jump-game/
/////////////////////////

// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// uses greedy algorithm

var canJump = function (nums) {
    // this is the biggest jump we can make
    let max = 0;
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
        // set new max jump to be current max or i + jump size
        max = Math.max(max, i + nums[i]);
        // if we hit a 0 jump and our max can't cross this, break
        if (nums[i] === 0 && max <= i) break;
    }
    // check if our max jump we have can reach the end
    return max >= nums.length - 1;
};

console.log(canJump([2, 3, 1, 1, 4])); // Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index. => true
console.log(canJump([3, 2, 1, 0, 4])); // You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index. => false
