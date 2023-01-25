// https://leetcode.com/problems/reverse-integer/

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

var reverse = function (x) {
  let positiveOrNegative = 1;
  let num = 0;
  let numAsString = x.toString();
  if (numAsString[0] === "-") {
    positiveOrNegative = -1;
    numAsString = numAsString.slice(1, numAsString.length);
  }
  for (let i = 0; i < numAsString.length; i++) {
    num += parseInt(numAsString[ numAsString.length - 1 - i]) * Math.pow(10, numAsString.length - 1 - i);
  }

  return num * positiveOrNegative;
};
console.log(reverse(-123));
