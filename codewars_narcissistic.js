//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value) {
  const valueArr = value.toString().split("");
  const numOfDigits = valueArr.length;
  let sum = 0;

  for (let i = 0; i < numOfDigits; i++) {
    sum += parseInt(valueArr[i]) ** numOfDigits;
  }

  return sum === value;
}
function narcissistic1(value) {
  const valueArr = value.toString().split("");
  const numOfDigits = valueArr.length;

  return (
    valueArr.reduce(
      (busket, element) => busket + parseInt(element) ** numOfDigits,
      0
    ) === value
  );
}
console.log(narcissistic1(1532));
