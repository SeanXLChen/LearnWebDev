
// 这个的arg就只能是string类型
const stringEcho = (arg: string): string => {
    return arg;
}

// Generic function
// 这个的arg可以是任何类型
const echo = <T>(arg: T): T => {
    return arg;
}

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)? true: false;
}

console.log(isObj([])); // false
console.log(isObj(null)); // false
console.log(isObj(1)); // false
console.log(isObj(undefined)); // false
console.log(isObj(NaN)); // false
console.log(isObj(true)); // false
console.log(isObj([1, 2, 3])); // false
console.log(isObj('string')); // false

console.log(isObj({})); // true
console.log(isObj({name: 'Sean'})); // true


// Generic function
const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
}