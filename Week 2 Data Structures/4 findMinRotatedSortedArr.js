/////////////////////////
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
/////////////////////////

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// this method uses binary search

// Left and right are 2 pointers that keep track of the start and end of the subarray that we are currently searching.

// Within the loop, a mid pointer is calculated to be half the sum of left and right. We then start to compare the value at the mid pointer and the value at the right pointer. From here, there can only be 2 case:

// (a) nums[mid] > nums[right]
// For an un-rotated sorted array, we can easily understand that there can never be a case where nums[mid] would ever be greater than nums[right]. However, this condition can happen in a rotated array if the mid pointer is residing on the left side of the rotated array. Once we know that the mid pointer is at the left side of the array, we can start to cut down our search to only the right side since we know that the minimum value can never be in the left side. Hence, we update the left pointer to be mid + 1, indicating that we are now searching the right side. => [4,5,6,7,0,1,2] = [4,5,6,7][0,1,2] where middle is 7 and greater than the right values

// (b) nums[mid] <= nums[right]
// This condition will tell us that the subarray that we are currently searching is now a properly sorted array which is un-rotated. To get the minimum value of this subarray, we simply have to keep adjusting the right pointer to the left by setting the mid pointer as the right pointer, cutting down our serach to only the left half of this subarray. Eventually, we will reach the left most element of this subarray. => [0,1,2,3,4] = properly sorted, middle is 2, and it is smaller than the right

var findMin = function (nums) {
  // declare left and right side index
  let l = 0;
  let r = nums.length - 1;
  // loop while left is less than right index
  while (l < r) {
    // declare middle index
    const middle = ~~((l + r) / 2);
    // if the middle index value is greater than the right value, the left can move up a value from the middle to check for min value. this occurs until the middle index value is <= the right value in which case the left index value will be the min
    if (nums[middle] > nums[r]) l = middle + 1;
    else r = middle; // otherwise the right is equal to the middle due to already being sorted. in this case l = the first index
  }
  return nums[l];
};

console.log(findMin([3, 4, 5, 1, 2])); // The original array was [1,2,3,4,5] rotated 3 times. => 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // The original array was [0,1,2,4,5,6,7] and it was rotated 4 times. => 0
console.log(findMin([11, 13, 15, 17])); // The original array was [11,13,15,17] and it was rotated 4 times.  => 11
