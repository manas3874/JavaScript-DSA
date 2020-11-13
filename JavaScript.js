// ! *****************************************
// ! Random JavaScript testing and practice

// ! class keyword in ES6

class People {
  constructor(name, age, profession) {
    // ! a constructor which runs during instantiation
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.hobby = "something"; // ! default value, will be changed if a child wants to update the value here
  }

  // ! an ES6 arrow function is used to write a method as a property of this class. Arrow function lets us use the this keyword appropriately
  descriptor = () => {
    console.log(
      `Hello, I am ${this.name}. I am a ${this.age} years old ${this.profession} and I love ${this.hobby}`
    );
  };
}
var john = new People("Adya", 25, "developer");
class Hobby extends People {
  //! inheritance
  constructor(name, age, profession, hobby) {
    super(name, age, profession); //! using the parent class to store values
    this.hobby = hobby; //! storing values of the child class
  }
}

var manas = new Hobby("Manas", 22, "Web developer", "cooking");

// ! *****************************************************************
// ! ARRAYS
// ! *****************************************************************

// ! Creating an array using javascript new Object() method
// * creates a blank array of undefined items
// var arr = new Array(4);
// console.log(arr, arr.length, arr[0]);

// * joining the elements of an array and turning it into a string
// var arr = new Array(1, 2, 3, 4);
// ? use arr.join() if you wish to gvie a specific separator
// console.log(arr.join(":"));
// ? use arr.toString() if you wish to simply convert the array into a string
// console.log(arr.toString());

// * Using array mutator functions
// push
// pop
// shift(pop first)
// unshift(push first)
// inserting numbers in between the array using splice
// sort(issue while sorting numerical array)
// forEach()
// reduce()
// map()
// filter()
// splice()
// slice()

//! testing of each function
// var arr = new Array(1, 9, 13, 6, 4);
// arr.push(6);
// arr.pop();
// arr.shift();
// arr.unshift(5);
// let nums = [9, 8, 7];
// arr.splice(3, 0, nums);
// arr.sort((a, b) => a - b); // ascending
// arr.sort((a, b) => b - a); // descending
// arr.forEach((item) => console.log(item * item)); // takes a simple callback function
// console.log(arr.reduce((acc, item) => acc + item)); // uses an accumulator, reduces the entire array into a single element
// console.log(arr.map((item) => item + 5)); // performs certain task on each element of the array and returns a new array
// console.log(arr.filter((item) => item % 2 == 0)); // returns a new array with only the elements which return "true" for the callback function within filter function
// console.log(arr.splice(1, 2)); // mutates the original array, and returns the spliced array
// console.log(arr.slice(1, 3)); // returns the sliced array, takes starting and ending position
// console.log([...arr.slice(0, 2), ...arr.slice(3, 5)]); //remove a specific item
// console.log(arr);

// ! Jagged array is a multidimensional array where the lengths of rows are not uniform

// var arr = [
//   [1, 2, 3],
//   [1, 2],
//   [4, 5, 6, 7, 8],
// ];
// let count = 0;
// let totalArray = [];
// for (let i = 0; i < arr.length; i++) {
//   let total = 0;
//   for (let j = 0; j < arr[i].length; j++) {
//     // ! unsure about the length of sub-arrays
//     count += arr[i][j];
//     total += arr[i][j];
//   }
//   totalArray.push(total);
// }
// console.log(count, totalArray);

//! book page 33 question 1
// ! Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.
// class Grades {
//   constructor() {
//     this.gradesArray = [];
//   }

//   addGrade = (grade) => {
//     this.gradesArray.push(grade);
//   };

//   average = () => {
//     console.log(
//       this.gradesArray.reduce((acc, item) => acc + item) /
//         this.gradesArray.length
//     );
//   };
//   showGrades = () => {
//     this.gradesArray.length == 0
//       ? console.log("No grades added")
//       : console.log(this.gradesArray);
//   };
// }

// var manas = new Grades();

//! book page 33 question 2
//! Store a set of words in an array and display the contents both forward and backward

// let arr = ["manas", "is", "a", "programmer"];
// console.log(arr);
// console.log(arr.reverse());

//! book page 33 question 4
// ! Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

// let string = "hello there, how are you?";
// let arr = string.split(" ").join("").split(""); // remove space, join words, split letters
// console.log(arr);
// let joined = arr.join("");
// console.log(joined);

// ! Reading a txt file and working with data
// var movies = "";
// fetch("movies.txt")
//   .then((Response) => Response.text())
//   .then((Response) => console.log(Response.split(",")));

// // console.log(movies);

// ! Page 47 question 3
// ! Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects. Write a function that displays all the people in the list of the same gender.

// class Person {
//   constructor(name, gender) {
//     (this.name = name), (this.gender = gender);
//   }
// }

// class PersonList {
//   constructor() {
//     this._dataStore = [];
//   }
//   append = (element) => {
//     this._dataStore.push(element);
//   };
//   showMale = () => {
//     for (let item of this._dataStore) {
//       if (item.gender == "male") {
//         console.log(item);
//       } else {
//         continue;
//       }
//     }
//     return null;
//   };
//   showFemale = () => {
//     for (let item of this._dataStore) {
//       if (item.gender == "female") {
//         console.log(item);
//       } else {
//         continue;
//       }
//     }
//     return null;
//   };
// }

// var genderShower = new PersonList();
// genderShower.append(new Person("manas", "male"));
// genderShower.append(new Person("adya", "female"));
// genderShower.append(new Person("ajai", "male"));
// genderShower.append(new Person("punita", "female"));

// ! Checking palindrome of a number using STACK datastructure

// class PalindromeStack {
//   constructor() {
//     this._dataStore = [];
//     this.top = 0;
//     this.length = 0;
//   }
//   push = (element) => {
//     this._dataStore.push(element);
//     ++this.length;
//     ++this.top;
//   };
//   pop = () => {
//     --this.top;
//     --this.length;
//     return this._dataStore.pop();
//   };
//   peek = () => {
//     if (this.length) {
//       console.log(this._dataStore[this.top - 1]);
//     }
//   };
// }

// let checker = new PalindromeStack();
// let testWord1 = "racecar";
// let testWord2 = "manas";

// isPalindrome = (testCase) => {
//   for (let letter of testCase) {
//     checker.push(letter);
//   }
//   var dummyArray = [];
//   let counter = checker.length;
//   for (let i = 0; i < counter; i++) {
//     dummyArray.push(checker.pop());
//   }
//   if (testCase == dummyArray.join("")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isPalindrome(testWord1));

// ! Factorial of a number using STACK

// class FactorialStack {
//   constructor() {
//     this._dataStore = [];
//     this.top = 0;
//     this.length = 0;
//   }
//   push = (element) => {
//     this._dataStore.push(element);
//     ++this.length;
//     ++this.top;
//   };
//   pop = () => {
//     --this.top;
//     --this.length;
//     return this._dataStore.pop();
//   };
// }

// factorialFinder = (num) => {
//   let fact = new FactorialStack();
//   let pushes = num;
//   for (let i = 0; i < pushes; i++) {
//     fact.push(num);
//     --num;
//   }
//   let runningProduct = 1;
//   let length = fact.length;
//   for (let i = 0; i < length; i++) {
//     runningProduct *= fact.pop();
//   }
//   return runningProduct;
// };

// console.log(factorialFinder(7));

// ! Checking whether the bracketpairs are balanced or not

class BracketStack {
  constructor() {
    this._dataStore = [];
    this.length = 0;
    this.top = 0;
  }
  push = (item) => {
    ++this.length;
    ++this.top;
    this._dataStore.push(item);
  };
  pop = () => {
    --this.length;
    --this.top;
    return this._dataStore.pop();
  };
}
var bracket = new BracketStack();
bracketBalanceChecker = (string) => {
  let correctObj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let letter of string) {
    if (letter == "(" || letter == "[" || letter == "{") {
      bracket.push(letter);
    } else if (letter == ")" || letter == "]" || letter == "}") {
      if (correctObj[bracket.pop()] != letter) {
        return false;
      }
    }
  }

  return bracket.length ? false : true;
};
// ! test 1
console.log(
  bracketBalanceChecker(
    "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"
  )
); // true
// ! test 2
console.log(bracketBalanceChecker("({(()))}}")); // false
