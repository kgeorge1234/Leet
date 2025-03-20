/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    let output = [];
    const start = 0, end = 1;
    let i = 0;

    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        output.push(intervals[i]);
        i++;
    }

    while (i < intervals.length &&  intervals[i][start] <= newInterval[end]) {
        newInterval[start] = Math.min(intervals[i][start], newInterval[start]);
        newInterval[end] = Math.max(intervals[i][end], newInterval[end]);
        i++;
    }

    output.push(newInterval);

    while (i < intervals.length) {
        output.push(intervals[i]);
        i++;
    }

    return output;
};

let x = insert([[1,3],[6,9]], [2, 8]);
console.log(x);