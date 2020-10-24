'use strict';

// 5. Any permutation a palindrome
// Write an algorithm to check whether any anagram of some string is a palindrome.
// Given some string, "acecarr", the algorithm should return true, because the letters in "acecarr" 
// can be rearranged to the anagram "racecar", which itself is a palindrome. 

const HashMap = require('./HashMap');

const palindrome = string => {
    // in case capital letters are inserted, make string all lowercase
    let str = string.toLowerCase();
    const hash = new HashMap();

    for (let i = 0; i < str.length; i++) {
        try {
            // if letter exists in hashmap, delete
            // the hashmap class cannot delete a key if it doesn't exist and throws an error
            hash.delete(str[i])
            console.log('delete: ', str[i]);
        }
        catch (error) {
            // if not, insert letter into hashmap
            // this catches the error and directs the function to insert the key into the hashmap
            hash.set(str[i]);
            console.log('set: ', str[i]);
        }
    }
    // string will be a palindrome if 1 or no letter are unique
    if (hash.length <= 1) {
        console.log(hash);
        return true;
    } else {
        console.log(hash);
        return false;
    }
};

console.log(palindrome('acecarr')) // true;
console.log(palindrome('north')) // false;