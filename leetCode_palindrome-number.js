// https://leetcode.com/problems/palindrome-number/description/

// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

const isPalindrome = (num) => {
  if (num < 0) {
    return false;
  }
  const numArray = [];
  while (num / 10 > 0) {
    const mod = num % 10;
    numArray.push(mod);
    num = (num - mod) / 10;
  }
  for (let i = 0; i < numArray.length / 2; i++) {
    if (numArray[i] !== numArray[numArray.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(1221));
