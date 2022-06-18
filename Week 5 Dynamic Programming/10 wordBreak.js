/////////////////////////
// https://leetcode.com/problems/word-break/
/////////////////////////

// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

var wordBreak = function (s, wordDict) {
    // if dictionary doesnt exist, return false
    if (wordDict == null || wordDict.length === 0) return false;

    // create a set of the dictionary
    const set = new Set(wordDict);
    // create a dp array, initialized with all false
    const dp = Array(s.length + 1).fill(false);
    // first value of dp array is true
    dp[0] = true;

    // loop through the string from index 1
    for (let end = 1; end <= s.length; end++) {
        // loop through from the start (this loop) to end (previous loop)
        for (let start = 0; start < end; start++) {
            // w is the slice of the string between start and end
            const w = s.slice(start, end);
            // if the dp array at start is true and includes the word/letter
            if (dp[start] === true && set.has(w)) {
                // dp array at end is true
                dp[end] = true;
                // break out of the start loop
                break;
            }
        }
    }
    return dp[s.length];
};

console.log(wordBreak("leetcode", ["leet", "code"])); // Return true because "leetcode" can be segmented as "leet code". => true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // Return true because "applepenapple" can be segmented as "apple pen apple". Note that you are allowed to reuse a dictionary word. => true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false

// e.g.
// 'leetcode'
// ['leet', 'code']
//
// i = 1 j = 0 l
// dp = [true, false, false, false, false, false, false, false, false]
// i = 2 j = 0 le
// i = 2 j = 1  e
// dp = [true, false, false, false, false, false, false, false, false]
// i = 3 j = 0 lee
// i = 3 j = 1  ee
// i = 3 j = 2   e
// dp = [true, false, false, false, false, false, false, false, false]
// i = 4 j = 0 leet
// match
// dp = [true, false, false, false, true, false, false, false, false]
//
// i = 5 j = 0 leetc
// i = 5 j = 1  eetc
// i = 5 j = 2   etc
// i = 5 j = 3    tc
// i = 5 j = 4     c
// dp = [true, false, false, false, true, false, false, false, false]
// i = 6 j = 0 leetco
// i = 6 j = 1  eetco
// i = 6 j = 2   etco
// i = 6 j = 3    tco
// i = 6 j = 4     co
// i = 6 j = 5      o
// dp = [true, false, false, false, true, false, false, false, false]
// i = 7 j = 0 leetcod
// i = 7 j = 1  eetcod
// i = 7 j = 2   etcod
// i = 7 j = 3    tcod
// i = 7 j = 4     cod
// i = 7 j = 5      od
// i = 7 j = 6       d
// dp = [true, false, false, false, true, false, false, false, false]
// i = 8 j = 0 leetcode
// i = 8 j = 1  eetcode
// i = 8 j = 2   etcode
// i = 8 j = 3    tcode
// i = 8 j = 4     code
// match
// dp = [true, false, false, false, true, false, false, false, true]
