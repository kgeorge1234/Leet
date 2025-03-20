/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let result = 0;
    intervals.sort((a, b) => {
        if (a[0] !== b[0])
            return a[0] - b[0];
        
        return a[1] - b[1]
    });

    let prevEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++){
        if (prevEnd <= intervals[i][0])
            prevEnd = intervals[i][1];
        else {
            result += 1;
            prevEnd = Math.min(prevEnd, intervals[i][1]);
        }
    }

    return result;
};

let x = eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]);
console.log(x);