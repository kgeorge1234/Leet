/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    const pairs = {
        "[": "]",
        "{": "}",
        "(": ")"
    }

    let stack = [];

    if (stack.length % 2 != 0)
        return false;

    for (let i = 0; i < s.length; i++){
        if (s[i] == "(" || s[i] == "{" || s[i] == "[")
            stack.push(s[i]);
        else if (s[i] != pairs[stack.pop()])
            return false;
    }

    return stack.length == 0;
};

console.log(isValid("[()][]"));