/////////////////////////
// https://leetcode.com/problems/merge-intervals/
/////////////////////////

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

var merge = function (intervals) {
  // sort intervals that are array within an array
  let sorted = intervals.sort((a, b) => a[0] - b[0]);
  // res = first array in sorted array
  let res = [sorted[0]];

  // loop through sorted at every index starting with 1 (not 0)
  for (let i = 1; i < sorted.length; i++) {
    // first value of current array
    let currStart = sorted[i][0];
    console.log("currStart: ", currStart);
    // second value of current array
    let currEnd = sorted[i][1];
    console.log("currEnd: ", currEnd);
    // second value of prev array
    let lastEnd = res[res.length - 1][1];
    console.log("lastEnd: ", lastEnd);

    // if first value of current array is less than or equal to second value of prev array
    if (currStart <= lastEnd) {
      // prev array second value is equal to max value of either second value of current array or second value of prev array, whichever is greater
      res[res.length - 1][1] = Math.max(lastEnd, currEnd);
    } else {
      // if not, just keep the whole array
      res.push(sorted[i]);
    }
  }

  return res;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
