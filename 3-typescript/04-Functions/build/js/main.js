"use strict";
nameType; // Error: can't use type aliases with interfaces
// Literal Types
let myName;
myName = 'Dave'; // OK
myName = 'Chris'; // Error: can't assign 'Chris' to 'Dave'
let userCountry;
userCountry = 'USA'; // OK
userCountry = 'China'; // Error: can't assign 'China' to 'USA'
// ########## Functions ##########
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
const logMsgExp = (msg) => {
    console.log(msg);
};
logMsg(add(2, 3)); // 5
logMsg('Hello, World!'); // Hello, World!
let subtract = function (a, b) {
    return a - b;
};
let multiply = function (a, b) {
    return a * b;
};
let divide = (a, b) => a / b; // arrow function
console.log(multiply(2, 3)); // 6
console.log(divide(10, 2)); // 5
// 一般不用interface定义函数, interface一般用来定义Class
// interface mathFunc2 {
//     (a: number, b: number): number;
// }
// let add2: mathFunc2 = (a, b) => a + b; // interface for function
// let subtract2: mathFunc2 = (a, b) => a - b; // interface for function
// optional parameters
const addAll = (a, b, c) => {
    if (c) {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a = 10, b, c = 0) => {
    return a + b + c;
};
console.log(addAll(1, 2)); // 3
console.log(addAll(1, 2, 3)); // 6
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(3)); // always assign a default value to the first parameter with a default value, otherwise it will be undefined
// 在 JavaScript 中，默认参数值允许你在函数定义时为参数指定默认值。如果调用函数时没有提供该参数或传递的是 undefined，那么该参数会取默认值
console.log(sumAll(undefined, 2)); // 12
// Rest Parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
const total2 = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr, a);
};
console.log(total(1, 2, 3, 4, 5)); // 15
console.log(total2(1, 2, 3, 4, 5)); // 15
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infiniteLoop = () => {
    while (true) {
        console.log('Infinite Loop');
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
const numberOrString = (value) => {
    if (isNumber(value))
        return 'number';
    if (typeof value === 'string')
        return 'string';
    return createError('Value must be a number or string');
};
