/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 0)
        return 0;

    let first_buy = Number.MIN_SAFE_INTEGER, second_buy = Number.MIN_SAFE_INTEGER;
    let first_sell = 0, second_sell = 0;

    for (let i = 0; i < prices.length; i++){
        first_buy = Math.max(first_buy, -prices[i]);
        first_sell = Math.max(first_sell, prices[i] + first_buy);
        second_buy = Math.max(second_buy, first_sell - prices[i]);
        second_sell = Math.max(second_sell, second_buy + prices[i]);
    }
    return second_sell;
};

let x = maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);
console.log(x);