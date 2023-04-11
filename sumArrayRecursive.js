const sumArray = (array) => {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + sumArray(array.slice(1));
  }
};
console.log(sumArray([1, 2, 3, 4, 5])); //15
console.log(sumArray([1, 2, 3, 4, 5, 6])); //21
console.log(sumArray([1, 2, 3, 4, 5, 6, 7])); //28
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8])); //36
console.log(sumArray([0, 0, 0, 0, 0, 0, 0, 0])); //0
console.log(sumArray([])); //0

//