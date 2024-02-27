const user = "Cristian";

document
  .getElementById("button-with-functionality")
  .addEventListener("click", function showAlert() {
    console.log("hello from a button", user);
    console.log('======= test =======')
    window.alert("Hello world!");
  });
