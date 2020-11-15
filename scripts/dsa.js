// ! ***********************************************************************************************************************
// ! The code structure in this file
// * Topic name
// * Examples and implementations
// ! ***********************************************************************************************************************
// ! CONTENTS
// * 1. RECURSION
// * 2. LIST
// * 3. STACK
// * 4. QUEUE
// * 5. PRIORITY QUEUE
// * 6. DEQUE
// * 7. LINKED LIST
// * 8. DOUBLY LINKED LIST
// * 9. CIRCULAR SINGLY LINKED LIST
// * 10. CIRCULAR DOUBLY LINKED LIST
// * 11. SETS
// ! ***********************************************************************************************************************
// ! Recursion
// * The  function calls itself within the definition. The function MUST have a base condition to avoid an infinite loop. The function goes through backtracking after the final/base condition is fulfilled

// ! Factorial using recursion
factorial = (num) => {
  if (num == 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};
// console.log(factorial(5));

// ! ***********************************************************************************************************************
// ! List
// * The list is a basic datastructure found in any programming language. The numebr of elements in a list determines the length of a list. We can perform multiple tasks like add, remove, read, insert, print, check within the list, etc.

// ! implementation of a List in JavaScript
class List {
  // ? List has 2 properties, length and position, _dataStore is an array to store our data
  constructor() {
    (this.length = 0), (this.position = 0), (this._dataStore = []);
  }
  // ? clears all the contents of the list
  clear = () => {
    this._dataStore = [];
    this.length = 0;
    this.position = 0;
  };
  // ? console logs the contents of our list
  print = () => {
    console.log(...this._dataStore);
  };
  // ? Returns the element at a specific requested position, returns "not found" if position is empty
  getElement = (position) => {
    if (this._dataStore[position] == undefined) {
      console.warn("not found");
    } else {
      this.position = position;
      return this._dataStore[position];
    }
  };
  // ? add an element at the end of a List
  append = (element) => {
    this._dataStore[this.length] = element;
    this.length += 1;
    return "element added";
  };
  // ? Remove an element from a specific position in a list
  remove = (position) => {
    let arr = [
      ...this._dataStore.slice(0, position),
      ...this._dataStore.slice(position + 1, this.length),
    ];
    this._dataStore = arr;
    this.length -= 1;
    return "element removed";
  };
  // ? Insert an element at any position (not beyond bounds) in the list
  insert = (element, position) => {
    if (!this._dataStore[position]) {
      this._dataStore.splice(position, 0, element);
      this.length += 1;
      return `element${element} inserted at ${position}`;
    } else {
      console.warn("cannot insert beyond bounds of existing list");
    }
  };
  // ? Shows the front of a list (first element)
  front = () => {
    // console.log(this._dataStore[0]);
    return this._dataStore[0];
  };
  // ? Shows the front of a list (first element)
  end = () => {
    // console.log(this._dataStore[this.length - 1]);
    return this._dataStore[this.length - 1];
  };
  // ? Returns the element at previous position
  previous = () => {
    if (this.position == 0) {
      console.warn("first element reached");
    } else {
      this.position -= 1;
      return this._dataStore[this.position];
    }
  };
  // ? Returns the element at next position
  next = () => {
    if (this.position == this.length - 1) {
      console.warn("Last element reached");
    } else {
      this.position += 1;
      return this._dataStore[this.position];
    }
  };
  // ? Move the current position within bounds
  movePosition = (position) => {
    -1 < position && position < this.length - 1
      ? (this.position = position)
      : console.warn("list does not have this position");
  };
}

var groceries = new List();

// ! ***********************************************************************************************************************
// ! STACK
// * One of the most basic and fundamental datastructure. The stack works in LIFO manner and mimics a pile of books, stack of trays, or most importantly - the call stack

// ! Implementation of a stack

class Stack {
  constructor() {
    this._dataStore = [];
    this.top = 0;
    this.length = 0;
  }
  push = (element) => {
    this._dataStore.push(element);
    ++this.length;
    ++this.top;
  };
  pop = () => {
    --this.top;
    --this.length;
    return this._dataStore.pop();
  };
  peek = () => {
    if (this.length) {
      console.log(this._dataStore[this.top - 1]);
    }
  };
  clear = () => {
    this._dataStore = [];
    this.length = 0;
    this.top = 0;
  };
}

let books = new Stack();

// ! ***********************************************************************************************************************
// ! QUEUE
// * QUEUE is another most important datastructure. This works on a FIFO model. Basically like a queue at a grocery store during the lockdown.

class Queue {
  constructor() {
    this._dataStore = [];
    this.length = 0;
  }
  enqueue = (element) => {
    this._dataStore.push(element);
    ++this.length;
  };
  dequeue = () => {
    --this.length;
    return this._dataStore.shift();
  };
  print = () => {
    console.log(this._dataStore);
  };
  clear = () => {
    this._dataStore = [];
    this.length = 0;
  };
  front = () => {
    return this._dataStore[0];
  };
  back = () => {
    return this._dataStore[this.length - 1];
  };
  isEmpty = () => {
    return this.length ? false : true;
  };
}

let bank = new Queue();

// ! ***********************************************************************************************************************
// ! Priority Queue
// ! The elements of a queue will also have a priority state. Higher priority elements will be dequeued earlier. However, the elements of the same priority state will be dequeued on the basis of FIFO

// * Here we will take an example of a hospital Emergency ward, where the patients are given a priority state based on their seriousness

// * Simple person constructor
function Patient(name, priority) {
  this.name = name;
  this.priority = priority;
}

// * This will still be a basic queue, with an array based datastore, but the dequeue function will be redefined which will dequeue based on teh priority levels
class PriorityQueue {
  constructor() {
    this._dataStore = [];
    this.length = 0;
  }
  enqueue = (element) => {
    this._dataStore.push(element);
    ++this.length;
  };
  dequeue = () => {
    var topPriority = this._dataStore[0].priority;
    var patient = 0;
    for (let i = 1; i < this._dataStore.length; i++) {
      if (this._dataStore[i].priority > topPriority) {
        topPriority = this._dataStore[i].priority;
        patient = i;
      }
    }
    return this._dataStore.splice(patient, 1);
  };
  print = () => {
    console.log(this._dataStore);
  };
}

var hospital = new PriorityQueue();
hospital.enqueue(new Patient("manas", 3));
hospital.enqueue(new Patient("jack", 1));
hospital.enqueue(new Patient("john", 2));
hospital.enqueue(new Patient("jacob", 3));
hospital.enqueue(new Patient("mack", 1));
hospital.enqueue(new Patient("josh", 1));
hospital.enqueue(new Patient("jimmy", 3));
hospital.enqueue(new Patient("carl", 2));
// hospital.print();

// ! ***********************************************************************************************************************
// ! DEQUE
// ! Deque is a queue like structure which lets us add/remove elements from the front or the back

class Deque {
  constructor() {
    this._dataStore = [];
    this.length = 0;
  }
  addFront = (element) => {
    this._dataStore.unshift(element);
    ++this.length;
  };
  removeFront = () => {
    --this.length;
    return this._dataStore.shift();
  };
  addBack = (element) => {
    this._dataStore.push(element);
    ++this.length;
  };
  removeBack = () => {
    --this.length;
    return this._dataStore.pop();
  };
  print = () => {
    console.log(this._dataStore);
  };
  //* other methods can be added as per the requirement
}

var dequeExample = new Deque();

// ! ***********************************************************************************************************************
// ! LINKED LIST
// ! Linked list is a much better version of a list compared to arrays as arrays can be really inefficient
// ! LinkedLists have nodes, each node has some information and a LINK to the next node.

// * Node constructor
function Node(element) {
  this.element = element;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
    this.length = 0;
  }
  find = (item) => {
    var currentNode = this.head;
    while (currentNode.element != item) {
      currentNode = currentNode.next;
      if (currentNode == null) {
        break;
      }
    }
    if (currentNode != null) {
      return currentNode;
    } else {
      console.warn("element not found");
    }
  };
  insertAfter = (newElement, afterItem) => {
    ++this.length;
    var newNode = new Node(newElement);
    var afterNode = this.find(afterItem);
    newNode.next = afterNode.next;
    afterNode.next = newNode;
  };
  findPrevious = (item) => {
    var currentNode = this.head;

    while (currentNode.next != null && currentNode.next.element != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  remove = (item) => {
    var previousNode = this.findPrevious(item);

    // * method 1
    // var nodeToRemove = this.find(item);
    // previousNode.next = nodeToRemove.next;

    // * method 2
    previousNode.next = previousNode.next.next;
    --this.length;
  };
  print = () => {
    var currentNode = this.head;
    var arr = [];
    while (currentNode.next != null) {
      arr.push(currentNode.element);
      currentNode = currentNode.next;
    }
    // * adding the final element which was neglected by the while loop
    arr.push(currentNode.element);
    console.log(arr);
  };
}

var linked = new LinkedList();
linked.insertAfter("manas", "head");
linked.insertAfter("adya", "manas");
linked.insertAfter("saloni", "adya");
linked.insertAfter("punita", "saloni");
linked.insertAfter("ajai", "punita");
// console.log(linked.findPrevious("ajai"));
// linked.remove("manas");
// linked.print();

// ! ***********************************************************************************************************************
// ! DOUBLY LINKED LIST
// ! Doubly linked list is a datastructure in which each node has has some information, a reference to the previous node and a reference to the next node.
// ! Singly linked list allows us to traverse from the head to tail easily but reverse traversal is difficult and resource heavy.. for such situations, we may use doubly linked list

// * Constructor to make a DLinkedList node
function DNode(element) {
  this.element = element;
  this.prev = null;
  this.next = null;
}

class DLinkedList {
  constructor() {
    this.head = new DNode("head");
    this.length = 0;
  }

  // * Same find() function as the SinglyLinkedList
  find = (item) => {
    var currentNode = this.head;
    while (currentNode.element != item) {
      currentNode = currentNode.next;
      if (currentNode == null) {
        break;
      }
    }
    if (currentNode != null) {
      return currentNode;
    } else {
      console.warn("element not found");
    }
  };

  findLast = () => {
    var currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  insertAfter = (element, prevItem) => {
    var newNode = new DNode(element);
    var prevNode = this.find(prevItem);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
  };

  reverse = () => {
    var currentNode = this.findLast();
    var arr = [];
    while (currentNode.prev != null) {
      arr.push(currentNode.element);
      currentNode = currentNode.prev;
    }
    arr.push(currentNode.element);
    console.log(arr);
  };
  remove = (element) => {
    var nodeToRemove = this.find(element);

    // * setting the next element of previous node
    nodeToRemove.prev.next = nodeToRemove.next;

    // * setting the previous element of next node
    nodeToRemove.next.prev = nodeToRemove.prev;

    // * removing the pointers of removed node
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
  };
  print = () => {
    var currentNode = this.head;
    var arr = [];
    while (currentNode.next != null) {
      arr.push(currentNode.element);
      currentNode = currentNode.next;
    }
    // * adding the final element which was neglected by the while loop
    arr.push(currentNode.element);
    console.log(arr);
  };
}

var DL = new DLinkedList();
DL.insertAfter("manas", "head");
DL.insertAfter("adya", "manas");
DL.insertAfter("saloni", "adya");
// DL.remove("manas")
// console.log(DL.findLast());
// DL.print();
// DL.reverse();

// ! ***********************************************************************************************************************
// ! CIRCULAR LINKED LIST
// ! Doubly linked list solves the problem of reverse traversal, but it is still a single ordered traversal.
// ! Circular linked list helps us to loop through the list once the last element is reached. Basically, the last element does not point to null, instead it points to the head element

function CNode(element) {
  this.element = element;
  this.next = null;
}

class CircularLinkedList {
  constructor() {
    this.head = new CNode("head");
    this.head.next = this.head;
  }
  find = (item) => {
    var currentNode = this.head;
    while (currentNode.element != item) {
      currentNode = currentNode.next;
      if (currentNode == null) {
        break;
      }
    }
    if (currentNode != null) {
      return currentNode;
    } else {
      console.warn("element not found");
    }
  };
  insertAfter = (newElement, afterItem) => {
    ++this.length;
    var newNode = new Node(newElement);
    var afterNode = this.find(afterItem);
    newNode.next = afterNode.next;
    afterNode.next = newNode;
  };
  findPrevious = (item) => {
    var currentNode = this.head;

    while (currentNode.next != null && currentNode.next.element != item) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  remove = (item) => {
    var previousNode = this.findPrevious(item);

    // * method 1
    // var nodeToRemove = this.find(item);
    // previousNode.next = nodeToRemove.next;

    // * method 2
    previousNode.next = previousNode.next.next;
    --this.length;
  };
  print = () => {
    var currentNode = this.head;
    var arr = [];
    while (currentNode.next != this.head) {
      arr.push(currentNode.element);
      currentNode = currentNode.next;
    }
    // * adding the final element which was neglected by the while loop
    arr.push(currentNode.element);
    console.log(arr);
  };
}

var cList = new CircularLinkedList();
cList.insertAfter("manas", "head");
cList.insertAfter("adya", "manas");
cList.insertAfter("saloni", "adya");
cList.insertAfter("punita", "saloni");
// cList.print();

// ! ***********************************************************************************************************************
// ! CIRCULAR DOUBLY LINKED LIST
// ! The most useful and most efficient of the linkedLists is the circular doubly linked list

function CDNode(element) {
  this.element = element;
  this.next = null;
  this.prev = null;
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = new CDNode("head");
    this.head.next = this.head;
    this.head.prev = this.head;
    this.length = 0;
  }
  // * Same find() function as the SinglyLinkedList
  find = (item) => {
    var currentNode = this.head;
    while (currentNode.element != item) {
      currentNode = currentNode.next;
      if (currentNode == null) {
        break;
      }
    }
    if (currentNode != null) {
      return currentNode;
    } else {
      console.warn("element not found");
    }
  };

  findLast = () => {
    var currentNode = this.head;
    while (currentNode.next != this.head) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };
  insertAfter = (element, prevItem) => {
    var newNode = new DNode(element);
    var prevNode = this.find(prevItem);
    newNode.next = prevNode.next;
    newNode.prev = prevNode;
    prevNode.next = newNode;
    ++this.length;
    if (this.length >= 1) {
      this.head.prev = this.findLast();
    }
  };

  reverse = () => {
    var currentNode = this.findLast();
    var arr = [];
    while (currentNode.prev != null) {
      arr.push(currentNode.element);
      currentNode = currentNode.prev;
    }
    arr.push(currentNode.element);
    console.log(arr);
  };
  remove = (element) => {
    var nodeToRemove = this.find(element);

    // * setting the next element of previous node
    nodeToRemove.prev.next = nodeToRemove.next;

    // * setting the previous element of next node
    nodeToRemove.next.prev = nodeToRemove.prev;

    // * removing the pointers of removed node
    nodeToRemove.next = null;
    nodeToRemove.prev = null;
  };
  print = () => {
    var currentNode = this.head;
    var arr = [];
    while (currentNode.next != this.head) {
      arr.push(currentNode.element);
      currentNode = currentNode.next;
    }
    // * adding the final element which was neglected by the while loop
    arr.push(currentNode.element);
    console.log(arr);
  };

  // ! Page no 86, question 1
  // ! implement an advance function, which takes an argument n, and advances the current node by n steps

  // ! this can also act like finding element using index
  advance = (steps) => {
    var currentNode = this.head;
    if (steps > 0) {
      while (steps > 0) {
        currentNode = currentNode.next;
        --steps;
      }
      return currentNode;
    } else {
      return currentNode; // head without advancing
    }
  };

  advanceFrom = (startingNode, steps) => {
    var currentNode = this.find(startingNode);
    if (steps > 0) {
      while (steps > 0) {
        currentNode = currentNode.next;
        --steps;
      }
      return currentNode;
    } else {
      return currentNode; // startingNode without advancing
    }
  };

  // ! Similarly we can implement back() and backFrom() methods
}

var cdll = new CircularDoublyLinkedList();
cdll.insertAfter("manas", "head");
cdll.insertAfter("adya", "manas");
cdll.insertAfter("saloni", "adya");
cdll.insertAfter("ajai", "saloni");
// cdll.print();
// console.log(cdll.advance(3));
// console.log(cdll.advanceFrom("manas", 2));

// ! ***********************************************************************************************************************
// ! SETS
// ! Set is a mathematical property/ a group of items with no repetitions
// ! ES6 gives us the Set object but we can implement our own with the most important union, intersection and difference methods

class Set {
  constructor() {
    this.items = {};
  }
  length = () => {
    return Object.keys(this.items).length;
  };
  has = (item) => {
    return item in this.items;
  };

  add = (item) => {
    if (!this.has(item)) {
      this.items[item] = item;
      return true;
    }
    return false;
  };
  delete = (item) => {
    if (this.has(item)) {
      delete this.items[item];
      return true;
    }
    return false;
  };
  clear = () => {
    this.items = {};
  };
  print = () => {
    var arr = [];
    for (let item in this.items) {
      arr.push(item);
    }
    console.log(arr);
  };

  // ! This method gives us the union of two sets WITH repetition
  // ! This method is used later in union/intersection methods accordingly
  __unionSetArr = (set) => {
    var arrOfArgument = [];
    for (let item in set.items) {
      arrOfArgument.push(item);
    }
    var arrOfLocal = [];
    for (let item in this.items) {
      arrOfLocal.push(item);
    }
    var unionArr = [...arrOfLocal, ...arrOfArgument];

    return unionArr;
  };

  // ! This method gives the union of two sets
  // ! The keys of the object are returned as an array
  union = (set) => {
    var unionSet = {};
    var unionArr = this.__unionSetArr(set);
    for (let item of unionArr) {
      if (!(item in unionSet)) {
        unionSet[item] = item;
      } else {
        continue;
      }
    }
    return Object.keys(unionSet);
  };
  // ! This method gives the intersection of two arrays
  // ! takes an optional argument which is set to false by default. This argument, when set to true, will give us the difference of two sets, which is passed to the difference method
  intersection = (set, diff = false) => {
    var unionArr = this.__unionSetArr(set);
    var intersectionSet = {};
    for (let item of unionArr) {
      if (item in intersectionSet) {
        intersectionSet[item] += 1;
      } else {
        intersectionSet[item] = 1;
      }
    }

    if (!diff) {
      // ! will return the intersection array
      var intersectionArr = [];
      for (let item in intersectionSet) {
        if (intersectionSet[item] > 1) {
          intersectionArr.push(item);
        }
      }
      return intersectionArr;
    } else {
      //! will return the difference array
      var differenceArr = [];
      for (let item in intersectionSet) {
        if (intersectionSet[item] == 1) {
          differenceArr.push(item);
        }
      }
      return differenceArr;
    }
  };

  difference = (set) => {
    return this.intersection(set, true);
  };

  // ! this method will consider the argument as the parent set to check for a subset
  isSubsetOf = (set) => {
    var localItems = Object.keys(this.items);
    for (let item of localItems) {
      if (!(item in set.items)) {
        return false;
      }
    }
    return true;
  };
}

var set1 = new Set();
var set2 = new Set();
var set3 = new Set();
var set4 = new Set();
set1.add(1);
set1.add(2);
set1.add(3);
set1.add(6);
set1.add(8);

set2.add(4);
set2.add(5);
set2.add(6);
set2.add(7);
set2.add(8);

set3.add(1);
set3.add(2);
set3.add(3);

set4.add(1);
set4.add(2);
set4.add(3);
set4.add(4);
set4.add(5);
// set1.print();
// set2.print();
// console.log(set1.union(set2));
// console.log(set1.intersection(set2));
// console.log(set1.difference(set2));


