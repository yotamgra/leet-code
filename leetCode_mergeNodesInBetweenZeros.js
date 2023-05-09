// https://leetcode.com/problems/merge-nodes-in-between-zeros/

const mergeNodes = (head) => {
  const array = [];
  for (let i = 0; i < head.length; i++) {
    let sum = 0;
    let j = i + 1;
    while (head[j] !== 0 && j < head.length) {
      sum += head[j];
      j++;
    }
    if (j < head.length) {
      array.push(sum);
      i = j - 1;
    }
  }
  return array;
};

console.log(mergeNodes([0,1,0,3,0,2,2,0]));
