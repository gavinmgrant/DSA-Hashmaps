'use strict';

// 6. Anagram grouping
// Write an algorithm to group a list of words into anagrams. 
// For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'],
// the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].

const HashMap = require('./HashMap');

const anagramGrouping = array => {
    const hash = new HashMap();
    let results = [];

    array.forEach(word => {
        // sort each word, so we can identify the same words to group
        let alphabetized = word.split('').sort().join('');
        console.log(alphabetized);
        try {
            // get the index value of the alphabetized word/key in the hashmap
            // this index will be unique for each matching word
            // insert word into group of words with the same letters
            let index = hash.get(alphabetized);
            results[index].push(word);
            console.log('try: ' + index);
        }
        catch (error) {
            // insert alphabetized word into hashmap
            // if a unique set of letters, create a new array within the results array
            hash.set(alphabetized, results.length);
            results.push([word]);
            console.log('catch: ' + [word]);
        }
    });

    return results;
};

const input = ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'];
console.log(anagramGrouping(input));