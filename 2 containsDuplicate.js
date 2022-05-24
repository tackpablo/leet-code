/////////////////////////
// https://leetcode.com/problems/contains-duplicate/
/////////////////////////

// function to check if any values appear more than once in the array or return false

var containsDuplicate = function (nums) {
  nums.sort(); // sort array
  for (let i = 0; i < nums.length - 1; i++) {
    // loop through the array
    if (nums[i] == nums[i + 1]) return true; // if current number is equal to the next number - works because the array is sorted
  }
  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
