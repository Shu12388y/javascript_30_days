//! promise : It is like a callback, but in promise a function return a promise 
// we have a user-signin, send-email, show user data
//? The above events are async.
function userSignIn() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("user sign in");
            resolve();
        }, 2000);
    });
}
function sendEmail() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("send email");
            resolve();
        }, 3000);
    });
}
function userData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("user data");
            resolve();
        }, 1500);
    });
}
userSignIn().then(sendEmail).then(userData);


console.log("application is working")
