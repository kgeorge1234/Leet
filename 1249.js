/**
 * @param {string} s
 * @return {string}
 */

//Nick White
var minRemoveToMakeValid = function(s) {
    let result = "";
    let count = 0;

    for (let ch of s) {
        if (ch == ')' && count == 0)
            continue;

        result = result + ch;

        if (ch == ')')
            count -= 1;

        if (ch == '(')
            count += 1;
    }

    let secondpass = "";

    for (let i = result.length - 1; i >= 0; i--){
        if (result[i] == '(' && count > 0) {
            count -= 1;
            continue;
        }
        secondpass += result[i];
    }

    return secondpass.split("").reverse().join("");
};

let x = minRemoveToMakeValid("lee(t(c)o)de)");
console.log(x);