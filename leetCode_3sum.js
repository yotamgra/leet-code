// https://leetcode.com/problems/3sum/

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0

const threeSum = (nums) => {
  const array = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = i + 2; k < nums.length; k++) {
        if (
          nums[i] + nums[j] + nums[k] === 0 &&
          i !== j &&
          j !== k &&
          i !== k
        ) {
          console.log(nums[i]);
          if (array.length === 0) array.push([nums[i], nums[j], nums[k]]);
          let isTripleExist = false;
          for (let l = 0; l < array.length; l++) {
            if (
              array[l].includes(nums[i]) &&
              array[l].includes(nums[j]) &&
              array[l].includes(nums[k])
            ) {
              isTripleExist = true;
            }
          }
          if (!isTripleExist) array.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return array;
};
const array = [-1, 0, 1, 2, -1, -4];
array.sort((a, b) => a - b);
// console.log(array)
console.log(threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]));
