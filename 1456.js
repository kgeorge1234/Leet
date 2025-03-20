/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count = 0;
    let maxVal = 0;
    let vowel = new Set(['a', 'e', 'i', 'o', 'u']);
    let left = 0;

    for (let i = 0; i < s.length;i++){
        if (vowel.has(s[i]))
            count++;

        if (i - left + 1 > k) {
            if (vowel.has(s[left]))
                count--;

            left++;
        }
        maxVal = Math.max(maxVal, count);
        
    }

    return maxVal;
};

let x = maxVowels("abciiidef", 3);
console.log(x);