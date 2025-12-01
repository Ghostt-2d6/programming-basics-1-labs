'use strict';

const seq = (f) => {
  const funcs = [f];
  const chain = (arg) => {
    if (typeof arg === 'number') {
      let result = arg;
      for (let i = funcs.length - 1; i >= 0; i--) {
        const func = funcs[i];
        result = func(result);
      }
      return result;
    } else {
      funcs.push(arg);
      return chain;
    }
  };

  return chain;
};

console.log(
  seq(x => x + 7)
     (x => x * 2)(5)
); 

console.log(
  seq(x => x * 2)
     (x => x + 7)(5)
); 

console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
); 
