/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let q1 = [];
    let q2 = [];
    let n = senate.length;

    for (let i = 0; i < senate.length; i++){
        if (senate[i] == 'R')
            q1.push(i);
        else
            q2.push(i);
    }

    while (q1.length != 0 && q2.length != 0) {
        if (q1[0] < q2[0]) {
            q1.push(q1[0] + n);
            q1.shift();
            q2.shift();
        }
        else {
            q2.push(q2[0] + n);
            q1.shift();
            q2.shift();
        }
    }

    if (q1.length == 0)
        return "Dire";
    else
        return "Radiant";
};

let x = predictPartyVictory("RRDRD");
console.log(x);