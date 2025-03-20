/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 1;
    let right = x;
    let mid = 0;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);

        if (mid * mid > x)
            right = mid - 1;
        else if (mid * mid < x)
            left = mid + 1;
        else
            return mid;
    }

    return right;
};

let x = mySqrt(8);
console.log(x);