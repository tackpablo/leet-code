/////////////////////////
// https://leetcode.com/problems/two-sum/
/////////////////////////

// simple function to check if 2 numbers in array adds up to the target, return index of those numbers (at least one solution)

var twoSum = function (nums, target) {
  let i = 0;
  while (i < nums.length) {
    // loop through array, and at every index
    let difference = target - nums[i]; // find the difference between the target and number at index
    // if array includes the difference value and index of difference value is not the current index (not itself)
    if (nums.includes(difference) && i != nums.indexOf(difference)) {
      return [i, nums.indexOf(difference)]; // return result array with 2 indexes
    } else {
      i++; // if nothing fits, move onto next iteration of loop
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
