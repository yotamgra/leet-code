// https://leetcode.com/problems/search-insert-position/

var searchInsert = function (nums, target) {
  if (nums[0] > target) {
    return 0;
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
    if (
      i > 0 &&
      nums[i - 1] < target &&
      target < nums[i + 1] &&
      i < nums.length - 1
    ) {
      return i;
    }
  }
};
// console.log(searchInsert([1, 3, 5, 6], 7));




