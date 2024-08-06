/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    var maxValue = [];
    accounts.forEach((account, key) => {
        account.forEach((oneAccount) => {
            if(maxValue[key] == undefined){
                maxValue[key] = 0; 
            }
            maxValue[key] += oneAccount
        })
    })
    //one way
    var actualMaxValue = maxValue[0];
    for(let i = 0; i<maxValue.length; i++){
        if(maxValue[i] > actualMaxValue){
            actualMaxValue =  maxValue[i]
        }
    }
    return actualMaxValue;

    //2nd way
    // return maxValue.reduce((a,b) => Math.max(a,b), -Infinity)
};

console.log(maximumWealth([[1,2,3],[1,2,3]]))