//https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function solution(number) {
  // convert the number to a roman numeral
  const romanObj = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "IIX",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "XXC",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "CCM",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM",
  };
  const stringNum = number.toString();
  let romanString = "";
 
  for (let i = 0; i < stringNum.length; i++) {
    const multiplier = Math.pow(10, stringNum.length - i - 1);
    if (parseInt(stringNum[i]) !== 0) {
      romanString += romanObj[parseInt(stringNum[i]) * multiplier];
    }
   
  }
  return romanString;
}
console.log(solution(2008));
