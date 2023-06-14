//arrays 
//The Array object is used to store multiple values in a single variable.//


//let us define a array


const names=["shubham","sbhishek","kunal"]
//Above array consist of names of the peoples
//
//Let print is
//
//
console.log(names);

//If we wha to print a particular element we havw to use index number
//
//
//
  let indexValue=prompt("enter the index value");
let valueso=names[indexValue];


if(indexValue>names.length){
  alert("Value is large");

}
else{
  
  console.log(names[indexValue]);
}


const elements=document.getElementsByClassName("names");
console.log(elements)
elements.innerHTML==valueso
