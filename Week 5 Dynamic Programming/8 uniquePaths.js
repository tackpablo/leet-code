/////////////////////////
// https://leetcode.com/problems/unique-paths/
/////////////////////////

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 ^ 109.

var uniquePaths = function (m, n) {
  // create dp table that is m x n
  let dp = new Array(m).fill(0).map(() => new Array(n));

  // loop through row from the bottom right
  for (let row = m - 1; row >= 0; row--) {
    // loop through column from the bottom right
    for (let col = n - 1; col >= 0; col--) {
      // if the row or column are bottom right, dp array at that row/column equals 1 as it can only move right or down
      if (row === m - 1 || col === n - 1) {
        dp[row][col] = 1;
      } else {
        // otherwise the path to the bottom right is the addition of both (row, col+1) and (row+1, col)
        dp[row][col] = dp[row][col + 1] + dp[row + 1][col];
      }
    }
  }
  // dp[0][0] since we want to figure out the number of paths from (0,0) to the bottom-right
  return dp[0][0];
};

console.log(uniquePaths(3, 7)); // 28
console.log(uniquePaths(3, 7)); // From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
//   1. Right -> Down -> Down
//   2. Down -> Down -> Right
//   3. Down -> Right -> Down => 3
