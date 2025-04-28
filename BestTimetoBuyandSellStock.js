/**
 * @param {number[]} prices
 * @return {number}
 */
//algoJS
var maxProfit = function(prices) {
    let currentMin = prices[0];
    let currentMax = 0;
    for (let i = 1; i < prices.length; i++) {
        currentMin = Math.min(currentMin, prices[i]);
        currentMax = Math.max(currentMax, prices[i] - currentMin);
    }

    return currentMax
};