'use strict';

const contract = (fn, ...types) => {
  return (...args) => {
    const argTypes = types.slice(0, -1);
    const resultType = types[types.length - 1];

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const expectedType = argTypes[i];
      const name = expectedType.name.toLowerCase();

      if (typeof arg !== name) {
        throw new TypeError(`Argument at index ${i} expected to be ${name}, but got ${typeof arg}`);
      }
    }

    const result = fn(...args);
    const resultName = resultType.name.toLowerCase();
    if (typeof result !== resultName) {
      throw new TypeError(`Result expected to be ${resultName}, but got ${typeof result}`);
    }

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);

const res = addNumbers(2, 3);
console.log(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);

const res2 = concatStrings('Hello ', 'world!');
console.log(res2);