"use strict";

/***********************************************************************/
/***************************** QUESTION 02 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 02 *****************************/`
);

const isPalindrome = function (num) {
  const str = "" + num;
  console.log(str);

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome(1221));
console.log(isPalindrome(1223));

/***********************************************************************/
/***************************** QUESTION 03 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 03 *****************************/`
);

const calculateSum = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
};

console.log(calculateSum([1, 2, 3, 4, 5]));

/***********************************************************************/
/***************************** QUESTION 04 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 04 *****************************/`
);

const isPalindromeStr = function (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] === str[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(isPalindromeStr("malayalam"));
console.log(isPalindromeStr("apple"));

/***********************************************************************/
/***************************** QUESTION 05 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 05 *****************************/`
);

const reverseArray = function (arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }

  return result;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

/***********************************************************************/
/***************************** QUESTION 06 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 06 *****************************/`
);

const removeDuplicates = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }

  return result;
};

console.log(removeDuplicates([1, 2, 3, 4, 5, 2, 4, 5, 3]));
console.log(removeDuplicates([6, 8, 2, 4, 7, 2, 4, 5, 3]));

/***********************************************************************/
/***************************** QUESTION 07 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 07 *****************************/`
);

const factorial = function (num) {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));
console.log(factorial(3));

/***********************************************************************/
/***************************** QUESTION 09 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 09 *****************************/`
);

const calculateFactorial = function (n) {
  let result = 1;

  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
};

console.log(calculateFactorial(5));
console.log(calculateFactorial(3));
console.log(calculateFactorial(6));

/***********************************************************************/
/***************************** QUESTION 10 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 10 *****************************/`
);

const sortNumbers = function (arr) {
  // Base case: If the array has one or no elements, it is already sorted.
  if (arr.length <= 1) {
    return arr;
  }

  // Choosing the first element in the array as the pivot.
  const pivot = arr[0];

  // Creating two empty arrays to store elements less than (left) and greater than (right) the pivot.
  const left = [];
  const right = [];

  // Looping through the array, starting from the second element because the first is the pivot.
  for (let i = 1; i < arr.length; i++) {
    // If the current element is smaller than the pivot, push it to the 'left' array.
    if (arr[i] < pivot) left.push(arr[i]);
    // If the current element is greater than or equal to the pivot, push it to the 'right' array.
    else right.push(arr[i]);
  }

  // If the current element is greater than or equal to the pivot, push it to the 'right' array.
  // Spread operator '...' is used to concatenate arrays.
  return [...sortNumbers(left), pivot, ...sortNumbers(right)];
};

console.log(sortNumbers([4, 2, 1, 5, 3]));
console.log(sortNumbers([6, 3, 7, 1, 4]));

/***********************************************************************/
/***************************** QUESTION 11 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 11 *****************************/`
);

/* 
  Gaussian summation formula (n * (n + 1)) / 2

  The missingNumber function takes an array of consecutive numbers as its argument. It first calculates the expected sum of the sequence using the Gaussian summation formula.

  It then calculates the sum of the numbers in the array using the reduce method or by for Loop, which adds up all the numbers in the array starting from an initial value of 0.

  Finally, it subtracts the sum of array from the total sum to get the missing number, and returns it. Both solutions are same time complexity and solution.
  */

const findMissingNumber = function (nums) {
  nums.push(0);
  const noDuplicates = [...new Set(nums)];

  const n = noDuplicates.length;

  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < noDuplicates.length; i++) {
    actualSum = actualSum + noDuplicates[i];
  }

  return expectedSum - actualSum;
};

console.log(findMissingNumber([3, 0, 1]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
console.log(findMissingNumber([0, 1, 2]));
console.log(findMissingNumber([2, 4, 1, 3, 6, 7, 8]));

/***********************************************************************/
/***************************** QUESTION 12 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 12 *****************************/`
);

const needleAndHaystack = function (haystack, needle) {
  if (haystack.includes(needle)) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
};

console.log(needleAndHaystack(`sadbutsad`, "sad"));
console.log(needleAndHaystack(`butsad`, "sad"));
console.log(needleAndHaystack(`airplane`, "plane"));

/***********************************************************************/
/***************************** QUESTION 13 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 13 *****************************/`
);

const findTarget = function (nums, target) {
  if (nums.includes(target)) {
    const start = nums.indexOf(target);
    const last = start + 1;
    return [start, last];
  } else {
    return [-1, -1];
  }
};

console.log(findTarget([5, 7, 7, 8, 8, 10], 8));
console.log(findTarget([1, 3, 5, 6], 5));

/***********************************************************************/
/***************************** QUESTION 15 *****************************/
/***********************************************************************/
console.log(
  `/***************************** QUESTION 15 *****************************/`
);

const removeDuplicateCharacter = function (str) {
  const arr = str.split("");
  const set = [...new Set(arr)];

  let newStr = "";
  for (let i = 0; i < set.length; i++) {
    newStr = newStr + set[i];
  }

  return newStr;
};

console.log(removeDuplicateCharacter(`hello`));
