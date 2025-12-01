'use strict';

const sum = (...args) => {
  let result = 0;
  for (const value of args) {
    result += value;
  }
  return result;
};

console.log(sum(1, 2, 3));        
console.log(sum(0));              
console.log(sum());               
console.log(sum(1, -1, 1));       
console.log(sum(10, -1, -1, -1)); 