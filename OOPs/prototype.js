//? Prototypes are empty object 
//? we can add property to a constructor function


function BankAccount(name,balance=0){
    this.name=name;
    this.balance=balance;
    this.accountNumber=Math.round(Math.random()*1000)
}


//? let define prototypes

//? prototypes are used for better memory management

BankAccount.prototype.deposit=function(deposit){                //? here we have create a prototype name deposit
    this.balance += deposit;
}


BankAccount.prototype.withDraw=function(withdraw){
    this.balance -=withdraw;
}


// console.log(new BankAccount("shubham",1000))

//? output:
// BankAccount { name: 'shubham', balance: 1000, accountNumber: 623 }    //? Here in the output you can't see the deposit and withdraw property 
                                                                         //? Because we have made it prototype. This make it memory managment better.
                                                                         //? Prototype are used when a property is used to replied.
                                                                         //? so we have a prototype of it and used it.

let user1=new BankAccount("shubham",1000);
let user2=new BankAccount("jhone")

let dataArray=[]
dataArray.push(user1,user2)
// user1.deposit(3000)
// user1.withDraw(240)
// console.log(user1)

// console.log(dataArray[0].deposit(3000))
// user1.deposit(10000)
// user2.deposit(500);
// user1.withDraw(4000)
console.log(dataArray[0].balance)