/////////////////////////
// https://leetcode.com/problems/3sum/
/////////////////////////

// given simple integer array nums, return all triplets [num[i], num[j], num[k]] such that i != j, i != k, j != k, and num[i] + num[j] + num[k] == 0

var threeSum = function (nums) {
  // if nums is empty or has less than 3 numbers, return []
  if (nums.length < 3) return [];
  //sort array asc
  nums.sort((a, b) => a - b);
  // initialize empty array for result
  const results = [];
  // loop through nums at every index
  for (let i = 0; i < nums.length - 1; i++) {
    // let l equal index + 1
    let l = i + 1,
      // r equals max nums index
      r = nums.length - 1;

    // while index i and index + 1 l are less than the max length
    while (l < r) {
      // check the sum of all 3 values
      let sum = nums[i] + nums[l] + nums[r];

      // if the sum is less than 1, increase index + 1 to the next one
      if (sum < 0) l++;
      // if sum is greater than 0, reduce max nums index
      else if (sum > 0) r--;
      // if sum === 0
      else {
        // push the 3 numbers that result
        results.push([nums[i], nums[l], nums[r]]);
        // while index value is equal to index + 1 value, move onto next value (this is due to duplicates)
        while (nums[i] === nums[i + 1]) i++;
        // while index + 1 value is equal to index + 2 value, move onto next value (this is due to duplicates)
        while (nums[l] === nums[l + 1]) l++;
        // while max nums index value is equal to max nums index -1 value, move onto previous value (this is due to duplicates)
        while (nums[r] === nums[r - 1]) r--;
        // move up the index and down the max index value
        l++;
        r--;
      }
    }
  }
  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([])); // []
console.log(threeSum([0])); // []
