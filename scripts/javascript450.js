// ! 450 DSA questions

// * ***************************************************************************
// ! 1 Write a program to reverse an array or string

const reverse = (data) => {
  // ! private method for array reversal
  const _revArr = (arr) => {
    let dummyArray = [];
    let count = arr.length;
    while (count) {
      dummyArray.push(arr.pop());
      count--;
    }
    return dummyArray;
  };
  // ! Check the type of data and return the reversed object accordingly
  if (Array.isArray(data)) {
    return _revArr(data);
  } else if (typeof data === "string") {
    return _revArr(data.split("")).join("");
  }
};

// console.log(reverse("manas"));

// * ***************************************************************************
// ! 2 Maximum and minimum of an array using minimum number of comparisons

// ? Direct comparision method - time complexity => n
const minMaxDirect = (arr) => {
  // ! Empty array
  if (arr.length === 0) {
    return "Empty array";
  }
  // ! Setting base minimum and maximum
  let min = arr[0];
  let max = arr[0];
  // ! Checking single element array
  if (arr.length == 1) {
    return [min, max];
  }
  // ! checking each element only once ( time complexity n )
  for (let item of arr) {
    if (item > min && item < max) {
      continue;
    }
    if (item < min) {
      min = item;
    } else if (item > max) {
      max = item;
    }
  }
  return [min, max];
};

// console.log(minMaxDirect([2, -6, 3, 7, 9]));

// const minMaxRecursive = (arr) => {
//   // ! base case
//   if (arr.length == 1) {
//   }
// };

// * ***************************************************************************
// ! 3 Given an array arr[] and a number K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

const kthSmallest = (arr, k) => {
  // ! Try with an actual sorting algorithm later
  return arr.sort((a, b) => a - b)[k - 1];
};

// console.log(kthSmallest([1, 3, 4, 2], 2));

// * ***************************************************************************
// ! 4 Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

const sort012 = (arr) => {
  let dummy0 = [];
  let dummy1 = [];
  let dummy2 = [];
  for (let item of arr) {
    switch (item) {
      case 0:
        dummy0.push(item);
        break;
      case 1:
        dummy1.push(item);
        break;
      case 2:
        dummy2.push(item);
        break;
      default:
        break;
    }
  }
  return [...dummy0, ...dummy1, ...dummy2];
};

// console.log(sort012([0, 2, 1, 2, 0]));

// * ***************************************************************************
// ! 5 Move all negative numbers to beginning and positive to end with constant extra space

const moveNegative = (arr) => {
  let deque = [];
  let countOfZero = 0;
  for (let item of arr) {
    item < 0 ? deque.unshift(item) : deque.push(item);
    if (item === 0) countOfZero += 1;
  }
  if (countOfZero) {
    // ! insert extra zeros to the right of the rightmost negative number
  }

  return deque;
};

// console.log(moveNegative([-12, 11, -13, -5, 6, -7, 5, -3, -6]));

// * ***************************************************************************
// ! 6 Given two arrays a[] and b[]. The task is to find the length of union between these two arrays.

const unionLength = (arr1, arr2) => {
  let obj = {};
  let combined = [...arr1, ...arr2];
  // ! removing repetitions from combined
  for (let item of combined) {
    if (item in obj) obj[item] += 1;
    if (!(item in obj)) obj[item] = 1;
  }
  return Object.keys(obj).length;
};

// console.log(unionLength([1, 2, 3, 4, 5], [1, 2, 3]));

// * ***************************************************************************
// ! 7 Given an array, rotate the array by one position in clock-wise direction.

const rotateClockwise = (arr) => {
  arr.unshift(arr.pop());
  return arr;
};

// console.log(rotateClockwise([1, 2, 3, 4, 5]));
