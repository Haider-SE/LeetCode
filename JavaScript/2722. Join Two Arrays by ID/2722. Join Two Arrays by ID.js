// /**
//  * @param {Array} arr1
//  * @param {Array} arr2
//  * @return {Array}
//  */
// var join = function(arr1 = [{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}], arr2 = [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]) {

//     var concatedArray =  arr1.concat(arr2);
//     concatedArray.map((res, key) => {
//         arr2.map((ar2, k2) => {
//             ar2[k2] == res[key]
//         })
//         if(res[key] ===)
//     })

//     count = 1;
//     for(let i =0; )
//     return concatedArray.filter((x) => {
//         if(concatedArray[count-1].id === count){
//             return concatedArray[count-1].id === count++
//         }else{
//             count--
//         }
//     })
// };

// console.log(join())

// /**
//  * @param {string} s
//  * @return {number}
//  */
// var scoreOfString = function(s) {
//     var ans = 0;
//     s.map((x) => {
//        ans += x.charCodeAt(0)
//     })
//     for(let i = 0; i<=s.length; i++){
//         debugger;
//        ans += s.charCodeAt(i) - s.charCodeAt(i+1)
//     }

//     return ans
// };
// console.log(scoreOfString("hello"))

// /**
//  * @param {number[]} nums
//  * @param {number} val
//  * @return {number}
//  */
// var removeElement = function(nums, val) {
//     var ans = nums.filter((num) => {
//         return num !== val;
//     })
//     return ans
// };
// var myFUnc = removeElement;

// console.log(myFUnc([3,2,2,3], 3))
 
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var mod = 0;
  var palindromeCheck = 0;
  var original = x;
  while (x > 0) {
    mod = x % 10; // Get the last digit
    x = Math.floor(x / 10); // Remove the last digit
    palindromeCheck = palindromeCheck * 10 + mod; // Build the reversed number
  }
  return palindromeCheck === original;
};

console.log(isPalindrome(122));

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
   
   let prefix = strs[0];
   
   for (let i = 1; i < strs.length; i++) {
       while (strs[i].indexOf(prefix) !== 0) {
           prefix = prefix.substring(0, prefix.length - 1);
           if (prefix === "") return "";
       }
   }
   
   return prefix;
};
