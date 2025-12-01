'use strict';

const pipe = (...fns) => {
  for (const f of fns) {
    if (typeof f !== 'function') {
      throw new Error('All arguments should be functions');
    }
  }

  return (x) => {
    return fns.reduce((value, func) => func(value), x);
  };
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));

const f2 = pipe(inc, inc);
console.log(f2(7));

try {
  const f3 = pipe(inc, 7, cube);
} catch (e) {
  console.log('Caught expected error:', e.message);
}