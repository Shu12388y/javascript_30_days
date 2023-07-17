// async and await are the method to resolve promises.
//? we have a user login, send email to user, display the user data.


//! async function also return promise  

function userLogIn():any{
    return new Promise<void>((resolve,reject)=>{   // return a new promise
        setTimeout(():any=>{
            console.log("user sign up");
            resolve();
        },2000)

    })

}



const sendEmail=():any=>{
    return new Promise<void>((resolve,reject)=>{
        setTimeout(():any=>{
            console.log("send email");
            resolve()
        },3200)

    })

}


const userData=():any=>{
    return new Promise<void>((resolve,reject)=>{
        setTimeout(():any=>{
            console.log("user data");
            resolve()
        },2000)
    })
}


const auth= async()=>{
    try{
        await userLogIn()
        await sendEmail()
        await userData()
    }
    catch(err){
        console.log(err)

    }

}

console.log("app is working.....")
auth()