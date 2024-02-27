// --- Simple button clicks ---
const button1 = document.querySelector(".simple-click-1");
const button2 = document.querySelector(".simple-click-2");

function handleClick(e) {
  console.log("Button 1 clicked!");
}

button1.addEventListener("click", handleClick);
button2.addEventListener("click", function (e) {
  console.log("Button 2 clicked!");
});

button1.removeEventListener("click", handleClick);  // callback function can also be removed

// --- Demonstrating mouseenter event ---
const photoElement = document.querySelector(".sample-photo");
photoElement.addEventListener("mouseenter", (e) => {     // hover
  console.log("Hovered over the image:", e.currentTarget);
});

// ================================================

// --- Handling dataset attributes and event target/currentTarget ---
function handleBuyButtonClick(event) {
  console.log("Button clicked:", event.target);   // event.target is where the click occurred
  console.log("Current Target", event.currentTarget);   // event.currentTarget is the element that has the event listener attached
  console.log("Text of the Button clicked:", event.target.textContent);
  console.log(
    "Difference between target and currentTarget:",
    event.target === event.currentTarget
  );
  console.log("Price of the Button:", event.target.dataset.price);
}

const buyButtons = document.querySelectorAll("button.buy");
buyButtons.forEach((button) => {
  button.addEventListener("click", handleBuyButtonClick);
});

// // //================================================

// // // --- Demonstrating event bubbling and propagation ---
const paragraphEl = document.querySelector(".inner-paragraph");
const container1 = document.querySelector(".container-1");
const container2 = document.querySelector(".container-2");
const container3 = document.querySelector(".container-3");

container1.addEventListener("click", () =>
  console.log("Clicked inside container 1")
);
container2.addEventListener("click", () =>
  console.log("Clicked inside container 2")
);
container3.addEventListener("click", () => {
  console.log("Clicked inside container 3");
});
paragraphEl.addEventListener("click", (e) => {
  console.log("Clicked inside the inner paragraph");
  e.stopPropagation();   // this will stop the bubble up behavior
});

window.addEventListener("click", () => console.log("Clicked on the window"));

// // // ================================================
