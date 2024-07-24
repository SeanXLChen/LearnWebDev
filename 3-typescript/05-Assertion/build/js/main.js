"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
// 这个格式React里面用不了
let d = 'world';
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return a.toString() + b.toString();
};
let myVal = addOrConcat(1, 2, 'concat'); // not OK
let myVal2 = addOrConcat(1, 2, 'concat'); // OK
// Be carefule! TS sees no problem - but a string is returned
let myVal3 = addOrConcat(1, 2, 'concat');
10; // Error: can't assign number to string
10; // Error: can't assign unkown to string
// The DOM
const img = document.querySelector('img');
img.src; // OK
const myImg = document.getElementById('myImgId');
myImg.src; // Error: Property 'src' does not exist on type 'HTMLElement'
const myImg2 = document.getElementById('myImgId');
myImg2.src; // OK
