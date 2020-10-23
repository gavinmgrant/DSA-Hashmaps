'use strict';

// 1. Create a HashMap class
// What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
// Answer: The values are Sauron and Frodo. The first values for these keys are not in the hashmap.
// There is no method in the HashMap class 'set' to handle a collision with 2 keys w/ the same key and diff values.
// What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
// Answer: 24, because the 'set' method triggered a resize to 3 (SIZE_RATIO) times the original capacity of 8.

const HashMap = require('./HashMap');

const main = () => {
    const lotr = new HashMap();
    lotr.MAX_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "TreeBeard");

    console.log("Maiar key: ", lotr.get("Maiar"));
    console.log("Hobbit key: ", lotr.get("Hobbit"));
    
    return lotr;
}

// console.log(main());

// 2. What is the output of the following code? explain your answer.
// Answer: It sets the value of the 'Hello World' key to 20 for map1 and 10 for map2.

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
};

// console.log(WhatDoesThisDo());

// 3. Demonstrate understanding of Hash maps

/*
1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 
into a hash map of length 11 using open addressing and a hash function k mod m, 
where k is the key and m is the length.

    keys                slots   bucket
    10 mod 11 = 1       0       22
    22 mod 11 = 0       1       10
    31 mod 11 = 9       2       88
    4 mod 11 = 3        3       4
    15 mod 11 = 4       4       15
    28 mod 11 = 6       5       59
    17 mod 11 = 6       6       28
    88 mod 11 = 0       7       17
    59 mod 11 = 4       8       null
                        9       31
                        10      null  
                        
2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 
into the hash map with collisions resolved by separate chaining. 
Let the hash table have a length m = 9, and let the hash function be k mod m.  

    keys                slots   bucket
    5 mod 9 = 4         0       null
    28 mod 9 = 1        1       28 -> 19 -> 10
    19 mod 9 = 1        2       20
    15 mod 9 = 6        3       12
    20 mod 9 = 2        4       5
    33 mod 9 = 6        5       null
    12 mod 9 = 3        6       15 -> 33
    17 mod 9 = 8        7       null
    10 mod 9 = 1        8       17
*/
 