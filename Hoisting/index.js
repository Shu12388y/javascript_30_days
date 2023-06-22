//============================================== Hositing in Javascript ======================================================================

// we have a creation phase and execution phase

//Hoisting in javascript is mechanism where variables and functions declarations are moved to the top of their cope before the code execute



//For example:
console.log(myName)
var myName;
myName="shubham"


//Output: undefined


//How it will be ouput during creation
// 1. var myName
// 2. console.log(myName)
// 3. myName="shubham"

//Hoisting example


// If we use let

console.log(myName)
let myName;
myName="shubham"


// Output: Cannot access 'myName' before initialization


