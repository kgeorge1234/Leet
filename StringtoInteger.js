var myAtoi = function (s) {
    let answer = 0;
    let j = 0;
    let sign = 1;

    while (s[j] == ' ')
        j++;

    if (s[j] == '-') {
        sign = -1;
        j++;
    }
    else if(s[j] == '+'){
        sign = 1;
        j++;
    }
        
    while (s[j] == '0')
        j++;

    while (j < s.length) {
        if (s[j] >= '0' && s[j] <= '9') {
            answer = answer * 10 + (s.charCodeAt(j) - '0'.charCodeAt(0));
        }
        else
            break;

        j++;
    }

    answer = answer * sign;

    if (answer > (Math.pow(2, 31) - 1))
        return Math.pow(2, 31) - 1;
    else if (answer < -Math.pow(2, 31))
        return -Math.pow(2, 31);
    else
        return answer;
    
};

console.log(myAtoi('  +023.4'));