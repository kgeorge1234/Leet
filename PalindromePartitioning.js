/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    dfs(s, 0, []);
    return result;

    function dfs(s, start, arr) {
        if (start == s.length) {
            result.push([...arr]);
            return;
        }

        for (let i = start; i < s.length; i++){
            if (isPalindrome(s.substring(start, i+1))) {
                arr.push(s.substring(start, i+1));
                dfs(s, i + 1, arr);
                arr.pop();
            }
        }
    }

    function isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        while (start < end) {
            if (s.charAt(start) != s.charAt(end))
                return false;

            start++;
            end--;
        }
        return true;
    }
};

let x = partition("aab");
console.log(x);