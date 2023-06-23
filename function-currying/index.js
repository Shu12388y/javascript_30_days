// currying is a techinque of evaluating function with multiple argument, into sequence of function with single agrument

//In the other word, when the funciton instead of taking all agrument at one time, take  the first one and return a new function that takes the
//second one and return a new funciton which takes the third one and so forth, until all agrument have been fulfilled


//That is when we turn a function call add(1,2,3) into add(1)(2)(3).
// By using this technique, the little piece can be configured and reuse with ease.



//Example;

function sum(a){
    return function(b){
        return function(c){
            console.log(a+b+c)
        }
    }
}

sum(1)(2)(3)
