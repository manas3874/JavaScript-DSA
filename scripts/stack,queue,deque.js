// ! ***********************************************************************************************************************
// ! STACK
// * One of the most basic and fundamental datastructure. The stack works in LIFO manner and mimics a pile of books, stack of trays, or most importantly - The call stack

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
    if (this.length) {
      --this.top;
      --this.length;
      return this._dataStore.pop();
    } else {
      return null;
    }
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
  enQueue = (element) => {
    this._dataStore.push(element);
    ++this.length;
  };
  deQueue = () => {
    if (this.length) {
      --this.length;
      return this._dataStore.shift();
    } else {
      return null;
    }
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

// * This will still be a basic queue, with an array based datastore, but the dequeue function will be redefined which will dequeue based on the priority levels
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

export { Stack, Queue, PriorityQueue, Deque };
