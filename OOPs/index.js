// ======================================================OOPs=======================================================================================/

// What is Object literals?
// Object literal is simply a key:value pair data structure

// Storing variables and function together in one container
// we can rfer this as an object

// How to create a object

let name = {
  Name: "shubham",
  Rollno: 39,
  class: 12,
  section: "A",
};
let name1 = {
  Name: "Kunal",
  Rollno: 19,
  class: 12,
  section: "A",
};
// console.log(name)

//Output: { Name: 'shubham', Rollno: 39, class: 12, section: 'A' }

// Now if we want to access a particular value

// console.log(name.Rollno)

// let data=[]
// // data.push(name.Name)
// // data.push(name.Rollno)
// // data.push(name.class)
// // data.push(name.section)

// data.push(name)
// data.push(name1)

// console.log(data)

// for(let element in data){
//     console.log(data[element])
// }

// for(let element of data){
//     console.log(element.Name,element.Rollno)
// }

// ===================================================================================================================================================

// What is "this" object?
// The definition of "this" object is that it contain the current context.
// The this object can have different values depending on where it is palced.

// it refer to the current context and that is window global object

// const fun = () => {
//   console.log(this);
// };
// fun();

// //example 1:
// var new_name="shubham"
// function new_fun(){
//     console.log(this.new_name)
// }
// new_fun()



const obj={
    myAge:26,
    myname(){
        console.log(this)  // here this oject is refering to obj object it context changed 
    }
}
obj.myname()

// output { myAge: 26, myname: [Function: myname] }



//  In arrow function we cannot use this object 