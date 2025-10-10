'use strict';

const data = [
  true, 'hello world', 13, 122, -200, false, false, 'effect', 3.14,
  'JavaScript', null, undefined, { x: 9 }, [1, 2, 3]
];

const typesCount = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0
};

for (const item of data) {
  const type = typeof item;
  if (typesCount[type] !== undefined) {
    typesCount[type] += 1;
  }
}

console.dir(typesCount);

const dynamicCount = {};

for (const item of data) {
  const type = typeof item;
  if (dynamicCount[type] === undefined) {
    dynamicCount[type] = 1;
  } else {
    dynamicCount[type] += 1;
  }
}

console.dir(dynamicCount);
