/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let left = 0;
    let right = 0;
    let count = 0;

    let found = 3; 

    let dict = new Map();
    dict.set("a", 1);
    dict.set("b", 1);
    dict.set("c", 1);

    while (right < s.length) {
        if (dict.has(s[right])) {
            dict.set(s[right], dict.get(s[right]) - 1);
            if (dict.get(s[right]) == 0)
                found -= 1;
        }



        while (found == 0) {
            count = count + (s.length - right);

            if (dict.has(s[left])) {
                dict.set(s[left], dict.get(s[left]) + 1);

                if (dict.get(s[left]) > 0)
                    found += 1;

                
            }

            left += 1;
        }

        right += 1;
    }

    return count;
};

let x = numberOfSubstrings("abcabc");
console.log(x);