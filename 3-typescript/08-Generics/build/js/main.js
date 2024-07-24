"use strict";
// 这个的arg就只能是string类型
const stringEcho = (arg) => {
    return arg;
};
// Generic function
// 这个的arg可以是任何类型
const echo = (arg) => {
    return arg;
};
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null) ? true : false;
};
console.log(isObj([])); // false
console.log(isObj(null)); // false
console.log(isObj(1)); // false
console.log(isObj(undefined)); // false
console.log(isObj(NaN)); // false
console.log(isObj(true)); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj('string')); // false
console.log(isObj({})); // true
console.log(isObj({ name: 'Sean' })); // true
// Generic function
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
