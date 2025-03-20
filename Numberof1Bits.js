/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let result;
    let remainder;

    if (!n)
        return result;

    result = 0;

    while (n != 0) {
        remainder = n % 2;
        n = Math.trunc(n / 2);
        if (remainder == 1)
            result++;
    }

    return result;

};

let x = hammingWeight(2147483645);
console.log(x);