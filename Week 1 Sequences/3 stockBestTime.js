/////////////////////////
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/////////////////////////

// a function that chooses best day to buy stock and sell on another (can't be same day) for maximum profit. if no profit possible return 0

var maxProfit = function (prices) {
  let currentProfit = 0;
  let globalProfit = 0;
  let buy = prices[0];
  let sell = 0;
  for (let i = 1; i < prices.length; i++) {
    // loop through prices
    sell = prices[i]; // initialize sell variable with first price
    currentProfit = sell - buy; // calculate profit as it loops through

    if (currentProfit > globalProfit) {
      // if current profit is greater than initial $0 global profit
      globalProfit = currentProfit; // let global profit equal that profit
    }

    if (prices[i] < buy) {
      // if the current price index is less than buy (initial index)
      buy = prices[i]; // buy equals the price to buy
    }
  }

  if (globalProfit < 0) {
    // if global profit is less than 0
    return 0; //return 0
  } else {
    // otherwise
    return globalProfit; // return profit amount
  }
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 - Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
console.log(maxProfit([7, 6, 4, 3, 1])); // 5 - In this case, no transactions are done and the max profit = 0.
