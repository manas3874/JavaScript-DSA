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
