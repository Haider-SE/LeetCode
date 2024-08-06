/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var left = nums.slice(0,n);
    var right = nums.slice(n);
    var answerArray = [];
    for(let i = 0; i<n; i++){
        answerArray.push(left[i]);
        answerArray.push(right[i]);
    }
    return answerArray;
};