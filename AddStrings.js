/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let result = [];
    let carry = 0;

    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 && j >= 0) {
        let sum = Number(num1[i]) + Number(num2[j]) + carry;
        if (sum >= 10) {
            sum = sum % 10;
            carry = 1;
        }
        else
            carry = 0;
        
        result.push(String(sum))
        i--;
        j--;
    }

    while (i >= 0) {
        let sum = Number(num1[i]) + carry;
        if (sum >= 10) {
            sum = sum % 10;
            carry = 1;
        }
        else
            carry = 0;

        result.push(String(sum))
        i--;
    }

    while (j >= 0) {
        let sum = Number(num2[j]) + carry;
        if (sum >= 10) {
            sum = sum % 10;
            carry = 1;
        }
        else
            carry = 0;

        result.push(String(sum))
        j--;
    }

    if (carry == 1)
        result.push(String(carry));

    return result.reverse().join("");
};

let x = addStrings("0", "0");
console.log(x);