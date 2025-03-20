/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    
    let graphMap = new Map();
    for (let i = 0; i < equations.length; i++){
        let quotient = values[i];
        let varA = equations[i][0];
        let varB = equations[i][1];

        if (!graphMap.get(varA))
            graphMap.set(varA, new Map());

        if (!graphMap.get(varB))
            graphMap.set(varB, new Map());

        graphMap.get(varA).set(varB, quotient);
        graphMap.get(varB).set(varA, 1 / quotient);

    }

    let result = [];

    for (let i = 0; i < queries.length; i++){
       result[i] =  compute(queries[i][0], queries[i][1], graphMap, new Set(), 1);
    }

    return result;


    function compute(queryVarA, queryVarB, graphMap, seen, product) {
        if (!graphMap.get(queryVarA))
            return -1;

        if (queryVarA == queryVarB)
            return product;

        seen.add(queryVarA);

        for (let [key, value] of graphMap.get(queryVarA)) {
            if (seen.has(key))
                continue;

            let val = compute(key, queryVarB, graphMap, seen, product * value);

            if (val != -1)
                return val;
        }

        return -1;
    }
};

let x = calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]);
console.log(x);