//? static is used to define property and method

class User{

    // static property
    //? we can only use static property and method referring the class not the instance.

    //? ex: user1.compareAge() will not work.

    //? to use compareAge we have to use User.compareAge() .
    
    static id=1;

    constructor(name,age){
        this.name=name;
        this.age=age;
        this.id=User.id++
    }


    // static method
    static compareAge(a,b){
        return a.age - b.age

    }
}

let user1=new User("shubham",20)
let user2= new User("Jhon",60);
let user3= new User("Asp",43)

let userArray=[];
userArray.push(user1,user2,user3)
console.log(userArray)

// console.log(userArray.sort(User.compareAge))