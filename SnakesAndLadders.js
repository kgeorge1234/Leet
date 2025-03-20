/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let n = board.length;
    let visited = []

    for (let i = 0; i < n; i++){
        visited.push(new Array(n).fill(false));
    }

    let queue = [];
    queue.push(1);
    visited[n - 1][0] = true;
    let steps = 0;

    while (queue.length > 0) {
        let size = queue.length;

        while (size-- > 0) {
            let currVal = queue.shift();
            
            if (currVal == n * n)
                return steps;

            for (let dice = 1; dice <= 6; dice++){
                if (dice + currVal > n * n)
                    continue;

                let pos = findCordinates(dice + currVal, n);
                let row = pos[0];
                let col = pos[1];

                if (visited[row][col] == true)
                    continue;

                if (board[row][col] == -1)
                    queue.push(dice + currVal);
                else
                    queue.push(board[row][col]);

            }
        }
        steps++;
    }
    return -1;

    function findCordinates( currVal,  n) {
        let r = n - Math.trunc((currVal - 1) / n) - 1;
        let c = (currVal - 1) & n;
        if (r % 2 == n % 2)
            return [r, n - 1 - c];
        else
            return [r, c];
    }
};

let x = snakesAndLadders([[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, 35, -1, -1, 13, -1], [-1, -1, -1, -1, -1, -1], [-1, 15, -1, -1, -1, -1]]);
console.log(x);