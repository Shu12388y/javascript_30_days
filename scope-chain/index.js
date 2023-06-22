// What is scope chain and lexicalscoping in javascript?


// The scope chainis used to resolve the value of variable names is JS
// scope chain in js is lexically defined, which means that we can see what the scope chain will be looking at the code .
// At the top, we have the global scope, which is the window object in the browser
// Lexical scoping menas Now, the inner function can get access to their parent function varibles But the vice-versa is not true. 


// For Example:
 

let a ="hi ";  //global scope

let first=()=>{
    b="shubham "
    let second=()=>{
        c="how are you"
        console.log(a+b+c)
    }
    second()
}
first()