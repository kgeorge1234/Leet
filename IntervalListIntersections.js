/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
//coding decoded
var intervalIntersection = function(firstList, secondList) {
    let result = [];
    let i =0;
    let j=0;

    while(i<firstList.length && j<secondList.length){
        let firstStart = firstList[i][0];
        let firstEnd = firstList[i][1];
        let secondStart = secondList[j][0];
        let secondEnd = secondList[j][1];

        if(firstEnd < secondStart)
            i++;
        else if(secondEnd < firstStart)
            j++;
        else{
            result.push([Math.max(firstStart,secondStart), Math.min(firstEnd,secondEnd)]);

            if(firstEnd < secondEnd)
                i++;
            else
                j++;
        }
    }

    return result;
};