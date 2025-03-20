/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let map1 = new Map();
    let map2 = new Map();

    [...word1].forEach(c => map1.set(c, map1.get(c) + 1 || 1));
    [...word2].forEach(c => map2.set(c, map2.get(c) + 1 || 1));

    if (map1.size != map2.size)
        return false;

    for (let [key, value] of map1) {
        if (!map2.get(key))
            return false;
    }

    let array1 = [];
    let array2 = [];

    for (let value of map1.values()) {
        array1.push(value);
    }

    for (let value of map2.values()) {
        array2.push(value);
    }
    
    array1.sort((a, b) => b - a);
    array2.sort((a, b) => b - a);

    for (let i = 0; i < array1.length; i++){
        if (array1[i] != array2[i])
            return false;
    }

    return true;
};


let x = closeStrings("cabbba", "abbccc");
console.log(x);