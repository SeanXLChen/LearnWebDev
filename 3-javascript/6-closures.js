// A closure occurs when a function is able to remember
// and access its lexical scope (variables from its surrounding scope)
// even when that function is executing outside its lexical scope.
// This behavior is what enables JavaScript developers to create data privacy,
// partial application of functions, currying, event handlers and callbacks,
// among other things.

function outer() {
  const outerVar = "I am the outer Var!"; // Variable in the outer function

  function inner() {
    const innerVar = "I am an inner var!"; // Variable in the inner function
    console.log(innerVar); // Can access its own variable
    console.log(outerVar); // Can access variable from the outer function due to closure
  }

  return inner; // Returning the inner function
}

// This would return an error, as outerVar is not in scope here
// console.log(outerVar)

const innerFn = outer(); // outer() returns the inner function, which is assigned to innerFn
innerFn(); // Calls the inner function, which has access to outerVar due to closure

console.log("=======================");

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase(); // Converts greeting to uppercase

  return function (name) {
    return `${myGreet} ${name}`; // Returns the personalized greeting
  };
}

// Creating different greeting functions using closures
const sayHello = createGreeting("hello");
const sayHey = createGreeting("hey");

console.log(sayHello("Cris"));
console.log(sayHello("Mirian"));
console.log(sayHey("Clara"));
console.log(sayHey("Mirian"));

console.log("=======================");

function createGame(gameName) {
  let score = 0; // Keeps score in the closure

  return function win() {
    score++; // Increment score within the closure
    return `Game ${gameName} score is ${score}`; // Returns the current score
  };
}

// Creating different game scoring functions using closures
const basketballGame = createGame("Basket");
const soccerGame = createGame("Soccer");

console.log(basketballGame());
console.log(basketballGame());
console.log(soccerGame());
console.log(soccerGame());
console.log(soccerGame());
console.log(basketballGame());

// // More info on this
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// // demo inspired https://github.com/wesbos/beginner-javascript
