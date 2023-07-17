// @ts-ignore
//! callback
//! when a function take function as a agrement is known as higher order function
//! callback are used for async. operation
//! For example: We are make a user page, when user signin after that email is send, and we display the user data.
//! In this we can have a scene that when user is log in it will take some time, then after we can send the email and display data
//! In it is async. code. It is depending on the previous action

// ? let us create a function

//? we have created the functions and us create async.

//? The below function are exectuion time is different



//? We use async. js when we do not know how much time a function will take to execute. That's why we use callback
//! syntax: function first(){
    // you code
//! }

//! function second(){
    // your code
//! }

//? you want that first function run first and then second. But function first take time 2min to execute and function second takes 1ms to execute
//? for that we will use callback

// first(function{
//     second()
// })



function signIn(callback){
    setTimeout(():any=>{
        console.log("signin")
        callback()

    },2000)
}
function sendEmail(callback:any){
    setTimeout(():any=>{
        console.log("send email")
        callback()
    },3000)
}

function Userdata(){
    setTimeout(():any=>{
        console.log("user data")
    },4000)
}


console.log("application is running")




//? This is callback

signIn(function(){
    sendEmail(function(){
        Userdata();

    });

});