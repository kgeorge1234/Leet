/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var maxScore = function(nums1, nums2, k) {
   
    let result = 0;
    let totalSum = 0;
    let heap = new MinPriorityQueue();  // No callback needed

    const merged = [];
    
    for (let i = 0; i < nums1.length; i++) {
        merged.push([nums2[i], nums1[i]]);
    }

    merged.sort((a, b) => b[0] - a[0]);  // Sort by nums2 in descending order

    for (const [maxOf2, num1Val] of merged) {
        if (heap.size() === k) {
            totalSum -= heap.dequeue();
        }

        totalSum += num1Val;
        heap.enqueue(num1Val);  // Enqueue primitive value 

        if (heap.size() === k) {
            result = Math.max(result, totalSum * maxOf2);
        }
    }

    return result;
};



let x = maxScore([1, 3, 3, 2], [2, 1, 3, 4], 3)
console.log(x);