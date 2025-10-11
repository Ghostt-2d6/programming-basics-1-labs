'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Function arguments must be numbers');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(5, 10));
console.log(random(10));

module.exports = { random };
