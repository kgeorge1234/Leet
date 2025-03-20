/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groups = new Map();

    function getSignature(s) {

        let result = [];

        let count = Array(26).fill(0);
        for (let i = 0; i < s.length; i++){
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        for (let i = 0; i < 26; i++){
            if (count[i] !== 0) {
                result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
            }
        }
        return result.join('');
    }


    for (const s of strs) {
        const signature = getSignature(s); 
        if (!groups.has(signature))
            groups.set(signature, []);

        groups.get(signature).push(s);
    }

    return [...groups.values()];
};


let x = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(x);