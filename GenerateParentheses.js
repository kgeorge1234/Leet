/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = [];

    generateParanthesesHelper(result, "", 0, 0, n);
    return result;
};

function generateParanthesesHelper(result, input, opencount, closecount, maxcount) {
    if (input.length == maxcount * 2) {
        result.push(input);
        return result;
    }

    if (opencount < maxcount)
        generateParanthesesHelper(result, input + "(", opencount + 1, closecount, maxcount);
    if (closecount < opencount)
        generateParanthesesHelper(result, input + ")", opencount, closecount + 1, maxcount);
        
};

let x = generateParenthesis(2);

console.log(x);