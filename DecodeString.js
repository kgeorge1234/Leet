/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let result = [];
    let temp = "";
    let count = "";
    
    for (let i = 0; i < s.length; i++){
        if (s[i] != ']')
        {
            result.push(s[i]);
        }
        else
        {
            temp = "";
            count = "";

            while (result[result.length - 1] != '[') {
                temp = result.pop() + temp;
            }

            result.pop();

            while (/^[0-9]$/.test(result[result.length - 1])) {
                count = result.pop() + count;
            }

            for (let j = 0; j < Number(count); j++){
                result.push(temp);
            }
                
        }

    }

    return result.join("");
};

let x = decodeString("3[a]2[bc]");
console.log(x);