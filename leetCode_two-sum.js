// https://leetcode.com/problems/two-sum/

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, , 11, 7], 9));

const zed = [
  { id: 1, name: "mosh" },
  { id: 2, name: "david" },
  { id: 3, name: "mosh" },
  // { id: 3, name: "alon" },
];
console.log(zed.concat({ id: 3, name: "alon" }));

const obj = {};
zed.forEach((i) => {
  obj[i.name] = i.id;
});
console.log(obj);
