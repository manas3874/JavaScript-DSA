// ! HASH TABLES
// ! Hash table is a great datastructure which helps in creating/updating and retrieving data in constant time (best case) or linear time (worst case)
// ! This datastructure basically has indexing, and any element which has to be stored in the hash table will go through a hashing function which will give the appropriate index to store the element
// ! while retrieving the element, the same hashing function is used to hit the index position accurately.
// ! The element can be any data-structure, can be a reference to an object, linkedlist, dictionary, etc.
// ! Collisions are bound to happen, and there are multiple ways to handle a collision while making a HASH TABLE

import { LinkedList } from "./LinkedLists.js";
import { timer } from "./timer.js";
export class HashTable {
  constructor() {
    this.table = new Array(137); // usually a prime number is taken as the length of the array, since it helps with the most used modular hash functions
  }
  // ! This hash function will be used to determine the location of data in our array
  simpleHash = (key) => {
    // ! this hash function is for string keys.
    var total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i); // ! summing all the ascii values of the string key
    }
    return total % this.table.length;
  };
  // ! Separate Chaining is a way to resolve collision
  // ! This will build arrays/linked lists as data-holders for all the key locations
  buildChains = () => {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] = new LinkedList();
    }
  };
  put = (key, data) => {
    var position = this.simpleHash(key);
    this.table[position].insertLast(data);
  };

  // ! get function is designed to get the exact element from the linked lists
  get = (key) => {
    var hashKey = this.simpleHash(key);
    var currentElement = this.table[hashKey].head;
    for (let i = 0; i < this.table[hashKey].length; i++) {
      if (currentElement.element.name != key) {
        currentElement = currentElement.next;
      }
    }
    return currentElement.element;
  };

  printDistribution = () => {
    var distro = {};
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i].head.next != null) {
        distro[i] = this.table[i].print();
      }
    }
    return distro;
  };
}

// ! college information constructor
function information(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

var hash = new HashTable();
hash.buildChains();
hash.put("manas", new information("manas", 22, 96));
hash.put("john", new information("john", 32, 76));
hash.put("josh", new information("josh", 25, 88));
hash.put("pixcy", new information("pixcy", 62, 42));
hash.put("Clayton", new information("Clayton", 32, 92));
hash.put("Raymond", new information("Raymond", 27, 71));
hash.put("walter", new information("walter", 47, 81));

timer(() => console.log(hash.printDistribution()));
// console.log(hash.simpleHash("manas"));
// console.log(hash.get("john"));
// console.log(hash.get("Clayton"));
// console.log(hash.get("Raymond"));
