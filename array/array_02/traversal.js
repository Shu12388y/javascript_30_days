// let us create an array and transverse it
//tranversal means go through each element for visiting each element in an array


const names=["shubham","kunal","sourav","abhishek"]

//let us log the array

console.log(names)

//output: [ 'shubham', 'kunal', 'sourav', 'abhishek' ]



// ===============================================================================================================================

// we don't want the whole array but the element of the array


//using a for loop
for(var i=0;i<names.length;i++){
    console.log(names[i])
}

//ouput : shubham
//         kunal
//         sourav
//        abhishek

// ==================================================================================================================================


//let us see how get the last element of the array


console.log(names[names.length-1])

// output: abhishek



//==========================================================================================================================================//


//Now let use the for in loop


for(let element in names){
    console.log(names[element])
}


//output:shubham
//       kunal
//       sourav
//       abhishek



// ============================================================

//Now let use the for of loop




for(let element of names){
    console.log(element)
}


//output:shubham
//       kunal
//       sourav
//       abhishek



//Difference between for in loop and for of loop
//in for in loop when we console.log elements we get the index numbers but in for of loop we get the elements of the array


// ==================================================================================================================================


//Now let use see the forEach() method


names.forEach(function(element,index,array){
    console.log(element)
    
})


//output:shubham
//       kunal
//       sourav
//       abhishek



//In forEach() method we get the elements of the array and the index of the elements and the array itself

// ==========================================================================================================================



// let us see the indexof method


