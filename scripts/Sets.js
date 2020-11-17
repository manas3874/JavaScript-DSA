// ! ***********************************************************************************************************************
// ! SETS
// ! Set is a mathematical property/ a group of items with no repetitions
// ! ES6 gives us the Set object but we can implement our own with the most important union, intersection and difference methods
import { timer } from "./timer.js";
export class Set {
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

  remove = (item) => {
    delete this.items[item];
  };
}

var set1 = new Set();
var set2 = new Set();
var set3 = new Set();
var set4 = new Set();
var set5 = new Set();
var set6 = new Set();
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

set5.add("one");
set5.add("two");
set5.add("three");

set6.add("zero");
set6.add("one");
set6.add("two");
set6.add("three");
set6.add("four");
// set1.print();
// set2.print();
// console.log(set1.union(set2));
// console.log(set1.intersection(set2));
// console.log(set1.difference(set2));

// * works with strings as well
// set5.remove("one");
// set5.print();
// timer(set6.print);
// set6.print();
// timer(() => console.log(set5.union(set6)));
// console.time("timer");
// console.log(set5.union(set6));
// console.timeEnd("timer");
// console.log(set5.intersection(set6));
// console.log(set5.difference(set6));
