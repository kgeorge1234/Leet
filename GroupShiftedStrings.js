/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    let result = [];
    if (strings.length == 0)
        return result;

    let dict = new Map();

    for (let s of strings) {
        if (s.length == 1) {
            if (dict.has([-1].toString()))
                dict.get([-1].toString()).push(s);
            else
                dict.set([-1].toString(), [s]);
        } else {
            let curr = [];
            for (let i = 1; i < s.length; i++){
                curr.push(s.charCodeAt(i) - s.charCodeAt(i - 1 + 26) % 26);
            }

            if (dict.has(curr.toString()))
                dict.get(curr.toString()).push(s)
            else
                dict.set(curr.toString(), [s]);
        }     
    }

    result = [...dict.values()];
    return result;
};

let x = groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]);
console.log(x);