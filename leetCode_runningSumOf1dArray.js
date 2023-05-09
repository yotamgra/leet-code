// https://leetcode.com/problems/running-sum-of-1d-array/

// const runningSum = (nums) => {
//   const array = [];
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = 0; j <= i; j++) {
//       sum += nums[j];
//     }
//     array.push(sum);
//   }
//   return array;
// };
const runningSum = (nums) => {
  const array = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    
   
    array[i]= array[i-1]+nums[i]
  }
  return array;
};

console.log(runningSum([1, 2, 3, 4]));
