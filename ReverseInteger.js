var reverse = function(x) {
    
    let pop = 0;
    let reverse = 0;

    while (x != 0) {
        pop = x % 10;
        x = Math.trunc(x / 10);

        if ((reverse < -Math.pow(2, 31) / 10 || reverse == -Math.pow(2, 31) / 10 && pop < -8))
            return 0;
        if ((reverse > (Math.pow(2, 31) - 1 )/ 10 || reverse == (Math.pow(2, 31)-1) / 10 && pop > 7))
            return 0;
        
        reverse = reverse * 10 + pop;
        
    }

    return reverse;
};

console.log(reverse(-123));