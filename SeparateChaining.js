'use strict';

// 7. Write another hash map implementation as above, but use separate chaining as the collision resolution mechanism.
// Test your hash map with the same values from the lotr hash map.


// create a nodes class to be used for linked lists within the hashmap
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
};

class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > this.MAX_LOAD_RATIO) {
            this._resize(this._capacity * this.SIZE_RATIO)
        }

        const index = this._findSlot(key);
        // refactor set method to use nodes at each slot within the hash table
        let node = new _Node(value);

        if (this._hashTable[key]) {
            // assign current node to the next position
            node.next = this._hashTable[key];
        }
        // assign the the new node to the current position
        this._hashTable[key] = node;

    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            return index;
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;

        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }

        return hash >>> 0;
    }

};

const lotr = new HashMap();

const separateChaining = () => {
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
    
    return lotr;
}

console.log(separateChaining());