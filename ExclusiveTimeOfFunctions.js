/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
//cracking faang
var exclusiveTime = function(n, logs) {
    let result = new Array(n).fill(0);

    let stack = [];
    let firstElement = logs[0].split(":");
    stack.push([Number(firstElement[0]),Number(firstElement[2])]);
    for(let i=1;i<logs.length;i++){
        let element = logs[i].split(":");
        
        if(element[1] == "start"){
            if (stack.length > 0) {
                let job = stack[stack.length - 1][0];
                let timeStart = stack[stack.length - 1][1];
                result[job] += element[2] - timeStart;
            }
            stack.push([Number(element[0]),Number(element[2])]);
        }else{
            let job = stack[stack.length - 1][0];
            let timeStart = stack[stack.length - 1][1];
            result[job]+= Number(element[2]) - timeStart + 1;
            stack.pop();
            //update start time again
            if (stack.length > 0) {
                stack[stack.length - 1][1] = Number(element[2]) + 1;
            }  
        }    
    }

    return result;
};

let x = exclusiveTime(2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]);
console.log(x);