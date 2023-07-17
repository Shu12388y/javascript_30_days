//! promise : It is like a callback, but in promise a function return a promise 

// we have a user-signin, send-email, show user data

//? The above events are async.


function userSignIn():any{
    return new Promise<void>((resolve,reject):any=>{
        setTimeout(():any=>{
            console.log("user sign in");
            resolve();
        },2000)
    })
}


function sendEmail():any{
    return new Promise<void>((resolve,reject):any=>{
        setTimeout(()=>{
            console.log("send email");
            resolve();
        },3000)
    })

}

function userData():any{
    return new Promise<void>((resolve,reject):any=>{
        setTimeout(()=>{
            console.log("user data");
            resolve();
        },1500)
    })
}


userSignIn()
    .then(sendEmail)
    .then(userData)
    .catch((err:any):any=>{
    console.log(err)
})