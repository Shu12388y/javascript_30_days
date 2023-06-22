//============================= What is event Propagation============================================================================
// The event Propagtion mode determine in which order elements receive the event 




const parent=document.querySelector(".parent")
const child=document.querySelector(".child")



// In the below code when we click on the child event listerner fires and parent event listener is also fires

// We do not what that for that 

parent.addEventListener("click",()=>{
    alert("parent")
})

child.addEventListener("click",()=>{
    alert("child")
})



parent.addEventListener("click",(event)=>{
    alert("parent")
})

child.addEventListener("click",(event)=>{
    alert("child")
    event.stopPropagation()
})


// By using the stopPropagation we can prevent this above thing



//Now if we want that first the parent event fires and then the child event fires

// For that:


parent.addEventListener("click",(event)=>{
    alert("parent")
},true)

child.addEventListener("click",(event)=>{
    alert("child")
    // event.stopPropagation()
},true)




