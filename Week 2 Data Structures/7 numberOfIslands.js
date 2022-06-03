/////////////////////////
// https://leetcode.com/problems/number-of-islands/
/////////////////////////

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Uses Depth First Search (DFS) algorithm

// Approach seems to look for the land first, and using recursion turns that land and surrounding land into water recursively using DFS. When land is found for the first time, a counter is used to increase island count by one

var numIslands = function (grid) {
  let count = 0; // the counted islands

  //Go though each cell of the 2d array/grid
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      // check if any land exists
      if (grid[row][col] == "1") {
        // if it does, increase count by one
        count++;
        // use function explore, which uses DFS to checks surrounding to see if it's an island
        explore(row, col, grid);
      }
    }
  }
  return count;
};

// Takes a cell in a grid with a “1” , turns it into a “0” and explores (DFS) any of the left, right, up, down 1’s
function explore(row, col, grid) {
  //Let's return IF
  // row < 0 OR col < 0 OR row is out of bounds(meaning the row is larger than the number of arrays in the 2d array) OR col is at/out of bounds (meaning the current col is at/over the number of elements a row has.)
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[row].length ||
    grid[row][col] === "0"
  ) {
    return;
  }

  //Otherwise, we should explore it!
  //First let's set the current spot to "0"
  grid[row][col] = "0";

  //Possibilites:
  // 1) 1 to the right, left, top, bottom
  //right
  explore(row, col + 1, grid);
  //Left
  explore(row, col - 1, grid);
  //Down
  explore(row + 1, col, grid);
  //Up
  explore(row - 1, col, grid);
}

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
); // 1
console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
); // 3
