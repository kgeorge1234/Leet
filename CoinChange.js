/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    coins.sort((a, b) => a - b);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++){
        for (let j of coins) {
            if (j <= i) {
                dp[i] = Math.min(dp[i], 1 + dp[i - j]);
            }
            else
                break;
        }
    }

    return dp[amount] > amount ? -1 : dp[amount];
};

let x = coinChange([1, 2, 5], 11);
console.log(x);