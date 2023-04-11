const largestNum = (array) => {
  if (array.length === 1) {
    return array[0];
  }
  if (array[0] > array[1]) {
    array.splice(1, 1);
    return largestNum(array);
  }
  array[0] = array[1];
  array.splice(1, 1);
  return largestNum(array);
};

console.log(largestNum([1, 2, 3, 4, 5])); //5
console.log(largestNum([1, 2, 3, 7, 5, 6])); //7
console.log(largestNum([1, 2, 1, 2, 4, 4, 1, 3])); //4
