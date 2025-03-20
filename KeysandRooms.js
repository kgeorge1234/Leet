/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let seen = new Set();

    function dfs(roomNum) {
        if (!seen.has(roomNum))
            seen.add(roomNum);
        else
            return;

        for (let i = 0; i < rooms[roomNum].length; i++){
            dfs(rooms[roomNum][i]);
        }

    }

    dfs(0);

    return seen.size == rooms.length;
};

let x = canVisitAllRooms([[1,3],[3,0,1],[2],[0]]);
console.log(x);