/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let wordMap = new Map();
    let temp;
    
    for (letter of s)
    {
        if (wordMap.has(letter)) {
            wordMap.set(letter, wordMap.get(letter) + 1);
        }
        else
            wordMap.set(letter, 1);
    }

    for (letter of t) {
        if (wordMap.has(letter)) {
            temp = wordMap.get(letter);
            
            if (temp == 1)
                wordMap.delete(letter);
            else {
                temp--;
                wordMap.set(letter, temp);
            }
        }
        else
            return false;
    }
    if(wordMap.size == 0)
        return true;
    else
        return false
};

let x = isAnagram("anagram", "nagaram");
console.log(x);