/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];

    let j = 0;
    let i = 0;
    let result = 0;

    while (j < numerals.length && i < s.length) {
        if (s.substring(i, i + 1) == numerals[j][0]) {
            result = result + numerals[j][1];
            i++;
        }
        else if (s.substring(i, i + 2) == numerals[j][0]) {
            result = result + numerals[j][1];
            i = i + 2; 
        }
        else
            j++;
    }
    return result;
};

console.log(romanToInt("III"));