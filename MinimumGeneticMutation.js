/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    let q = [[startGene, 0]];
    let bankSet = new Set(bank);

    while (q.length > 0) {
        
        let [curr, step] = q.shift();
        
        if (curr === endGene)
            return step;

        for (let i = 0; i < curr.length; i++){
            for (let ch of "ACGT") {
                let mutation = curr.substring(0, i) + ch + curr.substring(i + 1);

                if (bankSet.has(mutation))
                {
                    q.push([mutation, step + 1]);
                    bankSet.delete(mutation);

                }
            }
        }
    }

    return -1;
};

let x = minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA","AACCGCTA","AAACGGTA"]);
console.log(x);