// ============================================TimeEvents===============================================================

// The window object allows eceution of code at specified time intervals.
// These time interval are called timing event.
// The two key methods to use with javascript are:

// setTimeout(function,milisecond)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function,millisecond)
// same as setTimeout(); but repeatss the exection of the function continuously

const button = document.querySelector(".button__class");

button.addEventListener("click", callme);
function callme() {
  const name = document.querySelector(".name__classs");
  setTimeout(() => {
    name.innerHTML = "Hello, shubham";
  }, 1000);
}


