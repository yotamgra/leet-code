// https://leetcode.com/problems/length-of-last-word/description/

var lengthOfLastWord = function (s) {
  const array = s.split(" ");
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i]) {
      return array[i].length;
    }
  }
};
console.log(lengthOfLastWord("   fly me   to   the moon  "));
lengthOfLastWord("   fly me   to   the moon  ");

