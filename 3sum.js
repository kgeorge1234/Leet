/**
 * @param {number[]} nums
 * @return {number[][]}
 */

class HashSet {
    constructor() {
        this.map = new Map();
    }

    // Simple hash function for arrays
    static hash(arr) {
        return JSON.stringify(arr);
    }

    add(value) {
        const hash = HashSet.hash(value);
        this.map.set(hash, value);
    }

    has(value) {
        const hash = HashSet.hash(value);
        return this.map.has(hash);
    }

    delete(value) {
        const hash = HashSet.hash(value);
        return this.map.delete(hash);
    }

    clear() {
        this.map.clear();
    }

    get size() {
        return this.map.size;
    }
}


var threeSum = function(nums) {
    
    let resultset = new HashSet();
    nums.sort((a, b) => a - b);  // -4,-1,-1,0,1,2

    for (let i = 0; i < nums.length - 2; i++){
        let low = i + 1;
        let high = nums.length - 1;

        let target = 0 - nums[i];

        while (low < high) {
            let sum = nums[low] + nums[high];
            if (sum == target) {
                resultset.add([nums[i], nums[low], nums[high]]);
                low++;
                high--;
            }
            else if (sum > target)
                high--;
            else
                low++;
        }
    }

    return Array.from(resultset.map.values());

};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

