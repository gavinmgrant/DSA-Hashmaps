'use strict';

// 4. Remove duplicates
// Implement a function to delete all duplicated characters in a string and keep only the first occurrence 
// of each character. For example, if the input is string “google”, the result after deletion is “gole”. 
// Test your program with a sentence as well such as "google all that you think can think of".

const HashMap = require('./HashMap');

const removeDuplicates = string => {
    const newMap = new HashMap();
    newMap.MAX_LOAD_RATIO = 0.5;
    newMap.SIZE_RATIO = 3;

    for (let i = 0; i < string.length; i++) {
        newMap.set(string[i]);
    }

    let newString = '';
    newMap._hashTable.forEach(letter => {
        newString += letter.key;
    });

    return newString;
};

console.log(removeDuplicates('google'));
console.log(removeDuplicates('google all that you think can think of'));