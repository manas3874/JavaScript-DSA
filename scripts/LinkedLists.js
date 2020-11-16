// ! ***********************************************************************************************************************
// ! LINKED LIST
// ! Linked list is a much better version of a list compared to arrays as arrays can be really inefficient
// ! LinkedLists have nodes, each node has some information and a LINK to the next node.

// * Node constructor
function Node(element) {
  this.element = element;
  this.next = null;
}

export class LinkedList {
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
  insertLast = (element) => {
    var newNode = new Node(element);
    ++this.length;
    var currentNode = this.head;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.next = null;
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
    return arr;
  };
}

var linked = new LinkedList();
linked.insertAfter("manas", "head");

linked.insertAfter("adya", "manas");
linked.insertAfter("saloni", "adya");
linked.insertLast("josh");
linked.insertAfter("punita", "saloni");
linked.insertAfter("ajai", "punita");
// console.log(linked.findPrevious("ajai"));
// linked.remove("manas");
// console.log(linked.print())

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

export class DLinkedList {
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

export class CircularLinkedList {
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

export class CircularDoublyLinkedList {
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
