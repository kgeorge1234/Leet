/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let rowBegin = 0;
    let rowEnd = n - 1;
    let columnBegin = 0;
    let columnEnd = n - 1;

    let counter = 1;
    let result = new Array(n).fill(0).map(()=> new Array(n).fill(0));

    while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
        for (let i = columnBegin; i <= columnEnd; i++){
            result[rowBegin][i] = counter++;
        }
        rowBegin++;

        for (let i = rowBegin; i <= rowEnd; i++){
            result[i][columnEnd] = counter++;
        }
        columnEnd--;

        for (let i = columnEnd; i >=columnBegin; i--){
            result[rowEnd][i] = counter++;
        }
        rowEnd--;

        for (let i = rowEnd; i >= rowBegin; i--){
            result[i][columnBegin] = counter++;
        }
        columnBegin++;
    }
    return result;
};

let x = generateMatrix(3);
console.log(x);