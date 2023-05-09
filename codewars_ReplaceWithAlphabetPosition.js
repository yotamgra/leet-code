//https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  const array = text.split(" ").join("").toLowerCase().split("");
  const positions = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i].charCodeAt(0) >= 'a'.charCodeAt(0) && array[i].charCodeAt(0) <= 'z'.charCodeAt(0)
     
    ) {
      positions.push(array[i].charCodeAt(0) - "a".charCodeAt(0) + 1);
    }
  }
  return positions.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
