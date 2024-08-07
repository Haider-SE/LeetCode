
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let count = 0;
    if (count == 1) {
      return undefined;
    }
    return function (...args) {
      if (count == 0) {
        count++;
        const ans = fn(...args);
        return ans;
      }
    };
  };
  
  let fn = (a, b, c) => {
    return a * b * c;
  };
  let onceFn = once(fn);
  [],[2,3,6],[4,6,8]
  console.log(onceFn(5,7,4)); // 6
  console.log(onceFn(2,3,6)); // returns undefined without calling fn
  console.log(onceFn(4,6,8)); // returns undefined without calling fn