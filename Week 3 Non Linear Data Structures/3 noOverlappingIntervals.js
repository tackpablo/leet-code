/////////////////////////
// https://leetcode.com/problems/non-overlapping-intervals/
/////////////////////////

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// uses sliding window (simple two pointers)

// Sort by the end. Given [ a ] [ b ] remove b, if b[0] < a[1]

var eraseOverlapIntervals = function (intervals) {
  // sort by the second inverval value
  intervals.sort((a, b) => a[1] - b[1]);

  let prevInterval = intervals[0];
  let counter = 0;

  // as you go through the intervals
  for (let i = 1; i < intervals.length; i++) {
    // if the prev interval's second value is greater than the next interval's first value, increase counter (this is an overlap)
    if (prevInterval[1] > intervals[i][0]) counter++;
    // otherwise the previnterval is equal to this new interval
    else prevInterval = intervals[i];
  }
  return counter;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
); // [1,3] can be removed and the rest of the intervals are non-overlapping. => 1
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
); // You need to remove two [1,2] to make the rest of the intervals non-overlapping. => 2
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
); // You don't need to remove any of the intervals since they're already non-overlapping. => 0
