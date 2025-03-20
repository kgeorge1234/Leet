/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
        if (!/^[A-Za-z0-9]$/.test(s.charAt(i))) {
            i++;
            continue;
        }

        if (!/^[A-Za-z0-9]$/.test(s.charAt(j))) {
            j--;
            continue;
        }

        if (s.charAt(i).toLowerCase() == s.charAt(j).toLowerCase()) {
            i++;
            j--;
        }
        else
            return false;

    }

    return true;
    
}; 

let x = isPalindrome("A man, a plan, a canal: Panam");
console.log(x);