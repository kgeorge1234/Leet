/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length;

    for (let i = n - 1; i >= 0; i--){
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        else
            digits[i] = 0;
    }

    let output = new Array(n + 1).fill(0);
    output[0] = 1;
    return output;
};

let x = plusOne([9,9,9]);
console.log(x);