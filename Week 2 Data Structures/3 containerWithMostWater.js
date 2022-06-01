/////////////////////////
// https://leetcode.com/problems/container-with-most-water/
/////////////////////////

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

// Use 2 point sliding window

var maxArea = function (height) {
  // declare result variable
  let result = 0,
    // declare left index start
    left = 0,
    // declare right index start (last index)
    right = height.length - 1;

  // while the integer array is being looped
  while (left < right) {
    // smallest side is equal to the min of the height of either the left or right as that is the highest it can be at that iteration
    let smallestSide = Math.min(height[left], height[right]);
    // area is equal to the index difference multiplied by the smallest height
    let area = (right - left) * smallestSide;

    // if the area is greater than the prev result, it becomes the new area
    if (area > result) result = area;

    // if the left height is less than the right height, move start index up
    if (height[left] < height[right]) left++;
    // otherwise move right index down
    else right--;
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
