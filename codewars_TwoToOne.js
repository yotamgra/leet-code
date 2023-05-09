//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  const longestArr = [];
  const sortedArr = (s1 + s2).split("").sort();
  longestArr.push(sortedArr.slice(0, 1)[0]);
  let index = 0;
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== longestArr[index]) {
      longestArr.push(sortedArr[i]);
      index++;
    }
  }
  return longestArr.join("");
}
function longest2(s1, s2) {
  const sortedArr = (s1 + s2).split("").sort();
  const longestArr = sortedArr.filter(
    (element, index, array) => element !== array[index - 1]
  );

  return longestArr.join("");
}
console.log(longest2("aretheyhere", "yestheyarehere"));
