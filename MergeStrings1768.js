/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w1 = word1.length;
    let w2 = word2.length;

    let res = new Array(w1+w2);

    let i=0;
    let j=0;

    while(i < w1 && j < w2){
        res.push(word1[i]);
        res.push(word2[j]);
        i++;
        j++;
    }

    while(i < w1){
        res.push(word1[i]);
        i++;
    }

    while(j < w2){
        res.push(word2[j]);
        j++;
    }

    return res.join("");
};

let x = mergeAlternately("ab", "pqrs");
console.log(x);