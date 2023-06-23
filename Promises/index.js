// promise


// promise require fetch method
fetch("url")
.then((res)=>{
    res.json()

})
.then((data)=>{
    data
})
.catch((err)=>{
    console.log(err)
})

//for example:
const  fun=()=>{


    const setHeader={                               // here we can set the headers
        headers:{
            Accept:"application/json"
        }
    }


    fetch("url of the api", setHeader)
    .then((res)=>{                                         // here we are getting the response 
        res.json()                                         // here we are converting the html to json
    })
    ,then((data)=>{
        data                                                // here we get the data and display in the html
    })
    .catch((err)=>{
        console.log(err)
    })
}