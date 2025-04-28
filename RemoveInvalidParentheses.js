/**
 * @param {string} s
 * @return {string[]}
 */
//cracking faang
var removeInvalidParentheses = function(s) {
    let result = new Set();
    let maxLength = -1;

    doDfs(s, 0, [], 0, 0);
    return [...result];

    function doDfs(str, curr_index, curr, left_count, right_count) {
        if (curr_index >= str.length) {
            if (left_count == right_count) {
                if (curr.length > maxLength) {
                    result = new Set();
                    result.add(curr.join(""));
                    maxLength = curr.length;
                }
                else if(curr.length == maxLength)
                    result.add(curr.join(""));
            }
            return;
        } 
        //()())()
        if (str[curr_index] == "(") {
            curr.push(str[curr_index]);
            doDfs(str, curr_index + 1, curr, left_count + 1, right_count);
            curr.pop();
            doDfs(str, curr_index + 1, curr, left_count , right_count);
            
        }
        else if (str[curr_index] == ")") {
            doDfs(str, curr_index + 1, curr, left_count , right_count);
            if (left_count > right_count) {
                curr.push(str[curr_index]);
                doDfs(str, curr_index + 1, curr, left_count, right_count + 1);
                curr.pop();
            }
        }
        else {
            curr.push(str[curr_index]);
            doDfs(str, curr_index + 1, curr, left_count, right_count);
            curr.pop();
        }

    }
};

let x = removeInvalidParentheses("()())()");
console.log(x);