/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let myarray = [];
    let numerals = [
        [ 1000, 'M' ],
        [ 900, 'CM' ],
        [ 500, 'D' ],
        [ 400, 'CD' ],
        [ 100, 'C' ],
        [ 90, 'XC' ],
        [ 50, 'L' ],
        [ 40, 'XL' ],
        [ 10, 'X' ],
        [ 9, 'IX' ],
        [ 5, 'V' ],
        [ 4, 'IV' ],
        [1, 'I']
    ];

    let i = 0;
    let divisor = 0;

    while (num != 0) {
        
        divisor = Math.trunc(num / numerals[i][0]);
       
        if (divisor > 0) {
            for (let j = 0; j < divisor; j++) {
                myarray.push(numerals[i][1]);
            }
            num = num % numerals[i][0];
        }
        i++;
    }
    return myarray.join('');
};

console.log(intToRoman(1994));