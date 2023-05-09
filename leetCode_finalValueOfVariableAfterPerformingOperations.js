const finalValueAfterOperations = (operations) => {
  let sum = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].includes("++")) sum++;
    if (operations[i].includes("--")) sum--;
  }
  return sum
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
