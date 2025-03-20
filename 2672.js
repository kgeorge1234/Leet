/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var colorTheArray = function(n, queries) {
    let arr = new Array(n).fill(0);
    let result = 0;
    let output = new Array(queries.length);

    let index;
    let color;
    let i = 0;

    for (let query of queries) {
        index = query[0];
        color = query[1];

        
        if (index == 0) {
            if (arr[index] == arr[index + 1] && arr[index] !=0)
                result -= 1;

            arr[index] = color;

            if (arr[index] == arr[index + 1])
                result += 1;

            output[i] = result;
            

        } else if (index == n) {
            if (arr[index] == arr[index - 1] && arr[index] !=0)
                result -= 1;

            arr[index] = color;

            if (arr[index] == arr[index - 1])
                result += 1;

            output[i] = result;
        }
        else {
            if (arr[index] == arr[index + 1] && arr[index] !=0)
                result -= 1;

            if (arr[index] == arr[index - 1] && arr[index] != 0)
                result -= 1;

            arr[index] = color;

            if (arr[index] == arr[index + 1])
                result += 1;

            if (arr[index] == arr[index - 1])
                result += 1;

            output[i] = result;
        }
        i +=1;
    }

    return output;
};

let x = colorTheArray(15, [[10,2],[12,1],[7,1],[11,1],[5,3],[14,3],[12,2],[14,3],[3,2],[13,3],[11,1],[2,2],[2,1],[4,2]]);
console.log(x);