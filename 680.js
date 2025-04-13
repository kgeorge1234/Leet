/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;

    if(s.length <= 2)
        return true;
    
    while(left < right){
        if(s[left] == s[right]){
            left+=1;
            right-=1;
        }
        else{
            let leftNeglect = isPalindrome(s, left+1, right);
            let rightNeglect = isPalindrome(s, left, right-1);

            if(leftNeglect || rightNeglect)
                return true;
            else
                return false;
        }

    }
    return true;

    function isPalindrome(s, left, right){
        while(left < right){
            if(s[left] != s[right])
                return false;
            
            left++;
            right--;
        }
        return true;
    }
};

let x = validPalindrome("cbbcc");
console.log(x);