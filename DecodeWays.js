/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] == "0")
        return 0;

    let dp = new Array(s.length + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= s.length; i++){
        let single = parseInt(s.substring(i - 1, i));
        let double = parseInt(s.substring(i - 2, i));

        if (single >= 1 && single <= 9)
            dp[i] = dp[i] + dp[i - 1];

        if (double >= 10 && double <= 26)
            dp[i] = dp[i] + dp[i - 2];
    }

    return dp[s.length];
};

let x = numDecodings("11106");
console.log(x);