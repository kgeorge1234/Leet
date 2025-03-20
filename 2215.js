/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let data1 = new Set();
    let data2 = new Set();
    let result1 = new Set();
    let result2 = new Set();

    for(nums of nums1){
        data1.add(nums);
    }

    for(nums of nums2){
        data2.add(nums);
    }

    for(num of nums1){
        if(!data2.has(num))
            result1.add(num);
    }

    for(num of nums2){
        if(!data1.has(num))
            result2.add(num);
    }
    
    return [[...result1],[...result2]];
};

let x = findDifference([1,2,3,3], [1,1,2,2]);
console.log(x);