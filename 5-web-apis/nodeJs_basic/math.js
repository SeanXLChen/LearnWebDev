// in Node.js, we can create our own modules

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// can also be written as:
/*
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
exports.multiply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
*/

module.exports = {  // export the module
    add,
    subtract,
    multiply,
    divide,
    };

    