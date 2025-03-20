/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [];
    result.push([1]);

    if (numRows == 1)
        return result;

    for (let i = 0; i < numRows -1; i++){
        let inputArray = result[i];
        let newArray = []
        newArray.push(1);
        for (let j = 0; j < inputArray.length - 1; j++){
            newArray.push(inputArray[j] + inputArray[j + 1]);
        }
        newArray.push(1);
        result.push(newArray);
    }

    return result;
};

let x = generate(5);
console.log(x);