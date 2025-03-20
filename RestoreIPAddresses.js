/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let addresses = [];
    backtrackdfs(s, 0, [], addresses);
    return addresses;

    function backtrackdfs(s, i, address, addresses) {
        if (address.length == 4) {
            if (i == s.length)
                addresses.push(address.join("."));
        }
        else {
            let num;
            
            if (s[i] === "0") {
                address.push(s[i]);
                backtrackdfs(s, i+1, address, addresses);
                address.pop();
            }
            else {
                for (let j = i + 1; j <= i + 3; j++){
                    num = parseInt(s.substring(i, j));
                    if (num <= 255) {
                        address.push(s.substring(i, j));
                        backtrackdfs(s, j, address, addresses);
                        address.pop();
                    }
                }
                
            }
        }
    }
};


let x = restoreIpAddresses("101023");
console.log(x);