/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0;
    let bit;


    for (let i = 0; i < 32; i++){
        bit = (n >> i) & 1;
        res = res | (bit << (31 - i));
    }

    return res >>> 0;
};

let x = reverseBits(0b00000010100101000001111010011100);
console.log(x);