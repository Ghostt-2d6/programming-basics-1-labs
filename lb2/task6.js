'use strict';

function average(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Function arguments must be numbers');
    }
    return (a + b) / 2;
}

function square(x) {
    if (typeof x !== 'number') throw new TypeError('Function argument must be number');
    return x * x;
}

function cube(x) {
    if (typeof x !== 'number') throw new TypeError('Function argument must be number');
    return x * x * x;
}

function calculate() {
    const results = [];
    for (let i = 0; i <= 9; i++) {
        const sq = square(i);
        const cb = cube(i);
        const avg = average(sq, cb);
        results.push(avg);
    }
    return results;
}

console.log(calculate());
