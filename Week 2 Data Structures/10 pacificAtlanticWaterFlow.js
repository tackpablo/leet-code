/////////////////////////
// https://leetcode.com/problems/pacific-atlantic-water-flow/
/////////////////////////

// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

// uses Depth First Search (DFS) and recursion

var pacificAtlantic = function (heights) {
  let res = [];
  let min = -Infinity;
  let rows = heights.length;
  let cols = heights[0].length;
  let pacific = new Array(rows).fill().map(() => new Array(cols).fill(0));
  let atlantic = new Array(rows).fill().map(() => new Array(cols).fill(0));

  // left & right
  for (let row = 0; row < rows; row++) {
    dfs(heights, row, 0, min, pacific);
    dfs(heights, row, heights[0].length - 1, min, atlantic);
  }
  // top & bottom
  for (let col = 0; col < cols; col++) {
    dfs(heights, 0, col, min, pacific);
    dfs(heights, heights.length - 1, col, min, atlantic);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (pacific[row][col] == 1 && atlantic[row][col] == 1) {
        res.push([row, col]);
      }
    }
  }
  return res;
};

const dfs = (heights, r, c, prevVal, ocean) => {
  // 1. Check necessary condition.
  if (r < 0 || c < 0 || r > heights.length - 1 || c > heights[0].length - 1)
    return;
  if (heights[r][c] < prevVal) return;
  if (ocean[r][c] == 1) return;

  // 2. Process call.
  ocean[r][c] = 1;

  // 3. Call dfs as needed.
  dfs(heights, r - 1, c, heights[r][c], ocean);
  dfs(heights, r + 1, c, heights[r][c], ocean);
  dfs(heights, r, c - 1, heights[r][c], ocean);
  dfs(heights, r, c + 1, heights[r][c], ocean);
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
); // [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
console.log(
  pacificAtlantic([
    [2, 1],
    [1, 2],
  ])
); // [[0,0],[0,1],[1,0],[1,1]]
