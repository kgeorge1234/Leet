/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result = 0;

    while (n > 0) {
        result = result + Math.trunc(n / 5);
        n = Math.trunc(n / 5);
    }
    return result;
};

let x = trailingZeroes(25);
console.log(x);