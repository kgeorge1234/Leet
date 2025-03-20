var lengthOfLongestSubstring = function(s) {
    
    let numSet = new Set();
    let i = 0;
    let j = 0;
    let maxNum = 0;
    
    while(i<s.length) {
        if (numSet.has(s[i])) {
            numSet.delete(s[j]);
            j++;
        }
        else {
            numSet.add(s[i]);
            i++;
            maxNum = Math.max(numSet.size, maxNum);
        }
    }

    return maxNum;
};

console.log(lengthOfLongestSubstring("abcbdabcbefg"));