"use strict";

/***********************************************************************/
/***************************** QUESTION 01 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 01 *****************************/`
);

/**
 * Q01. Find the average age.
 */

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 28 },
];

const calcAvg = function (people) {
  let total = 0;
  for (const { age } of people) {
    total += age;
  }
  return total / people.length;
};

console.log(calcAvg(people));

/***********************************************************************/
/***************************** QUESTION 02 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 02 *****************************/`
);

/**
 * Q02: Count the number of names starting with 'A'.
 */

const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];

const countNames = function (names, letter = "A") {
  let total = 0;
  for (const name of names) {
    if (name.toUpperCase()[0] === letter) {
      total += 1;
    }
  }

  return total;
};

console.log(countNames(names));

/***********************************************************************/
/***************************** QUESTION 03 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 03 *****************************/`
);

/**
 * Q03: Find the two numbers with the maximum sum.
 */

const numbers = [10, -2, 8, 15, -5, 20, 3];

const findMaxSumPair = function (numbers) {
  if (numbers.length < 2) {
    return "Array should contain at least two numbers";
  }

  return numbers.sort((a, b) => a - b).slice(-2);
};

console.log(findMaxSumPair(numbers));
