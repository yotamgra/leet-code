//https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  if (!arr.length) return 0;
  const arraySum = arr.reduce((accumulator, a) => accumulator + a, 0);
  let leftSum = 0;
  let rightSum = arraySum - arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
    rightSum -= arr[i + 1];
  }
  if (leftSum === 0) {
    return arr.length - 1;
  }
  return -1;
}
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
