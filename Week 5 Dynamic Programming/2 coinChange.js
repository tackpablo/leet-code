/////////////////////////
// https://leetcode.com/problems/coin-change/
/////////////////////////

// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

var coinChange = function (coins, amount) {
  // since arrays are zero indexed, we need amount + 1
  // ex. amount is 4, if we will an array to length of 4, it will only go up to index 3
  // we use the index value to represent the value of coin so they need to be the same
  // fill amount set to amount + 1 so we have a number to use when comparing with minimum
  let dp = new Array(amount + 1).fill(amount + 1);
  // always needed to start since zero value will be made with zero coins
  dp[0] = 0;
  // next loop through coins to establish our dp array
  for (let i = 0; i < coins.length; i++) {
    // j is started at coins[i] because numbers smaller than the first coin are impossible to make
    // ex. coin[0] = 5, impossible to make a value of 1-4
    for (let j = coins[i]; j <= amount; j++) {
      // the curremt value is compare with the itself and the value minus the current coin
      // dp[j - coins[i]] represents checking the previous coins count value, + 1 to account for this coin being counted
      // THIS is the most important part that I could not even possibly think about
      dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
    }
  }
  // dp[amount] === amount + 1, if the amount is the same as the fill amount, then we cant get this value with coins provided
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11)); // 11 = 5 + 5 + 1 => 3
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
