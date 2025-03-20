const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let heap1 = new MinPriorityQueue();
    let heap2 = new MinPriorityQueue();
    let total = 0;

    let start = 0;
    let end = costs.length - 1;

    for (let i = 0; i < candidates; i++){
        heap1.enqueue(costs[i]);
        start++;
    }

    if (costs.length - candidates >= candidates) {
        end = costs.length - candidates;
    }
    else
        end = start;

    
    for (let i = costs.length - 1; i >= end ; i--){
        heap2.enqueue(costs[i]);
    }

    for (let i = 0; i < k; i++){
        let element1 = heap1.isEmpty() ? Infinity : heap1.front();
        let element2 = heap2.isEmpty() ? Infinity : heap2.front();

        if (element1 <= element2) {
            heap1.dequeue();
            total = total + element1;
            if (start < end)
                heap1.enqueue(costs[start]);
            start++;
        }
        else {
            heap2.dequeue();
            total = total + element2;
            end--;
            if (start <= end)
                heap2.enqueue(costs[end]);
        }
    }

    return total;

        
};

let x = totalCost([1,2,4,1], 3, 3);
console.log(x);