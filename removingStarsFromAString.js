//https://leetcode.com/problems/removing-stars-from-a-string/

// Example 1:
// Input: s = "leet**cod*e"
// Output: "lecoe"
// Explanation: Performing the removals from left to right:
// - The closest character to the 1st star is 't' in "leet**cod*e". s becomes "lee*cod*e".
// - The closest character to the 2nd star is 'e' in "lee*cod*e". s becomes "lecod*e".
// - The closest character to the 3rd star is 'd' in "lecod*e". s becomes "lecoe".
// There are no more stars, so we return "lecoe".

// Example 2:
// Input: s = "erase*****"
// Output: ""
// Explanation: The entire string is removed, so we return an empty string.

const removeStars = (s) => {
  let temp = s.split("");

  for (let i = 0; i < temp.length; i++) {
    while (temp[i] === "*") {
      temp.splice(i, 1);
      if (i - 1 > -1) {
        temp.splice(i - 1, 1);
      }
      i--;
    }
  }
  return temp.join("");
};

console.log(removeStars("leet**cod*e"));
