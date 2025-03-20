/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let result = [];
    let peek;

    for (let i = 0; i < asteroids.length; i++){
        if (result.length == 0 || asteroids[i] > 0)
            result.push(asteroids[i]);
        else {
            while (true) {
                peek = result[result.length - 1];
                if (peek < 0) {
                    result.push(asteroids[i]);
                    break;
                }
                else if (peek == -asteroids[i]) {
                    result.pop();
                    break;
                }
                else if (peek > -asteroids[i]) {
                    break;
                }
                else {
                    result.pop();
                    if (result.length == 0) {
                        result.push(asteroids[i]);
                        break;
                    }
                }
                    
            }
        }
    }

    return result;
};

let x = asteroidCollision([-2,-1,1,2]);
console.log(x);