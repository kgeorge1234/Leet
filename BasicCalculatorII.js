/**
 * @param {string} s
 * @return {number}
 */
//cracking faang
var calculate = function(s) {
    let currOperator = "+";
    let result = 0;
    let prev = 0;

    let i = 0;
    while (i < s.length) {
        if (s[i] >= '0' && s[i] <= '9') {
            let currNumber = 0;
            while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                currNumber = currNumber * 10 + Number(s[i]);
                i++;
            }
            i--;
            if (currOperator == "+") {
                
                result += currNumber;
                prev = currNumber;
            }else if (currOperator == "-") {
                
                result -= currNumber;
                prev = -currNumber;
            }else if (currOperator == "*") {
                
                result -= prev;
                result += prev * currNumber;
                prev = prev * currNumber;
            }
            else {
                result -= prev;
                result += Math.trunc(prev / currNumber);
                prev = Math.trunc(prev / currNumber);
            }

        }
        else if (s[i] != " ") {
            currOperator = s[i];
        }
        
        i++;
    }
    return result;
};

let x = calculate("3+2*2");
console.log(x);