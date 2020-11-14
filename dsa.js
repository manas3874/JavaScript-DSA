// ! ***************************************************************************
// ! The code structure in this file
// * Topic name
// * Examples
// ! ***************************************************************************

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

// ! ***************************************************************************
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

// ! ***************************************************************************
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

// ! ***************************************************************************
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

// ! DEQUE
// ! Deque is a queue like structure which lets us add/remove elements from the front or the back

class Deque {
  constructor() {
    this._dataStore = [];
    this.length = 0;
  }
  addFront = () => {};
  removeFront = () => {};
  addBack = () => {};
  removeBack = () => {};
  print = () => {};
  //* other methods can be added as per the requirement
}
