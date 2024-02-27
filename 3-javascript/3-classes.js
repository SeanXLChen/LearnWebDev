class Pizza {
  // Constructor: A special method for creating and initializing an object created within a class.
  constructor(toppings = [], customer) {
    // Instance properties: Properties that belong to the object instance.
    this.toppings = toppings;
    this.customer = customer;
    // 'slices' is also an instance property, initialized with a default value of 10.
    this.slices = 10;
  }

  // Static property: A property that belongs to the class rather than any particular object instance.
  static availableToppings = ["pepperoni", "cheese", "pineapple", "mushrooms"];

  // Prototype method: A method that belongs to the class prototype. It has access to 'this'.
  eat() {
    console.log("CHOMP");
    console.log(this.toppings); // Accessing instance property
    console.log(this.slices); // Accessing another instance property
  }

  // Instance method: A method that is defined as part of the object during the construction of object instances.
  hi = () => {
    console.log("Hiiii");
    console.log(this); // 'this' refers to the instance of the object.
  };

  // Getter Property: A method that gets the value of a specific property.
  get length() {
    return this.slices; // Returns the number of slices.
  }

  // Private Fields: A class field declared with a '#' character. It can only be accessed or modified within the class.
  #bankBalance = 10000;
}

// Creating an instance of the Pizza class
const myPizza = new Pizza(["pineapple", "pepperoni"], "Cris");

// Logging the created Pizza object
console.log(myPizza);

// Calling the 'eat' and 'hi' methods on the Pizza instance
myPizza.eat();
myPizza.hi();

// Logging the available toppings using the static property
console.log(Pizza.availableToppings);

// Accessing the getter property 'length'
console.log(myPizza.length);

// More info on Classes in JavaScript:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Demo inspired by: https://github.com/wesbos/beginner-javascript
