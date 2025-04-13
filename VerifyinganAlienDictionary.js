/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let dict = new Map();
   
    for(let i=0;i<order.length;i++){
        dict.set(order[i], i);
    }

    for(let i = 0;i<words.length-1;i++){
        let j = 0;
        while (j < words[i].length && j < words[i + 1].length && words[i][j] === words[i + 1][j])
            j++;

        if (j < words[i].length && j < words[i + 1].length && (dict.get(words[i][j]) > dict.get(words[i + 1][j])))
            return false;

        if (j < words[i].length && j < words[i + 1].length && (dict.get(words[i][j]) < dict.get(words[i + 1][j])))
            continue;
        
        if( (words[i].length > words[i+1].length) && 
         (words[i].substring(0,j) == words[i+1].substring(0,j)))
             return false;    
    }

    return true;

};

let x = isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz");
console.log(x);