// ================================================Destructing=====================================================================================

// Array destructing

let new_file = ["shubham.pdf", "kunal.pdf", "abhishek.pdf"];

// let[,,abhishek_data]=new_file

// console.log(abhishek_data)

// In array destruction we can also access or add new data

let [, , , sourav_data = "sourav.pdf"] = new_file;

console.log(sourav_data);





// Object Destructiong
let bioData

let obj={
    name:"shubham",
    age:13,
    height:"5feet 9inch"
}


let {name,age,height}=obj
console.log(name)
console.log(age)
console.log(height)



// How to pu dynamic data in objects


let named="shubham"

let new_obj={
    [named]:"hello"

}
console.log(new_obj)

// Output: { shubham: 'hello' }
