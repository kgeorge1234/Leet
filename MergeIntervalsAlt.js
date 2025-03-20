/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        if (a[0] != b[0])
            return a[0] - b[0];
        else
            return a[1] - b[1];
    });

    let result = [];
    
    let current = intervals[0];
    result.push(current);

    for (let i = 1; i < intervals.length; i++){
        if (current[1] >= intervals[i][0]) {
            current[1] = Math.max(current[1], intervals[i][1]);
        } else {
            current = intervals[i];
            result.push(current);
        }
    }

    return result;
};

let x = merge([[1,4],[0,4]]);
console.log(x);