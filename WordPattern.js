/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let wordArray = s.split(" ");
    const modified = wordArray.map(word => {
        return word.length === 1 ? word + '1' : word;
    });

    let patternToWordMap = new Map();

    if (pattern.length != modified.length)
        return false;

    for (let i = 0; i < pattern.length; i++){
        if (patternToWordMap.has(pattern[i])) {
            if (patternToWordMap.get(pattern[i]) != modified[i])
                return false;
        }
        else {
            patternToWordMap.set(pattern[i], modified[i]);
        }


        if (patternToWordMap.has(modified[i])) {
            if (patternToWordMap.get(modified[i]) != pattern[i])
                return false;
        }
        else {
            patternToWordMap.set(modified[i], pattern[i]);
        }
    }
    return true;
};

let x = wordPattern("abc", "b c a");
console.log(x);