/**
 * @param {Function[]} functions
 * @return {Function}
 */
//solution 1 (52ms)

var compose = function(functions) {    
    return function(x) {
        for(let i = functions.length - 1; i>=0; i--){
            x = functions[i](x)
        }
        return x;
    }
};

//solution 2 (42ms)
var compose = function(functions) {    
    return function(x) {
        functions.toReversed().map((func) => {
            x = func(x)
        })
        return x;
    }
};

  const fn = compose([x => x + 1, x => 2 * x])
  console.log(fn(4)) // 9
