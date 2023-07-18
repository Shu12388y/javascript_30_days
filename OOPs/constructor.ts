//? OOPs stands for object oriented programming 
//? To create a constructor function the function's first letter used be captial
//? In the constructor function it consist of object and properties


//? In this exmple we are creating a banking function where we can add customer name, amount, account number



function BankAccount(this:any, customerName:string,balance:number=0):any{   // *constructor function
    this.customerName=customerName;              //? this are called properties
    this.accountNumber=Date.now();                 //? we use "this" keyword for defining the varibles inside the constructor function 
    this.balance=balance
}
// let account1=new BankAccount("shubham",1200)






