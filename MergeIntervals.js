/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let output = [];
    
    intervals.sort((a, b) => a[0] - b[0]);
    let current = intervals[0];
    output.push(current);

    for (let i = 1; i < intervals.length; i++){
        let current_begin = current[0];
        let current_end = current[1];
        let next_begin = intervals[i][0];
        let next_end = intervals[i][1];

        if (current_end >= next_begin) {
            current[1] = Math.max(current_end, next_end); 
        }
        else {
            current = intervals[i];
            output.push(current);
        }
    }

    return output;
};

let x = merge([[1, 5],[2,3],[3,4],[8, 10], [15, 18]]);
console.log(x);