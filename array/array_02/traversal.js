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



// =======================================================================================================================================

// let us see the push() method

names.push("deepak")
console.log(names)


// push() method  adds one or more elements to the end of an array and returns the new length of the array

// =======================================================================================================================


 //let us see unshift() method

//unshift method adds one or more elements to the begining of an array and return the new length of the array


 names.unshift("neoman")
 console.log(names)


// =======================================================================================================================

  //pop() method

  //it remove the last element of the array and return that element and this method change the lenght of the array

  names.pop()

// =======================================================================================================================



  // shift() method .
  //It remove the element from the front of the array


  names.shift()


// =======================================================================================================================



// Challenge 



// Given array
//1. Add Dec at the end of array
//2. Update march to March
//3. delete June from the array

const months=["jan","Feb","march","April","June","July"]



// months.push("Dec")
months[2]="March"
months[4]="Junly"
months[5]="Dec"


const newer=months
console.log(newer)


//output:  [ 'jan', 'Feb', 'March', 'April', 'Junly', 'Dec' ]



// =======================================================================================================================


// let us see the slice() method
//slice method used to delete the elements from an array and it return an array of deleted elements

// slice(index_postion_of_starting,number_of_element_to_delete,"string to add")


//let solve the above problem using slice method

// let us add the "Dec at end"

months.slice(months.length,0,"Dec")


//Now update the "march"

const findIndex=months.indexOf("march")
months.slice(findIndex,1,"March")


// Now delete "June"

const findsIndex=months.indexOf("June")
months.slice(findsIndex,1)



console.log(months)


// output: [ 'jan', 'Feb', 'March', 'April', 'Junly', 'Dec' ]

// =======================================================================================================================



