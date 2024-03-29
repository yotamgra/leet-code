// https://leetcode.com/problems/defanging-an-ip-address/

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

const defangIPaddr = (address) => {
    return address.split('.').join('[.]')
};

console.log(defangIPaddr("255.100.50.0"));
