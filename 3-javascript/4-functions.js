// Built-in Functions
// Math is a built-in object with properties and methods for mathematical constants and functions.
console.log(Math.max(3, 4)); // Output: 4
console.log(Math.random()); // Output: A random number between 0 (inclusive) and 1 (exclusive)

// Document is the object through which we can access and manipulate the DOM (Document Object Model).
console.log(document.getElementsByClassName("description")); // Returns a live HTMLCollection of elements with the given class name.

// Array.isArray() is a function that determines whether the passed value is an Array.
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray({})); // false

// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Calling the function with different parameters
const myBill = calculateBill(77);
console.log(myBill); // Log the returned value

// Function to say hi
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

const greeting = sayHiTo("Cris");
console.log(greeting);

// Function Expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

// Arrow Function
const doctorizeArrow = (firstName) => {
  return `Dr. ${firstName}`;
};

// // Arrow Function with implicit return
const doctorizeArrowOneLine = (firstName) => `Dr. ${firstName}`;

// IIFE - Immediately Invoked Function Expression
// function运行一次之后就再也调用不到了, for security reason
(function (age) {
  console.log(`My age is ${age}`);
})(35);

// Passing a function as a parameter
function calculateReports(amount, calcBillFunc) {
  return `Summary - ${calcBillFunc(amount)}`;
}

console.log(calculateReports(500, calculateBill));

// Callback Functions
// Click Callback
const button = document.querySelector(".clickMe"); // Select the button element
button.addEventListener("click", function () {
  console.log("Nice Job!!!");
});

function handleClick() {
  console.log("Great Clicking!!");
}

button.addEventListener("click", handleClick); // Register the function handleClick as the callback function to the click event

// Timer Callback
setTimeout(() => {
  console.log("Hello, 3 seconds passed");
}, 3000);

// // // // More info on Functions in JavaScript:
// // // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
