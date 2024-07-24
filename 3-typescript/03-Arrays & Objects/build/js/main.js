"use strict";
// ###### ARRAYS ######
// Implicitly typed arrays
let stringArr = ['a', 'b', 'c']; // inferred as string[]
let guitars = ['Strat', 'Les Paul', 5150]; // inferred as (string | number)[]
let mixedData = ['EVH', 5150, true]; // inferred as (string | number | boolean)[]
let test = []; // inferred as any[]
stringArr[0] = 42; // Error: can't assign number to string Array
stringArr[1] = 'Sean'; // OK
stringArr.push('Eddie'); // OK
guitars[0] = 1002; // OK
guitars[1] = 'Tele'; // OK
guitars.unshift('SG'); // OK
stringArr = guitars; // Error: can't assign (string | number)[] to string[]
guitars = stringArr; // OK
guitars = mixedData; // Error: can't assign (string | number | boolean)[] to (string | number)[]
mixedData = guitars; // OK
// Explicitly typed arrays
let bands = [];
let isActive = [1, true, 0, false];
bands.push('Van Halen');
// ########## Tuple ##########
// 只有TypeScript有Tuple，JavaScript没有
// Tuple: fixed number of elements with fixed types
let myTuple = ['Van Halen', 5150, true];
let mixed = ['Sean', 1, false]; // this is a array
mixed = myTuple; // OK
myTuple = mixed; // Error: can't assign (string | number | boolean)[] to [string, number, boolean]
myTuple[0] = 'Eddie'; // OK
myTuple[1] = 1984; // OK
myTuple[2] = false; // OK
myTuple[3] = 'Sammy'; // Error: can't add a fourth element to a Tuple
myTuple[0] = 5150; // Error: can't assign number to string, position is fixed
// ########## Objects ##########
let myObj;
myObj = []; // OK (array is an object)
myObj = {}; // OK (object is an object)
myObj = stringArr; // OK (array is an object)
console.log(typeof myObj); // object
// implicit object type
const exampleObj = {
    prop1: 'value1', // all props are implicitly typed
    prop2: 2,
    prop3: true,
    prop4: ['a', 'b', 'c'],
    prop5: {
        nestedProp: 'nestedValue'
    }
};
exampleObj.prop1 = 'new value'; // OK
exampleObj.prop2 = 42; // OK
exampleObj.prop3 = false; // OK
exampleObj.prop1 = 42; // Error: can't assign number to string
// instance of Guitarist
let evh = {
    name: 'Eddie Van Halen',
    active: true,
    albums: ['Van Halen', '1984', 5150]
};
let jp = {
    name: 'Jimmy Page',
    albums: ['Led Zeppelin', 'Physical Graffiti', 4]
};
evh = jp; // OK
jp = evh; // OK
evh.years = 40; // Error: can't add new property to object, add to type first
const greetGuitarist = (guitarist) => {
    var _a;
    return `Hello ${guitarist.name}! AKA ${(_a = guitarist.nickName) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
};
console.log(greetGuitarist(jp)); // Hello Eddie Van Halen!
/// ########## Enum ##########
// "Unlike most TypeScript features, enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A); // 5
