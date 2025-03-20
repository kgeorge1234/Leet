/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;

    for (i = s.length - 1; i >= 0;i--) {
        for (let w of wordDict) {
            if ( i + w.length <= s.length && (w == s.substring(i, i + w.length)))
                dp[i] = dp[i + w.length];

            if (dp[i] == true)
                break;
        }
    }

    return dp[0];
};

let x = wordBreak("applepenapple", ["apple","pen"]);
console.log(x);