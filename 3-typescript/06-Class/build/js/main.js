"use strict";
// class 
class Coder {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    code() {
        console.log(`${this.name} is coding`);
    }
}
// class with modifiers
class Developer {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
    }
    code() {
        console.log(`${this.name} is coding`);
    }
    getAge() {
        return `${this.name} is ${this.age} years old`;
    }
}
const Dave = new Developer('Dave', 'Rock', 30);
console.log(Dave.getAge()); // Dave is 30 years old
console.log(Dave.name); // OK to access public property
console.log(Dave.age); // Error: can't access private property
console.log(Dave.lang); // Error: can't access protected property
// ########## Inheritance ##########
class WebDev extends Developer {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `${this.name} codes in ${this.lang}`; // instance method
    }
}
const Chris = new WebDev('Mac', 'Chris', 'Jazz', 25);
console.log(Chris.getLang()); // Chris codes in TypeScript
console.log(Chris.getAge()); // Chris is 25 years old
console.log(Chris.name); // OK to access public property
console.log(Chris.age); // Error: can't access private property
class Guitarist {
    constructor(name, instrument, age) {
        this.name = name;
        this.instrument = instrument;
        this.age = age;
        this.name = name;
        this.instrument = instrument;
        this.age = age;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Jimmy = new Guitarist('Jimmy Page', 'guitar', 75);
console.log(Jimmy.play('plays')); // Jimmy Page plays the guitar
// ########## class method/attribute ##########
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    getId() {
        return this.id;
    }
}
Peeps.count = 0; // static attribute (class attribute)
const dave = new Peeps('Dave');
const chris = new Peeps('Chris');
console.log(dave.getId()); // 1
console.log(chris.getId()); // 2
console.log(Peeps.count); // 2
class Bands {
    constructor() {
        this.dataState = [];
    }
    // getter method to access private data
    get data() {
        return this.dataState;
    }
    // setter method to update private data
    set data(value) {
        if (Array.isArray(value) && value.every((item) => typeof item === 'string')) {
            this.dataState = value;
            return; // setter method can't have a return type
        }
        else
            throw new Error('Param not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Van Halen', 'Led Zeppelin', 'The Beatles'];
console.log(MyBands.data); // ['Van Halen', 'Led Zeppelin', 'The Beatles']
MyBands.data = [...MyBands.data, 'The Rolling Stones'];
console.log(MyBands.data); // ['Van Halen', 'Led Zeppelin', 'The Beatles', 'The Rolling Stones']
MyBands.data = ['Van Halen', 'Led Zeppelin', 42]; // Error: Param not an array of strings
