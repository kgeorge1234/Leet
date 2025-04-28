/**
 * @param {string} s
 * @return {boolean}
 */
//coding decoded
var isNumber = function(s) {
    if (s == null || s.trim() == "")
        return false;

    s = s.trim();
    let numberSeen = false;
    let decimalPointSeen = false;
    let exponentSeen = false;

    for (let i = 0; i < s.length; i++){
        switch (s[i]) {
            case ".":
                if (decimalPointSeen || exponentSeen)
                    return false;
                decimalPointSeen = true;
                break;
            
            case "+":
            case "-": 
                if (i != 0 && s[i - 1] != 'e' && s[i - 1] != 'E') {
                    return false;
                }
                numberSeen = false;
                break;
            
                
            case "E":
            case "e":{
                if (exponentSeen ||!numberSeen)
                    return false;
                numberSeen = false;
                exponentSeen = true;
                break;
            }
            
            default:
                if (s[i] >= '0' && s[i] <= '9') {
                    numberSeen = true;
                } else
                    return false;
        }
    }

    return numberSeen;
};

let x = isNumber("005047e+6");
console.log(x);