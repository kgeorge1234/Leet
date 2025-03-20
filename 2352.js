/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {

    let mySet = new Map();
    let temp = ""
    let count = 0;
    let mySet2 = new Map();

    for(let i=0;i<grid.length;i++){
        temp = "";
        for(j = 0;j<grid[i].length;j++){
            temp = temp + grid[i][j];
        }
        if(mySet.has(temp))
            mySet.set(temp, mySet.get(temp)+1);
        else
            mySet.set(temp,1);
    }
    
    for(let j =0;j<grid[0].length;j++){
        temp = "";
        for(let i=0;i<grid.length;i++){
            temp = temp + grid[i][j];
            
        }
         if(mySet2.has(temp))
            mySet2.set(temp, mySet2.get(temp)+1);
        else
            mySet2.set(temp,1);
    }

    for(let [key,value] of mySet2){
        if(value == 1 && mySet.has(key) && mySet.get(key) > 1)
            count = count + mySet.get(key);
        else if (value > 1 && mySet.has(key) && mySet.get(key) > 1)
            count = count + value * mySet.get(key);
        else if (value > 1 && mySet.has(key))
            count = count + value;
        else if (mySet.has(key)) 
            count++;
    }
    return count;

    
};

let x = equalPairs([[13,13],[13,13]]);
console.log(x);