// https://leetcode.com/problems/climbing-stairs/description/

// 4 
// 1 1 1 1
// 2 1 1
// 1 2 1
// 1 1 2
// 2 2

// 5
// 1 1 1 1 1
// 2 1 1 1
// 1 2 1 1
// 1 1 2 1
// 1 1 1 2
// 2 2 1
// 2 1 2
// 1 2 2

// 6
// 1 1 1 1 1 1
// 2 1 1 1 1
// 1 2 1 1 1
// 1 1 2 1 1
// 1 1 1 2 1
// 1 1 1 1 2
// 2 2 1 1
// 2
// 2 2 2

var climbStairs = function (n) {
    if(n===1 || n===2){
        return 1
    }
    let counter = 0
    let ones = 1
    let twos = 1
  let options = 1;
  for (let i = n - 1; i > 0; i--) {
    if( ones + 2* twos === n){
        counter++
    }

  }
  return options
};
