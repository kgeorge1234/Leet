/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

//https://www.youtube.com/watch?v=jl0q8Xp6O28
//Deepti talesra
var minWindow = function(s, t) {
    let dict = new Map();
    
    for (let letter of t) {
        if (!dict.has(letter)) {
            dict.set(letter, 1);
        }
        else
            dict.set(letter, dict.get(letter) + 1);
    }

    let formed = 0;
    let left = 0;
    let right = 0;
    let minimumWindow = "";
    let minLen = Infinity;

    while (right < s.length) {
        if (dict.has(s[right])) {
            dict.set(s[right], dict.get(s[right]) - 1);
            if (dict.get(s[right]) == 0)
                formed += 1;
        }

        while (formed == dict.size) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minimumWindow = s.slice(left, right + 1);
            }
            
            if (dict.has(s[left])) {
                dict.set(s[left], dict.get(s[left]) + 1);
                if (dict.get(s[left]) > 0)
                    formed--;
            }
            left += 1;;
        }
        right += 1;;
    }
    return minimumWindow;

};

let x = minWindow("ADOBECODEBANC", "ABC");
console.log(x);