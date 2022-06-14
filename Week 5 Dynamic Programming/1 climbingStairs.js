/////////////////////////
// https://leetcode.com/problems/climbing-stairs/
/////////////////////////

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// uses recursion, memoization (an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again)

// climbStairs(n) returns the total number of different ways of taking n steps.
// Hence, climbStairs(n-1) + climbStairs(n-2) gives the result
// since we can either climb 1 or 2 steps

var climbStairs = function (n, memo = new Array()) {
  // if n = 1, only 1 way to climb
  if (n === 1) {
    return 1;
  }

  // if n = 2, only 2 ways to climb
  if (n === 2) {
    return 2;
  }

  // if memo[n] (an array at value n) is not undefined, return the value. initially this should be undefined as a new array will have no index or values
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // result equals total steps calculated for 1 step and 2 step
  let res = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  // memo[n] is equal to addition of both 1 and 2 step possibilities
  memo[n] = res;
  return res;
};

console.log(climbStairs(2)); // There are two ways to climb to the top.
//   1. 1 step + 1 step
//   2. 2 steps => 2
console.log(climbStairs(3)); // There are three ways to climb to the top.
//   1. 1 step + 1 step + 1 step
//   2. 1 step + 2 steps
//   3. 2 steps + 1 step => 3
