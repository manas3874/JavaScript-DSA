// ! *****************************************
// ! The code structure in this file
// * Topic name
// * Examples
// ! *****************************************

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
