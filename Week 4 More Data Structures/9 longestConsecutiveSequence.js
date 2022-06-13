/////////////////////////
// https://leetcode.com/problems/longest-consecutive-sequence/
/////////////////////////

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

var longestConsecutive = function (nums) {
  // if nums doesnt exist, return 0
  if (nums == null || nums.length === 0) return 0;

  // create a new object that stores unique values
  const set = new Set(nums);

  // variable to store longest sequence length
  let longest = 0;

  // loop through nums
  for (let num of nums) {
    // check if a number is not part of the sequence
    if (!set.has(num - 1)) {
      // we can count
      let count = 0;
      // while the set has the count and number
      while (set.has(count + num)) {
        // move count up by one
        count++;
      }
      // longest is whatever is greater: longest or count
      longest = Math.max(longest, count);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. => 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
