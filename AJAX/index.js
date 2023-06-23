// AJAX stand for async. javascript and XML


// XMLHttpRequest (XHR) objectss are used to interact with server. Ypu can retrieve data from a URL without having to do full page refresh.
// This enables a web page update just part of a apge without disrupting what the user is doing XMLHttpRequest is used heavily AJAX Programming.



// How to create a request

const request = new XMLHttpRequest();
request.open("GET","api url")                          //get the data for api
request.send()                                         //send the request



//to get the is response

request.addEventListener("load",function(){                                 //this.responseText will give the response of the api     
    const your_array_name=JSON.parse(this.responseText)                     //JSON.parse will convert the json data to object
})

