/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [];
    result.push([1]);

    if (rowIndex == 0)
        return result[0];

    for (let i = 0; i < rowIndex; i++){
        let inputArray = result[i];
        let newArray = []
        newArray.push(1);
        for (let j = 0; j < inputArray.length - 1; j++){
            newArray.push(inputArray[j] + inputArray[j + 1]);
        }
        newArray.push(1);
        result.push(newArray);
    }

    return result[rowIndex]
};

let x = getRow(10);
console.log(x);