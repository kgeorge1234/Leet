/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let data = new Map();

    if (!ransomNote)
        return true;

    for (const letter of magazine) {
        if (!data.has(letter))
            data.set(letter, 1);
        else
            data.set(letter, data.get(letter) + 1);
    }

    let temp;
    for (const letter of ransomNote) {
        if (!data.has(letter))
            return false;
        else {
            temp = data.get(letter);
            temp--;
            if (temp == 0)
                data.delete(letter);
            else
                data.set(letter, temp);
        }
            
    }
    return true;
};

let x = canConstruct("aa", "b");
console.log(x);