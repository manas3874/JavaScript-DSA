// ! ***********************************************************************************************************************
// ! DICTIONARY
// ! A dictionary lets us store the elements in a (key, value) pair. The JS object is much like a dictionary, but it is still useful to learn the implementation of an array-based-dictionary
// ! has methods, sortOnKeys and sortOnValues, which are really helpful
import { timer, timerForHundred, timerForThousand } from "./timer.js";
export class Dictionary {
  constructor() {
    // ! not using [] to initialize the array since we want to use the Object nature of the Array
    this._dataStore = new Array();
    this.length = 0;
  }

  add = (key, value) => {
    this._dataStore[key] = value; // ! can take string keys since we are using the object nature of arrays
    ++this.length;
  };
  remove = (key) => {
    delete this._dataStore[key];
    --this.length;
  };

  find = (key) => {
    return this._dataStore[key];
  };
  // ! SORT ON KEYS
  // ! works only with string keys
  sortOnKeys = () => {
    var arrOfKeys = Object.keys(this._dataStore);
    arrOfKeys.sort();
    var tempDict = new Array();
    for (let item of arrOfKeys) {
      tempDict[item] = this._dataStore[item];
    }
    this._dataStore = tempDict;
  };
  // ! SORT ON VALUES (slightly inefficient at this stage)
  // ! works only with string values
  sortOnValues = () => {
    var arrOfValues = [];
    for (let item in this._dataStore) {
      arrOfValues.push(this._dataStore[item]);
    }
    arrOfValues.sort();
    var tempDict = new Array();
    for (let item of arrOfValues) {
      tempDict[
        Object.keys(this._dataStore).find(
          (key) => this._dataStore[key] === item
        )
      ] = item;
    }
    this._dataStore = tempDict;
  };
  showDictionary = () => {
    return this._dataStore;
  };
}

var dict = new Dictionary();

dict.add("Manas", "coder");
dict.add("Jack", "programmer");
dict.add("Austin", "developer");
dict.add("Zenith", "networking");
dict.add("Kalob", "kubernetes");
dict.add("Jose", "data science");
dict.add("Brad", "web development");
dict.add("Kevin", "CSS expert");

// timer(dict.sortOnValues);
// timer(() => console.log(dict.showDictionary()));

// console.log(dict.showDictionary());
// dict.print();
// // dict.sortOnKeys();
// dict.sortOnValues();
// dict.print();
