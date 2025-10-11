'use strict';

const phoneBookArray = [
    { name: 'Zazulia Viktor', phone: '+380445554433' },
    { name: 'Volodymyr Zelensky', phone: '+380667778899' },
    { name: 'Donald Trumpenko', phone: '+380991112233' },
];

function findPhoneByNameArray(name) {
    if (typeof name !== 'string') {
        throw new TypeError('Function argument must be string');
    }

        for (let i = 0; i < phoneBookArray.length; i++) {
            if (phoneBookArray[i].name === name) {
                return phoneBookArray[i].phone;
            }
        }
    return 'Phone number not found';
}

console.log(findPhoneByNameArray('Zazulia Viktor'));
console.log(findPhoneByNameArray('Leonardo da Vinci'));


const phoneBookHash = {
    'Marcus Aurelius': '+380445554433',
    'Seneca': '+380667778899',
    'Plato': '+380991112233',
};

function findPhoneByNameHash(name) {
    if (typeof name !== 'string') {
        throw new TypeError('Function argument must be string');
    }

    return phoneBookHash[name] || 'Phone number not found';
}

console.log(findPhoneByNameHash('Plato'));
console.log(findPhoneByNameHash('Aristotle'));
