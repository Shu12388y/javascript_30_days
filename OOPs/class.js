//? class is like a constructor function, but it is beautify it .
//? for define a class we have use keyword "class"

class BankAccount{

    //? properties of class
    customerName;
    accountNumber;
    balance=0;

    //? for passing the value we use constructor
    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.balance=balance;
    }


    //? for define a prototype's

    deposit(amount){
        this.balance +=amount;

    }
    withdraw(amount){
        this.balance -= amount;
    }
}


let user1=new BankAccount("shubham")


// Output:
// BankAccount {
//     customerName: 'shubham,1000',
//     accountNumber: 1689664189513,
//     balance: 0
//   }


user1.deposit(1000)
user1.withdraw(5)

console.log(user1)