'use strict';

function inc(num) {
  num.n += 5;
}

const obj = { n: 15 };
inc(obj);

console.dir(obj);
