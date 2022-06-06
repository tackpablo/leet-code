/////////////////////////
// https://leetcode.com/problems/top-k-frequent-elements/
/////////////////////////

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

// uses hashmaps (a data structure that maps keys to values)

var topKFrequent = function (nums, k) {
  const freqMap = new Map();
  const bucket = [];
  const result = [];

  // sets map with 1 or +1, depending on whether array value is already in the map or not
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // bucket stores the frequency of each integer in frequency map into the corresponding index of the array bucket as a set
  for (let [num, freq] of freqMap) {
    bucket[freq] = (bucket[freq] || new Set()).add(num);
  }

  // while looping from the end of the bucket
  for (let i = bucket.length - 1; i >= 0; i--) {
    // if the bucket at the index exists (frequency), push that value (frequent element) at the index. spread in case there is more than one frequent element
    if (bucket[i]) result.push(...bucket[i]);
    // if the result length equals k, break
    if (result.length === k) break;
  }
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
