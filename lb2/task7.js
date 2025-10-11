'use strict';

const fn = () => {
    const constObj = { name: 'Alice' };
    let varObj = { name: 'Bob' };

    constObj.name = 'Charlie';
    varObj.name = 'David';

    // constObj = { name: 'Eve' }; // Doesn't work
    varObj = { name: 'Eve' };      // Works

    return { constObj, varObj };
};

// Explanation:
// ConstObj не можна переназначити на інший об'єкт, але можна змінити поля об'єкта.
// VarObj можна переназначити на інший об'єкт, а також можна змінити поля об'єкта.

// Спроба зробити ConstObj = { ... } викличе помилку TypeError 
// у строгому режимі ('use strict';).