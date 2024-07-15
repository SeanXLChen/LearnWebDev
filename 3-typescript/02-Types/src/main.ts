let myName: string;
let meaningOfLife: number;
let isLoading: boolean;

let flexible: any; // can be any type
let union: string | number; // can be either string or number
let isActive: number | boolean | string; // can be multiple types

let re: RegExp = /\w+/g; // regular expression type

myName = 'Dave';
myName = 'Chris';  // can be reassigned
meaningOfLife = 42;
isLoading = true;

const sum = (a, b) => {  // implicit assignment of any type
    return a + b;
}

const multiply = (a: number, b: number) => {  // explicit assignment type of number || implicit return type of number
    return a * b;
}

const divide = (a: number, b: number): number => {  // all explicit
    return a / b;
}