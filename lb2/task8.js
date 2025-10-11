'use strict';

function createUser(name, city) {
    if (typeof name !== 'string' || typeof city !== 'string') {
        throw new TypeError('Function arguments must be strings');
    }

    return { name, city };
}

const user = createUser('Zazulia Viktor', 'Kyiv');
console.log(user);
