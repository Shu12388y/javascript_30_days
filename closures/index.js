// What is closures ?
// A closure is the combination of function bundled together (enclosed) with references to its surrounding state (the lexical environment)


// In other word, a closure gives you access to an outer function's scope from an inner function.

// In javascript, closures are createdevery time a function is created, at function creation time.



// For example:
const OuterFun=(a)=>{
    let b=10;
    const innerFun=()=>{
        console.log(a+b)
    }
    innerFun()

}

OuterFun(2)


// Output : 12

