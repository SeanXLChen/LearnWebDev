// The age variable is declared but not initialized.
// It will be hoisted, so it can be accessed before the declaration,
// but it will be undefined until assigned a value.
let age;

// Here, we are accessing the age variable before it is initialized.
// It will log "undefined" to the console because of hoisting.
console.log(age); // Output: undefined

// Now, we are initializing the age variable with a value of 10.
age = 10;

// // Calling the sayHi function before its definition.
// // Due to function hoisting, this will not result in an error.
sayHi();

// // The sayHi function is declared.
// // Function declarations are hoisted to the top of the scope,
// // so they can be called before their definition in the code.
function sayHi() {
  // Logging "hey!" to the console.
  console.log("hey!"); // Output: hey!

  // Calling the add function within the sayHi function.
  // The add function is also hoisted, so it is available here.
  console.log(add(10, 2)); // Output: 12
}

// The add function is declared.
// It takes two parameters a and b, and returns their sum.
// This function is also hoisted, making it available before its declaration.
function add(a, b) {
  return a + b;
}

// More info on this
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// demo inspired https://github.com/wesbos/beginner-javascript
