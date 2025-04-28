/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
//Deepti
var canPlaceFlowers = function(flowerbed, n) {
    let left;
    let right;

    if (n == 0)
        return true;

    for (let i = 0; i < flowerbed.length; i++){
        left = (i == 0) || (flowerbed[i - 1] == 0);
        right = (i = flowerbed.length - 1) || (flowerbed[i + 1] == 0);

        if (left && right && flowerbed[i] == 0)
            n -= 1;

        if (n == 0)
            return true;
    }

    return false;
};

let x = canPlaceFlowers([1, 0, 0, 0, 1], 1);