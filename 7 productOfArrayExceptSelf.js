/////////////////////////
//
/////////////////////////

// function that answer[i] is equal to the multiplication of all other values in array except itself. needs to be o(n) and without using division

/*
[1,2,3,4]
The array should be multiplication of all values except the index that we are currenty on:
[2x3x4 (not 1), 
1x3x4 (not 2), 
1x2x4 (not 3), 
1x2x3  (not 4)] = [24, 12, 8 , 6]

In this problem, if division was allowed:
1. We run a loop on array and get 1x2x3x4 = 24.
2. we run another array, and for each index:
  24/1 = 24
  24/2 = 12
  24/3 = 8
  24/4 = 6
------------------------------------------------
Without division:

we create 2 arrays:

1 array with incremental multiplication from left, 1 array with incremental multiplication from right.

at the start index of these arrays, we'll have 1 (as no multiplication prior to it).

left arr = [1, (1)x1, (1x1)x2, (1x1x2)x3] = [1, 1, 2, 6]

right arr = [(1x4x3)x2, (1x4)x3, (1)x4 ,1] = [24, 12, 4, 1]

now, at each index, in left array, we'll have mutiple of left elements prior that index.

In right array, we'll have mutiple of right elements ahead of that index.

So, we'll multiply [1, 1, 2, 6] X  [24, 12, 4, 1] at each index.

Result = [24, 12, 8, 6]

1 array 

*/
var productExceptSelf = function (nums) {
  let leftArr = [];
  let leftMultiplication = 1;

  for (let i = 0; i < nums.length; i++) {
    leftArr[i] = leftMultiplication;
    leftMultiplication *= nums[i];
  }

  let rightArr = [];
  let rightMultiplication = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr[i] = rightMultiplication;
    rightMultiplication *= nums[i];
    rightArr[i] *= leftArr[i]; //this additional step saves us from having another iteration. We can do the multiplication at the spot.
  }

  return rightArr;
};
