// in terminal: node node_basic.js

// Node.js is a runtime environment that allows you to run JavaScript on the server side.
// It is built on Chrome's V8 JavaScript engine.

// The console is the terminal window
console.log("Hello, Node.js!");

// The global object is a global variable that provides variables and functions available anywhere.
console.log(global);

// Has common core modules like fs, http, and url
// CommonJS modules are used to import and export modules in Node.js
const os = require("os");
const path = require("path");

/*
console.log(os.type());
console.log(os.platform());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));
console.log(path.join(__dirname, "test", "hello.html"));
*/

const math = require("./math"); // import our own module
console.log(math.add(5, 5));
console.log(math.subtract(5, 5));


const { add, subtract, multiply, divide } = require("./math"); // import specific functions
console.log(add(5, 5));
