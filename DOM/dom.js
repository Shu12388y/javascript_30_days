// ===============================================DOM=================================================================================================

//Window Object
// 1.window is the main container or we can say the global object and any operation realted to entire browser window can be part of window object
// 2.All the members like object,methodsor properties. If they are the part of window object then we do not refer the window
// 3. Window has methods properties and object. example setTimeout() or setInterval() are the methods.
//    Whereas Document is the object of the window and it also has a screen object with properties describing the physical display

// document Object
// 1. whereas the DOM is the child of window object
// 2. Where in hte DOM we need to refer the document. If we want to use the document object, methods or properties
// 3. Document is just the object of the gobal objectthat is windows, which deals with the documwnt the HTML elementd themselves

//                                          (window)
//                             (DOM)          (BOM)         (Javascript)
//
//                           (document)     (navigator)       (Object)
//(Array)
//(Function)
//                                          (Screen)
//                                          (Location)
//                                      (XML HttpRequest)
//(history)
//(frames)
//
//
//
//
//
//  BOM - Browser Object Model

// DOM tree
//  <HTML>
//    |
// -------------
// |           |
//<BODY>     <HEAD>
//  |
//-----
//|    |
//<a>  <p>

// How to get Child Node
// It will give the child of the body tag
console.log(document.body.childNodes);

// ==============================================================================

// How to get Children

console.log(document.body.children);
// output:

// HTMLCollection(2) [div.main, script]
// 0: div.main
// 1: script
// 2:script
// 3:scriptlength
// 4
// [[Prototype]]
// :
// HTMLCollection

// =======================================================================

// How to check whether a element have childnode or not

console.log(document.body.hasChildNodes());
// output: True

//=====================================================================================

//  How to get the first child of the body

const child = document.body.firstElementChild;
console.log(child);

// =========================================================================================

// In the above we find diffcuilt to find the child
//  Rather than we can use query selector

const second_child = document.querySelector(".child__2");
console.log(second_child);

//==============================================================================================

// How to get the sibling of the element

const prev_sibling = document.body.previousElementSibling;
console.log(prev_sibling);
const sibling = document.body.nextElementSibling;
console.log(sibling);

// ==========================================================================================

// let us manipulate the elements

const firstElement = document.querySelector(".child__1");
console.log(firstElement);

firstElement.addEventListener("click", (e) => {
  firstElement.innerHTML = "hello you click me";
  firstElement.style.color = "red";
  firstElement.style.fontSize = "3rem";
//   console.log(e.scrollTop="9px")

});
