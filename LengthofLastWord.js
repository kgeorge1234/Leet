/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let countword = 0;
    let flag = false;

    for (let i = s.length - 1; i >= 0; i--){
        if (s[i] != ' ') {
            flag = true;
            countword++;
        }
        else if (s[i] == ' ' && flag) {
            return countword;
        }
    }

    return countword;
};

let x = lengthOfLastWord("hello");
console.log(x);