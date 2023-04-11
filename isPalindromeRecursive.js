const isPalindrome = (string) => {
  if (string.length <= 1) {
    return true;
  } else if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, -1));
  }
  return false;
};

console.log(isPalindrome("rotor")); //true  t
console.log(isPalindrome("redder")); //true
console.log(isPalindrome("motor")); //false
console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("buddy")); //false
