/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    if (citations.length == 0)
        return 0;

    let count = 0;

    let i = 0;

    while (citations[i] > count ) {
        count++;
        i++;
    }

    return count;
};

let x = hIndex([3,1,1]);
console.log(x);