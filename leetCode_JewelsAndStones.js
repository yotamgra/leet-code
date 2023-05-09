//https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function (jewels, stones) {
  let counter = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) counter++;
  }

  return counter;
};

//https://leetcode.com/problems/smallest-even-multiple/
var smallestEvenMultiple = function (n) {
  return n % 2 === 0 ? n : n * 2;
};
