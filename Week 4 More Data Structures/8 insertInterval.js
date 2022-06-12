/////////////////////////
// https://leetcode.com/problems/insert-interval/
/////////////////////////

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

var insert = function (intervals, newInterval) {
  const result = [];

  /*
    Three cases:
    1 - If we have already added newInterval or the current interval ends before the new one starts
    2 - If newInterval ends before the current one starts
    3 - If there is an overlap that requires a merge
    */

  for (const [start, end] of intervals) {
    if (!newInterval || end < newInterval[0]) {
      result.push([start, end]);
    } else if (newInterval[1] < start) {
      result.push(newInterval);
      newInterval = null;
      result.push([start, end]);
    } else {
      newInterval[0] = Math.min(newInterval[0], start);
      newInterval[1] = Math.max(newInterval[1], end);
    }
  }

  // If newInterval has not been added it means it must be the last one
  if (newInterval) {
    result.push(newInterval);
  }

  return result;
};

console.log(insert[([1, 3], [6, 9])], [2, 5]); // [[1,5],[6,9]]
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
); // Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]. => [[1,2],[3,10],[12,16]]
