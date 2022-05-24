/////////////////////////
// https://leetcode.com/problems/valid-parentheses/
/////////////////////////

// function to check if an open bracket also is closed by the same bracket

// this exercise uses a database type called the STACK (which uses queueing up of "values" to determine pairs)

var isValid = function (s) {
  let result = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let x in s) {
    // loops through index of input string
    if (s[x] in brackets) {
      // push values that are the key of brackets object
      console.log("s[x]: ", s[x]);
      result.push(s[x]);
    } else {
      // all values that aren't keys
      let pop = result.pop(); // remove the key value from the above
      console.log("pop: ", pop);
      console.log("brackets[pop]: ", brackets[pop]);
      // console.log("s[x]: ", s[x])
      if (brackets[pop] !== s[x] || !pop) {
        // if the value of the brackets object does not equal the key to its corresponding key or pop (which is the key value)
        return false;
      }
    }
  }
  return result.length ? false : true; // if the length (meaning there is something that wasn't paired) is is truthy return false otherwise return true  - true because everything can be paired or false because nothing can be paired
};

console.log(isValid("()[]{}"));
