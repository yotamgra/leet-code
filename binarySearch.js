//PROBLEM 2 - binary search + recursion
//Use binary search to find the number of occurrences of a given value in a sorted array.

const binarySearch = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  let middle = Math.floor((min + max) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  while (arr[middle] !== val && min < max) {
    if (arr[middle] > val) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
    middle = Math.floor((min + max) / 2);
  }
  if (arr[middle] !== val) return -1;
  return middle;
};

const findOccurrences = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  let middle = Math.floor((min + max) / 2);
  let counter = 0;

  while (min <= max) {
    if (arr[middle] === val) {
      let left = middle - 1;
      let right = middle + 1;
      while (arr[left] === val && left >= 0) {
        counter++;
        left--;
      }
      while (arr[right] === val && right < arr.length) {
        counter++;
        right++;
      }
      return counter + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
    middle = Math.floor((min + max) / 2);
  }

  return counter;
};
// console.log(binarySearch([1, 2, 3, 5, 7, 10, 12], 2)); //Output: 4
// console.log(binarySearch([1, 2, 3, 5, 7, 10, 12], 10)); //Output: 1
// console.log(binarySearch([1, 2, 3, 5, 7, 10, 12], 5)); //Output: 2
// console.log(binarySearch([1, 2, 3, 5, 7, 10, 12], 12)); //Output: 0
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 2)); //Output: 4
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 3)); //Output: 1
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 1)); //Output: 2
console.log(findOccurrences([1, 1, 2, 2, 2, 2, 3], 5)); //Output: 0
