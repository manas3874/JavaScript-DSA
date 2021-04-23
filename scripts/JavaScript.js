// ! *****************************************
// ! Random JavaScript testing and practice

import { timer, timerForHundred, timerForThousand } from "./timer.js";

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
    this.hobby = hobby; //! storing values of the child class?
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

// class BracketStack {
//   constructor() {
//     this._dataStore = [];
//     this.length = 0;
//     this.top = 0;
//   }
//   push = (item) => {
//     ++this.length;
//     ++this.top;
//     this._dataStore.push(item);
//   };
//   pop = () => {
//     --this.length;
//     --this.top;
//     return this._dataStore.pop();
//   };
// }
// var bracket = new BracketStack();
// bracketBalanceChecker = (string) => {
//   let correctObj = {
//     "{": "}",
//     "[": "]",
//     "(": ")",
//   };
//   for (let letter of string) {
//     if (letter == "(" || letter == "[" || letter == "{") {
//       bracket.push(letter);
//     } else if (letter == ")" || letter == "]" || letter == "}") {
//       if (correctObj[bracket.pop()] != letter) {
//         return false;
//       }
//     }
//   }

//   return bracket.length ? false : true;
// };
// // ! test 1
// console.log(
//   bracketBalanceChecker(
//     "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"
//   )
// ); // true
// // ! test 2
// console.log(bracketBalanceChecker("({(()))}}")); // false

// ! Page 57 Question 3
// ! An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez dispenser is filled with red, yellow, and white colors and you don’t like the yellow ones. Write a program that uses a stack (and maybe more than one) to remove the yellow ones without changing the order of the other candies in the dispenser

// var sample = "RYWWRWYRYYRWYRWWYRYRWYRWYYRYWR"; // rightmost is top, 30 candies, 11 are Y

// class PezStack {
//   constructor() {
//     this._dataStore = [];
//     this.length = 0;
//   }
//   push = (element) => {
//     ++this.length;
//     this._dataStore.push(element);
//   };
//   pop = () => {
//     --this.length;
//     return this._dataStore.pop();
//   };
// }

// // ! using 3 instances of a stack
// var original = new PezStack(); // putting the sample in a stack
// var temp = new PezStack(); // removing the Y candies
// var required = new PezStack(); // making a required stack since the elements were reversed

// for (let letter of sample) {
//   original.push(letter);
// }

// removeYellow = (originalStack, tempStack, requiredStack) => {
//   let length = originalStack.length;
//   for (let i = 0; i < length; i++) {
//     let current = originalStack.pop();
//     if (current != "Y") {
//       tempStack.push(current);
//     } else {
//       continue;
//     }
//   }
//   length = tempStack.length;
//   for (let i = 0; i < length; i++) {
//     requiredStack.push(tempStack.pop());
//   }

//   return requiredStack;
// };
// console.log(removeYellow(original, temp, required));

// ! Perform Radix sort using queues
// ! not the most efficient sorting algorithm
// ! This was being used in the earlier days of computer science

// class RadixQueue {
//   constructor() {
//     this._dataStore = [];
//     this.length = 0;
//   }
//   enqueue = (element) => {
//     this._dataStore.push(element);
//     ++this.length;
//   };
//   dequeue = () => {
//     --this.length;
//     return this._dataStore.shift();
//   };
//   print = () => {
//     console.log(this._dataStore);
//   };
// }

// var sample = [12, 55, 67, 45, 23, 69, 34, 6, 51, 70, 99, 28, 45];
// var queues = [];
// for (let i = 0; i < 10; i++) {
//   queues[i] = new RadixQueue();
// }

// distributor = (sample, queues, length, digit) => {
//   console.log("in distributor");
//   for (let i = 0; i < length; i++) {
//     if (digit == 1) {
//       queues[sample[i] % 10].enqueue(sample[i]);
//     } else if (digit == 10) {
//       queues[Math.floor(sample[i] / 10)].enqueue(sample[i]);
//     }
//   }
// };

// collector = (queues) => {
//   console.log("in collector");
//   let dummyArray = [];
//   for (let queue of queues) {
//     let length = queue.length;
//     for (let i = 0; i < length; i++) {
//       dummyArray.push(queue.dequeue());
//     }
//   }
//   return dummyArray;
// };
// distributor(sample, queues, sample.length, 1);
// samples = collector(queues);
// console.log(samples);
// distributor(sample, queues, sample.length, 10);
// samples = collector(queues);
// console.log(samples);

// ! Write a program using hashing that reads a text file and compiles a list of the words in the file with the number of times each word appears in the file.

// // * Without hashing
/*var text = "Elephants are mammals of the family Elephantidae and the largest existing land animals. Three species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. Elephantidae is the only surviving family of the order Proboscidea; extinct members include the mastodons. The family Elephantidae also contains several now-extinct groups, including the mammoths and straight-tusked elephants. African elephants have larger ears and concave backs, whereas Asian elephants have smaller ears, and convex or level backs. Distinctive features of all elephants include a long proboscis called a trunk, tusks, large ear flaps, massive legs, and tough but sensitive skin. The trunk is used for breathing, bringing food and water to the mouth, and grasping objects. Tusks, which are derived from the incisor teeth, serve both as weapons and as tools for moving objects and digging. The large ear flaps assist in maintaining a constant body temperature as well as in communication. The pillar-like legs carry their great weight.";

*/

// // var wordFrequency = (text) => {
// //   var obj = {};
// //   var textWords = text.toLowerCase().split(" ");
// //   for (let word of textWords) {
// //     word.replace(".", "");
// //     word.replace(",", "");
// //     word.replace(":", "");
// //     word.replace(";", "");
// //     obj[word] ? (obj[word] += 1) : (obj[word] = 1);
// //   }
// //   console.log(obj);
// // };

// // wordFrequency(text);

// // * using dictionary

// import { Dictionary } from "./Dictionary.js";

// var wordFrequency = (text) => {
//   var textWords = text.toLowerCase().split(" ");
//   var dict = new Dictionary();
//   for (let word of textWords) {
//     dict.showDictionary()[word]
//       ? (dict._dataStore[word] += 1)
//       : (dict._dataStore[word] = 1);
//   }

//   console.log(dict.showDictionary());
// };

// wordFrequency(text);

// ! Given an array A[] and a number x, check for pair in A[] with sum as x

// function pairSum(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == num) {
//         return `${arr[i]}, ${arr[j]}`;
//       }
//     }
//   }
//   return -1;
// }
// console.log(pairSum([0, -1, 2, -3, 1], -2)); // -3,1
// console.log(pairSum([1, -2, 1, 0, 5], 0)); // -1

// ! CONVERT DECIMAL (BASE 10) TO BINARY NUMBER
var decimalToBinary = (number) => {
  var arr = [];
  var recursive = (number) => {
    if (number < 2) {
      arr.push(number);
      return;
    }
    arr.push(number % 2);
    number = Math.floor(number / 2);
    recursive(number);
  };
  recursive(number);
  return arr.reverse();
};
// timerForThousand(() => decimalToBinary(919224234100));

// ! electrostatics

var electrostatics = (input1, input2, input3) => {
  let count = 0;
  for (let i = 0; i < input3; i++) {
    if (input2[i] == "P") {
      count += input1[i];
    } else if (input2[i] == "N") {
      count -= input1[i];
    }
  }
  return Math.abs(count) * 100;
};
// console.log(electrostatics([2, 3], "PN", 2));

// ! jacksparrow

var jack = (input1, input2, input3, input4) => {
  var jumpCounter = 0;
  for (let i = 0; i < input3; i++) {
    let height = input4[i];
    while (height > input1) {
      jumpCounter += 1;
      height = height - input1 + input2; // ! this line changed
    }
    jumpCounter += 1;
  }
  return jumpCounter;
};
// console.log(jack(5, 1, 2, [9, 10]));

// ! decrypted

var decrypted = (input1, input2) => {
  let charList = [];
  for (let i = 0; i <= input1.length; i += 2) {
    for (let j = 0; j < Number(input1[i + 1]); j++) {
      charList.push(input1[i]);
    }
  }
  // console.log(charList);
  return charList[input2 - 1] == undefined ? -1 : charList[input2 - 1];
};

// console.log(decrypted("a3b2", 7));

// ! student marks

var marks = (input1, input2) => {
  // ! sorted array
  input2 = input2.sort(function (a, b) {
    return a - b;
  }); //! without arrow

  // console.log(input2);
  let i = 0;
  while (i + 1 < input1) {
    if (input2[i] + 1 != input2[i + 1]) {
      return 0;
    }
    i++;
  }
  return 1;
};

// console.log(marks(6, [3, 7, 2, 9, 4, 6]));

// ! min divisible
var minDivisible = (input1) => {
  let i = 2;
  var temp;
  while (true) {
    if (i == 100) {
      return -1;
    }
    temp = input1 * i;
    i++;
    let summer = 0;
    for (let char of temp.toString()) {
      summer += Number(char);
    }
    if (summer == input1) {
      break;
    }
  }
  return temp;
};

// console.log(minDivisible(10));

// ! shifter

var shifter = (input1, input2, input3) => {
  var tempArr = [];
  for (let i = 0; i < input3; i++) {
    tempArr.push(input2.shift());
  }
  return [...input2, ...tempArr];
};

// console.log(shifter(9, [1, 7, 8, 5, 4, 6, 0, 2, 3], 3));

// ! even odd sorter

var sorter = (input1, input2) => {
  input2 = input2.sort(function (a, b) {
    return a - b;
  });
  var arrOfEven = [];
  var arrOfOdd = [];
  for (let item of input2) {
    if (item % 2 == 0) {
      arrOfEven.push(item);
    } else {
      arrOfOdd.push(item);
    }
  }
  var tempArr = [];
  if (Math.min(...input2) % 2 == 0) {
    while (tempArr.length <= input1) {
      tempArr.push(arrOfEven.shift());
      tempArr.push(arrOfOdd.shift());
    }
  } else if (Math.min(...input2) % 2 == 1) {
    while (tempArr.length <= input1) {
      tempArr.push(arrOfOdd.shift());
      tempArr.push(arrOfEven.shift());
    }
  }
  if (input1 % 2 == 1) {
    tempArr.pop();
  }
  return tempArr;
};

// console.log(sorter(5, [47, 49, 36, 98, 90]));

// ! second max

var secondMax = (input1, input2) => {
  let firstMax = Math.max(...input2);
  for (let i = 0; i < input1; i++) {
    if (input2[i] == firstMax) {
      input2[i] = -1;
    }
  }
  return Math.max(...input2);
};

// console.log(secondMax(3, [2, 2, 2]));

// ! clever students

var clever = (input1, input2) => {
  var count = 0;
  for (let i = 0; i < input1; i++) {
    for (let j = i; j <= input1; j++) {
      if (input2[i] > input2[j]) {
        count += 1;
      }
    }
  }
  return count;
};

// console.log(clever(5, [1, 1, 3, 6, 2]));

// ! student marks total

var school = (input1, input2, input3) => {
  var arrForLeast = [];
  for (let i = 0; i < input2; i++) {
    //! subject
    var tempCount = 0;
    for (let j = 0; j < input1; j++) {
      //! student
      tempCount += input3[j][i];
    }
    arrForLeast.push(tempCount);
  }
  let indexOfLeast = arrForLeast.indexOf(Math.min(...arrForLeast));
  var arrOfTotal = [];
  for (let item of input3) {
    item[indexOfLeast] = 0;
    let count = 0;
    for (let k = 0; k < item.length; k++) {
      count += item[k];
    }
    arrOfTotal.push(count);
  }
  return arrOfTotal;
};

// console.log(
//   school(3, 5, [
//     [75, 76, 65, 87, 87],
//     [78, 76, 68, 56, 89],
//     [67, 87, 78, 77, 65],
//   ])
// );

// ! factorial

var factorial = (input1) => {
  var count = 0;
  while (true) {
    let temp = Math.floor(input1 / 5);
    count += temp;
    input1 = temp;
    if (input1 < 5) {
      break;
    }
  }
  return count;
};

// console.log(factorial(1123));

// ! Mettl test 28 Feb 2021

// ? a2b3, 7
const nthLetter = (input1, input2) => {
  const unique = input1.length / 2;
  var arrOfItems = input1.split("");
  var str = "";
  for (let i = 0; i < unique; i++) {
    const current = arrOfItems.splice(0, 2);
    for (let j = 0; j < Number(current[1]); j++) {
      str += current[0];
    }
  }
  return str[input2 - 1] ? str[input2 - 1] : -1;
};
// console.log(nthLetter("a1b1c3", 5));

// ! Words reverse

const rev = (input1) => {
  return input1.split(" ").reverse().join(" ");
};

// console.log(rev("My name is khan"));

// ! largest + smallest

const largeSmall = (input1, input2) => {
  return Math.max(...input2) + Math.min(...input2);
};

// console.log(largeSmall(4, [9, 5, 0, 11]));

// ! Postfix evaluation

const evalPostfix = (input1) => {
  // known operators
  var operators = {
    "+": function (a, b) {
      return a + b;
    },
    "-": function (a, b) {
      return a - b;
    },
    "*": function (a, b) {
      return a * b;
    },
    "/": function (a, b) {
      return a / b;
    },
  };

  var input = "879-2*+";
  // run through all commands in the input
  var stack = [];
  for (var i = 0; i < input.length; i++) {
    var cmd = input[i];

    // known operator
    if (cmd in operators) {
      // get the function
      var f = operators[cmd];

      // get the correct number of arguments
      var args = [];
      for (var j = 0; j < f.length; j++) args.unshift(stack.shift());

      // apply and push back onto the stack
      // note: the first argument to apply is 'this'
      stack.unshift(f.apply(undefined, args));
    }

    // anything else, push onto the stack as either a number or string
    else {
      stack.unshift(isNaN(parseFloat(cmd)) ? cmd : parseFloat(cmd));
    }
  }
  return stack[0];
};
