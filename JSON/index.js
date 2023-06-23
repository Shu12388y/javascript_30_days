// JSON

//this is object


let my_object={
    key:1,
    name:"shubham",
    value:true
}


//if we want to convert it to json, we hve to use JSON.stringify()

let var_json=JSON.stringify(my_object)

console.log(var_json)

//OUTPUT:{"key":1,"name":"shubham","value":true}



// If we want to convert the JSON to Object we have use JSON.parse()

let new_object=JSON.parse(var_json)
console.log(new_object)


// Output: { key: 1, name: 'shubham', value: true }