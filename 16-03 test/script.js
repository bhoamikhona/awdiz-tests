"use strict";

/* 
Suppose we have an array of objects representing students, each with
multiple attributes such as name, age, grade, and subjects. Here's an
example array:
 */

const students = [
  {
    name: "Alice",
    age: 20,
    grade: "A",
    subjects: ["Math", "Physics", "Chemistry"],
  },
  {
    name: "Bob",
    age: 21,
    grade: "B",
    subjects: ["Math", "Biology", "History"],
  },
  {
    name: "Charlie",
    age: 19,
    grade: "C",
    subjects: ["Physics", "Chemistry", "Literature"],
  },
  {
    name: "David",
    age: 22,
    grade: "A",
    subjects: ["Math", "Physics", "Literature"],
  },
  {
    name: "Eva",
    age: 18,
    grade: "B",
    subjects: ["Math", "Chemistry", "History"],
  },
];

/* 
Write a function filterStudents that takes the students array and a
criteria object as arguments. The criteria object specifies the
conditions that each student must meet to be included in the result. Each
criterion in the criteria object may have multiple conditions (e.g., eq, gt, lt),
and each condition may apply to a different attribute of the
student object.

For example, the criteria object { age: { gt: 20 }, subjects: { includes:
'Physics' } } should filter the students who are older than 20 and have
'Physics' as one of their subjects.
*/

/**
 *
 * @param {Array} studentsArr
 * @param {Object} criteriaObj
 * @returns a student object that matches all the conditions in the criteria object
 */
const filterStudents = function (studentsArr, criteriaObj) {
  return studentsArr.filter(function (student) {
    for (const [key, { eq, gt, lt, includes: subjects }] of Object.entries(
      criteriaObj
    )) {
      const studentValue = student[key];

      if (subjects?.includes && !studentValue?.includes(subjects)) return false;
      if (eq && studentValue !== eq) return false;
      if (gt && !(studentValue > gt)) return false;
      if (lt && !(studentValue < lt)) return false;
    }
    return true;
  });
};

// Here are some sample calls to the filterStudents function:

console.log(
  filterStudents(students, {
    age: { gt: 20 },
    subjects: { includes: "Physics" },
  })
);

// Output: [{ name: 'David', age: 22, grade: 'A', subjects: ['Math', 'Physics', 'Literature'] }]

console.log(
  filterStudents(students, {
    age: { lt: 20 },
    grade: { eq: "A" },
    subjects: { includes: "Math" },
  })
);

// Output: []

console.log(
  filterStudents(students, {
    grade: { eq: "B" },
    subjects: { includes: "History" },
  })
);

// Output: [{ name: 'Bob', age: 21, grade: 'B', subjects: ['Math', 'Biology', 'History'] },   { name: 'Eva', age: 18, grade: 'B', subjects: ['Math', 'Chemistry', 'History'] }]

console.log(
  filterStudents(students, {
    age: { gt: 18 },
    grade: { eq: "C" },
    subjects: { includes: "Physics" },
  })
);

// Output: [{ name: 'Charlie', age: 19, grade: 'C', subjects: ['Physics', 'Chemistry', 'Literature'] }]
