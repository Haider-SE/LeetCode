/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
    arr.forEach((ar, key) => {fn(ar,key) && newArr.push(ar)})
    return newArr;
};