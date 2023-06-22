//========================================== callBack Function=======================================================================

// Callback function 
// Function which get passed as an agrument in another to another function is called callback function.
// A callback function is a function that is passed as an agrument to another function, to be "called back at a later time "


const add=(a,b)=>{
    return a+b
}

const sub=(a,b)=>{
    return a-b
}

const multi=(a,b)=>{
    return a*b
}


const calculator=(a,b,opera)=>{
    return opera(a,b)

}


// 




console.log(calculator(1,2,add))