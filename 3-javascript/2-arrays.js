// Creating an Array
// Arrays in JavaScript are ordered collections of values called elements, indexed by zero-based integers.
const faces = ["😃", "😗", "🤡", "🤑", "😵", "🤤", "🙃", "🥳"];

// Array Length
// The length property returns the number of elements in an array.
console.log("1 ========== ========== =========");
console.log(faces.length); // Outputs: 8

// Accessing Array Elements
// Elements in an array are accessed using their index.
console.log("2 ========== ========== =========");
console.log(faces[0]); // Outputs the first item: "😃"
console.log(faces[1]); // Outputs the second item: "😗"
console.log(faces[faces.length - 1]); // Outputs the last element: "🥳"

// Looping over an Array
// The forEach method executes a provided function once for each array element.
console.log("3 ========== ========== =========");
faces.forEach((face) => {
  console.log(face);
});

// Adding Elements to an Array
// push adds elements to the end, unshift adds elements to the beginning.
console.log("4 ========== ========== =========");
faces.push("😬");  // push append item at the end of the array
console.log(faces); // "😬" is added to the end of the array.
console.log("5 ========== ========== =========");
faces.unshift("🥶"); // unshift add item at the beginning of the array
console.log(faces); // "🥶" is added to the beginning of the array.

// Removing Elements from an Array
// pop removes the last element, shift removes the first element.
console.log("6 ========== ========== =========");
const lastFace = faces.pop();  // pop removes the last element and returns it.
console.log(faces); // "😬" is removed from the array.
console.log("7 ========== ========== =========");
const firstFace = faces.shift();  // shift removes the first element and returns it.
console.log(faces); // "🥶" is removed from the array.

// Finding the Index of an Element in the Array
// indexOf returns the first index at which a given element can be found, or -1 if it is not present.
console.log("8 ========== ========== =========");
console.log(faces.includes("🤡")); // Outputs: true
const index = faces.indexOf("🤡");
console.log(index); // Outputs the index of "🤡"
console.log(faces.indexOf("adfhdfjhdsgf")); // Outputs: -1

// Removing an Element by Index Position
// splice removes elements from an array and, if necessary, inserts new elements in their place.
console.log("9 ========== ========== =========");
const removedFace = faces.splice(index, 1); // Removes "🤡" and returns it in a new array.
console.log(removedFace); // Outputs: ["🤡"]
console.log(faces); // "🤡" is removed from the original array.

// Copying an Array
// The spread operator (...) can be used to create a shallow copy of an array and add new elements.
console.log("10 ========== ========== =========");
const copyFaces = [...faces, 1, 2, 3];
console.log(copyFaces);

// Mapping over an Array
// The map method creates a new array with the results of calling a provided function on every element in the calling array.
console.log("11 ========== ========== =========");
const facesWithHand = faces.map((f) => `${f}-👋`);
console.log(facesWithHand);
const numbers = [1, 2, 3, 4, 5, 6];
const doubled = numbers.map((n) => n * 2);
console.log(doubled);

// Joining Array Elements
// The join method creates and returns a new string by concatenating all of the elements in an array.
console.log("12 ========== ========== =========");
console.log(faces.join("-"));

// Filtering an Array
// The filter method creates a new array with all elements that pass the test implemented by the provided function.

console.log("13 ========== ========== =========");
const students = [
  {
    name: "Cristian",
    location: "Vancouver",
    age: 35,
  },
  {
    name: "James",
    location: "Toronto",
    age: 40,
  },
  {
    name: "Garry",
    location: "Vancouver",
    age: 20,
  },
  {
    name: "Rettie",
    location: "Vancouver",
    age: 19,
  },
  {
    name: "Bertha",
    location: "Toronto",
    age: 50,
  },
  {
    name: "Mirian",
    location: "Vancouver",
    age: 33,
  },
];

const studentsFromVancouver = students.filter(
  (student) => student.location === "Vancouver"
);
console.log(studentsFromVancouver);

const students30Plus = students.filter((student) => student.age >= 30);
console.log(students30Plus);

// Chaining Methods
// Array methods can be chained together to perform multiple operations in a single line.
console.log("13 ========== ========== =========");
const studentsFromVancouverAnd30PlusOnlyName = students
  .filter((student) => {
    return student.location === "Vancouver";
  })
  .filter((student) => {
    return student.age >= 30;
  })
  .map((student) => {
    return student.name;
  });
console.log(studentsFromVancouverAnd30PlusOnlyName);

// // More info on this
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
