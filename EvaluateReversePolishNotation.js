/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let first, second;

    for (let i = 0; i < tokens.length; i++){
        if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*" || tokens[i] == "/") {
            second = stack.pop();
            first = stack.pop();
            
            if (tokens[i] == "+")
                stack.push(first + second);
            else if (tokens[i] == "-")
                stack.push(first - second);
            else if (tokens[i] == "/")
                stack.push(Math.trunc(first / second));
            else 
                stack.push(first * second);
        }
        else
            stack.push(Number(tokens[i]));
    }

    return stack.pop();
};

let x = evalRPN(["4","13","5","/","+"]);
console.log(x);