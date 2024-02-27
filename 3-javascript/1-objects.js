// Creating an object
// Objects in JavaScript are collections of key-value pairs.
// Keys are always strings, and values can be any data type.

const person = {
  id: 123,
  firstName: "Cristian",
  lastName: "Penarrieta",
  address: "1483 5th Ave, New York, NY 10035",
  age: 36,
  email: "c.penarrieta@northeastern.edu",
  "weird-key+": "weird value", // Keys with special characters must be in quotes.
  kids: [
    { name: "Clara", age: 6 },
    { name: "Francisco", age: 3 },
    { name: "Felipe", age: 0 },
  ],
  // Methods are functions associated with an object.
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`; // Template literals make string concatenation more readable.
  },
};

// Accessing object values
// You can access object values using dot notation or bracket notation.
console.log("1 ========== ========== =========");
console.log(person.firstName); // Outputs: Cristian
console.log(person["firstName"]); // Also outputs: Cristian
console.log(person["weird-key+"]); // Outputs: weird value
console.log(person.kids); // Outputs the array of kids
console.log(person.kids[0].name); // Outputs: Clara
console.log(person.kids[1].name); // Outputs: Francisco
console.log(person.getFullName()); // Outputs: Cristian Penarrieta

// Updating values
// You can update the properties of an object directly.
console.log("2 ========== ========== =========");
person.age = 40;
person.address = "My new home address ......";
console.log(person.age); // Outputs: 40
console.log(person.address); // Outputs: My new home address ......

// Creating new fields after object creation
// You can add new properties to an object at any time.
console.log("3 ========== ========== =========");
person.location = "Vancouver";
console.log(person.location); // Outputs: Vancouver

// Creating an object based on the fields from another object
// The spread operator (...) is used to make a shallow copy of an object and override or add properties.
console.log("4 ========== ========== =========");
const person2 = { ...person, firstName: "Rui", lastName: "Wang" };
console.log(person2.firstName); // Outputs: Rui
console.log(person2.kids); // Outputs the array of kids from the original person object
console.log(person2.email); // Outputs: c.penarrieta@northeastern.edu
person2.weight = 55;
console.log(person2); // Outputs the entire person2 object with added weight property

// // // More info on JavaScript Objects
// // // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
