/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length != s3.length)
        return false;

    
    let dp = new Array(s1.length+1);

    for (let i = 0; i < s1.length+1; i++){
        dp[i] = new Array(s2.length+1).fill(false);
    }

    dp[s1.length][s2.length] = true;

    for (let i = s1.length; i >= 0; i--){
        for (let j = s2.length; j >= 0; j--){
            if (i < s1.length && s1[i] == s3[i + j] && dp[i + 1][j])
                dp[i][j] = true;
            if (j < s2.length && s2[j] == s3[i + j] && dp[i][j+1])
                dp[i][j] = true;
        }
    }

    return dp[0][0];
};

let x = isInterleave("aabcc", "dbbca", "aadbbcbcac");
console.log(x);