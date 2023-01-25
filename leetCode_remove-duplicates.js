// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//   assert nums[i] == expectedNums[i];
// }
var removeDuplicates = function (nums) {
  const expectedNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (!expectedNums.includes(nums[i])) {
      expectedNums.push(nums[i]);
    }
  }
  return expectedNums.length;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
