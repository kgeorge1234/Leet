/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let myMap = new Set(); 
    let sum;
    let modValue;
    while (n != 1 ) {
        sum = 0;
        modValue = 0;
       
        while (n > 0) {
            modValue = n % 10;
            sum = sum + Math.pow(modValue, 2);
            n = Math.floor(n / 10);
        }

        if (myMap.has(sum))
            return false;
        else
            myMap.add(sum);

        n = sum;
    }

    return true;


};

let x = isHappy(2);
console.log(x);