'use strict';

function generateKey(length, characters) {
  if (typeof length !== 'number' || length < 0) {
    throw new TypeError('Length must be a positive number');
  }
  if (typeof characters !== 'string' || characters.length === 0) {
    throw new TypeError('Characters must be a non-empty string');
  }

  let result = '';
  const charsLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsLength);
    result += characters[randomIndex];
  }

  return result;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(10, chars));
console.log(generateKey(16, chars));

module.exports = { generateKey };
