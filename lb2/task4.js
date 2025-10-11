'use strict';

function range(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new TypeError('Function arguments must be numbers');
    }

    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(15, 30));

