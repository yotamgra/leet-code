//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

//                1
//             3     5
//          7     9    11
//      13    15    17    19
//   21    23    25    27    29
//31    33    35    37    39    41

function rowSumOddNumbers(n) {
  if (n === 1) return 1;
  let firstInRow = 1;
  for (let i = 1; i < n; i++) {
    firstInRow = firstInRow + i * 2;
  }
  let sum = firstInRow;
  for (let i = 1; i < n; i++) {
    sum = sum + firstInRow + 2 * i;
  }

  return sum;
}
console.log(rowSumOddNumbers(4));
