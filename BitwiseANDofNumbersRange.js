/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    let low = left;
    let high = right;

    if (left == right)
        return left;

    let result;
   
    while (low < high) {
        result = high & high - 1;
        high = result;
    }

    return result;
};

let x = rangeBitwiseAnd(1, 2147483647);
console.log(x);