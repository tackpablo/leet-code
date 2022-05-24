/////////////////////////
// https://leetcode.com/problems/maximum-subarray/
/////////////////////////

// function to find the contigous subarray (containing at least one number) which has the largest sum

// contigous subarray means continous within the given array

const maxSubArray = function (nums) {
  // choose a subarray start (start is the first value of the given array) but tracks the maximum found within the given array
  let maxSubarray = nums[0];
  // track the current subarray and let it start at 0
  let currSubarray = 0;

  for (let i = 0; i < nums.length; i++) {
    // if the current subarray is less than 0, current subarray is equal to 0
    // this means that if it is not, the array counting can start and compared
    if (currSubarray < 0) {
      currSubarray = 0;
    }
    // current subarray can start counting the contigous subarray sum
    currSubarray += nums[i];
    // maximum subarray is compared to the current subarray as it is being tallied up
    maxSubarray = Math.max(maxSubarray, currSubarray);
  }

  return maxSubarray;
};
