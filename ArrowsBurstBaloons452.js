/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let temp;
    const start = 0, end = 1;
    let res = [];
    
    // sort points
    points.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    let i = 0;

    while (i < points.length - 1) {
        
        while (i < points.length - 1 && points[i][end] < points[i + 1][start]) {
            res.push(points[i]);
            i++;
        }
        temp = points[i];

        while (i < points.length - 1 && temp[end] >= points[i + 1][start]) {
            temp[start] = Math.max(temp[start], points[i + 1][start]);
            temp[end] = Math.min(temp[end], points[i + 1][end]);
            i++;
        }
        res.push(temp);
        i++;

    }

    if (i < points.length)
        res.push(points[i]);

    return res.length;
};

let x = findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]);
console.log(x);