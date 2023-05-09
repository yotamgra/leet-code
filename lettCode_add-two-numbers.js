// https://leetcode.com/problems/add-two-numbers/

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

const addTwoNumbers = (li1, li2) => {
  return reversNum(numToArray(reversNum(li1) + reversNum(li2)));
};

const reversNum = (numAsArray) => {
  let reversed = 0;
  numAsArray.forEach((digit, index) => {
    reversed += digit * Math.pow(10, index);
  });
  return reversed;
};

const numToArray = (num) => {
  return num
    .toString()
    .split("")
    .map((char) => parseInt(char));
};


console.log(addTwoNumbers([2,4,3], [5,6,4]));

