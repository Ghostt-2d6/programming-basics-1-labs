'use strict';

function rangeOdd(start, end) {
    if (typeof start !== 'number' || typeof end !== 'number') {
        throw new TypeError('Function arguments must be numbers');
    }

    const result = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}

const oddNumbers = rangeOdd(15, 30);
console.log(oddNumbers);
