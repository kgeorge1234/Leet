var abc = function (str) {
    let arr = new Array(26).fill(0);
    for (let s of str) {
        let val = s.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[val] = 1;
    }

    return arr;
}

let x = abc("abcd");
console.log(x);