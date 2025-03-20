/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    
    if (n < 0)
        return 1 / powhelper(x, Math.abs(n));
    
    return powhelper(x, n);


    function powhelper(x, n) {
        if (x == 0)
            return 0;

        if (n == 0)
            return 1;

        let result = powhelper(x, Math.floor(n / 2));
        result = result * result;

        if (n % 2 != 0)
            return x * result;
        else
            return result;
    }
};

let x = myPow(2, -4);
console.log(x);