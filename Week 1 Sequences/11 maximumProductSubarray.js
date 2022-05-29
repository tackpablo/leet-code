/////////////////////////
// https://leetcode.com/problems/maximum-product-subarray/
/////////////////////////

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// A subarray is a contiguous subsequence of the array.

// contigous subarray = a subarray of an array with a condition that the elements of the subarray should be in exact sequence as the sequence of the elements in the array

var maxProduct = function (nums) {
  // if nums is empty return 0
  if (!nums.length) return 0;

  // initialize current min/max and max with first number of array
  let curMax = nums[0];
  let curMin = nums[0];
  let max = nums[0];

  // loop through the nums array
  for (var i = 1; i < nums.length; i++) {
    // num is the current array value at the index
    let num = nums[i];
    // calculate the min and max product
    let minProd = curMin * num;
    // console.log("minProd: ", minProd);
    let maxProd = curMax * num;
    // console.log("maxProd: ", maxProd);

    // calculate the current max and min from the current index value, the min and max product calculated at the index
    curMax = Math.max(num, minProd, maxProd);
    console.log("curMax: ", num, minProd, maxProd);
    curMin = Math.min(num, minProd, maxProd);
    console.log("curMin: ", num, minProd, maxProd);
    // max value is equal to either the max or current max, whichever is true
    max = Math.max(max, curMax);
  }
  return max;
};

console.log(maxProduct([2, 3, -2, 4])); // 6 => [2,3] has the largest product 6.
console.log(maxProduct([-2, 0, -1])); // 0 => The result cannot be 2, because [-2,-1] is not a subarray (ie. skips the 0).
