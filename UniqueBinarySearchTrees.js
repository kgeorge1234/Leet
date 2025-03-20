/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let dp = new Array(20).fill(0);
    return numTreeshelper(n);

    function numTreeshelper(n) {
        if (n <= 1)
            return 1;

        if (dp[n] > 0)
            return dp[n];

        for (let i = 1; i <= n; i++){
            dp[n] = dp[n] + numTreeshelper(i - 1) * numTreeshelper(n - i);
        }

        return dp[n];
    }

};

let x = numTrees(4);
console.log(x);