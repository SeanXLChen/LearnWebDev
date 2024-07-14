// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count)
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("enter the secret code...");
// }
// console.log("CONGRATS YOU GOT THE SECRET!!!")

// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

let max = parseInt(prompt("Choose a number"));

// NaN和任何NaN都不相等
while (isNaN(max) || max < 1) {
    max = parseInt(prompt("Please choose a valid number"));
}

// random generate 1 to max range number

const targetNum =  Math.floor(Math.random() * max) + 1 ;
console.log(targetNum);

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess ==='q') {
        break;
    }
    else if (parseInt(guess) > targetNum) {
        guess = prompt("Too high! Enter a lower number!");
    } else {
        guess = prompt("Too low! Enter a higher number!");
    }
    attempts++;
}

if (guess === 'q') {
    alert("OK, YOU QUIT!");
} else {
    alert(`You Got it! You Used ${attempts} Attempts!`);
}
