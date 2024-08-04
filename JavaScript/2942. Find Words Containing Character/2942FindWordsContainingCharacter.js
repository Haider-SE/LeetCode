/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    var answerArray = []
    answerArray.push(words.map((word, key) => {
        debugger;
        if(word.search(x) != -1){
            return key
        }
    }))
    return answerArray[0];
};

console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"))