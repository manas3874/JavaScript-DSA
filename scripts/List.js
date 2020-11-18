// ! ***********************************************************************************************************************
// ! List
// * The list is a basic datastructure found in any programming language. The numebr of elements in a list determines the length of a list. We can perform multiple tasks like add, remove, read, insert, print, check within the list, etc.

// ! implementation of a List in JavaScript
export class List {
  // ? List has 2 properties, length and position, _dataStore is an array to store our data
  constructor() {
    this._dataStore = [];
    this.length = 0;
    this.position = 0;
  }
  // ? clears all the contents of the list
  clear = () => {
    this._dataStore = [];
    this.length = 0;
    this.position = 0;
  };
  // ? console logs the contents of our list
  print = () => {
    console.log(this._dataStore);
  };
  // ? Returns the element at a specific requested position, returns "not found" if position is empty
  getElement = (position) => {
    if (this._dataStore[position] == undefined) {
      return "not found";
    } else {
      this.position = position;
      return this._dataStore[position];
    }
  };
  // ? add an element at the end of a List
  append = (element) => {
    this._dataStore[this.length] = element;
    this.length += 1;
    return element;
  };
  // ? Remove an element from a specific position in a list
  remove = (position) => {
    var removedElement = this._dataStore[position];
    let arr = [
      ...this._dataStore.slice(0, position),
      ...this._dataStore.slice(position + 1, this.length),
    ];
    this._dataStore = arr;
    this.length -= 1;
    return removedElement;
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


