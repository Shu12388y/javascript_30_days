// ======================================================Event==================================================================================

//Events in javascripts
// HTML events are "things" thst is happen to HTMl elements.
// When the javascript is use din the HTML page, javascript can "react" on these events

// Html events
//An html events can be something the browser does, or something a user does.

// 4 wayts of writting Events in javascript

// 1. using alert()
// 2. By calling a function
// 3. Using inline events
// 4. Using Events listeners

// const button = document.querySelector(".element");

// button.addEventListener("click", () => {
//   alert("you clicked me ");
// });

// What is Event Object?
// Event object is the parent object of the event object.
// For example
// MouseEvent, focusEvent, KeyboardEvent

// MouseEvent in javascript
// The MouseEvent Object
// Events that occurs when the mouse interact with the HTML document b
//belong to the MouseEvent Object

// ====================================================================================

// mouseEvent
//mouseUp
//mouseDown
//mouseenter
// mouseleave

const but_2 = document.querySelector("#click__1");

but_2.addEventListener("mouseenter", () => {
  but_2.style.color = "red";
  but_2.style.backgroundColor = "orange";
});
but_2.addEventListener("mouseleave", () => {
  but_2.style.color = "black";
  but_2.style.backgroundColor = "aqua";
});

const but_3=document.querySelector("#click__2")
but_3.addEventListener("mouseleave", () => {
    but_3.style.color = "red";
    but_3.style.backgroundColor = "orange";
  });

//   ======================================================================================

//KeyboardEvent in javascript
// Events that occur when the user presess a key on the keyboard
// belong to the keyboardEvent Object

//Events
//onkeypress
//onkeydown
//onkeyup

// const keys = document.querySelector(".input__class");

// keys.addEventListener("onkeypress", (e) => {
//   const display = document.querySelector(".display");
//   //   display.innerHTML == event.key;
//   console.log(e.key);
// });

const keysPush = (e) => {
  const keys = document.querySelector(".input__class");
  const display = document.querySelector(".display");

  if (keys.value != " ") {
    display.innerHTML = keys.value;
  } else {
    display.innerHTML = " ";
  }

  //   console.log(keys.value)
};

// =====================================================================================

//events

//onchange

// const options = document.querySelector("#ice-cream");

// options.addEventListener("onchange", () => {
//   const input = document.querySelector(".name__add");
//   console.log(input.value);
//   console.log(options.value);
// });


const changed=()=>{
    const input=document.querySelector(".name__add")
    const options = document.querySelector("#ice-cream")
    console.log(input.value)
    console.log(options.value)
}