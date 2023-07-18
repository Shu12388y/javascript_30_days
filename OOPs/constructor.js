//? OOPs stands for object oriented programming 

//? To create a constructor function the function's first letter used be captial

//? In the constructor function it consist of object and properties

//? In this exmple we are creating a banking function where we can add customer name, amount, account number





function BankAccount(customerName, balance) {
    this.customerName = customerName; //? this are called properties
    this.accountNumber = Math.round((Math.random()*1000)); //? we use "this" keyword for defining the varibles inside the constructor function 
    this.balance = balance;

    //? let us define some methods
    this.deposit=function(deposit){     //? we have define a method called deposit
        this.balance +=deposit
    }
}


let account1=new BankAccount("shubham", 1200)
account1.deposit(3000)

console.log(account1)


// console.log(new BankAccount("shubham", 1200));

//! Output:
// BankAccount {
//     customerName: 'shubham',
//     accountNumber: 1689606725949,
//     balance: 1200
//   }

// BankAccount {
//     customerName: 'shubham',
//     accountNumber: 39,
//     balance: 4200,
//     deposit: [Function (anonymous)]
//   }