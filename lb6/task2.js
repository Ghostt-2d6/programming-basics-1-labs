'use strict';

const compose = (...fns) => {
  const handlers = {};

  const composed = (x) => {
    if (fns.length === 0) return x;

    let result = x;

    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        result = fns[i](result);
      }
      return result;
    } catch (error) {
      if (handlers['error']) {
        handlers['error'](error);
      }
      return undefined;
    }
  };

  composed.on = (name, handler) => {
    if (name === 'error') {
      handlers.error = handler;
    }
  };

  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const die = x => { throw new Error('Boom!'); };

const f = compose(inc, twice);
console.log(f(5));

const fError = compose(inc, die, twice);

fError.on('error', e => {
  console.log('Error caught inside listener:', e.message);
});

console.log('Result:', fError(5));