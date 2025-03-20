/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

    let smallestLength = Math.min(str1.length, str2.length);
    let smallestString = "";
    let biggestString = ""

    if (str1.length < str2.length) {
        smallestString = str1;
        biggestString = str2;
    }
    else {
        smallestString = str2;
        biggestString = str1;
    }
        
    let temp1 = "";
    let temp2 = "";
    let smallQuotient;
    let bigQuotient
    let count;

    for (let i = smallestLength; i >= 0; i--){
        if (isDivisor(i)) {
            smallQuotient = smallestString.length / i;
            count = 0;
            temp1 = "";
            temp2 = "";

            while (count < smallQuotient) {
                temp1 = temp1 + smallestString.substring(0, i);
                count++;
            }

            bigQuotient = biggestString.length / i;
            count = 0;

            while (count < bigQuotient) {
                temp2 = temp2 + smallestString.substring(0, i);
                count++;
           }
            
            if (temp1 === smallestString && temp2 === biggestString)
                return smallestString.substring(0, i);
        }   
    }

    return "";

    function isDivisor(i) {
        if (str1.length % i == 0 && str2.length % i == 0)
            return true;
    }
};

let x = gcdOfStrings("LEET", "CODE");
console.log(x);