//? inheritance use DRY
//? DRY means don't repeat yourself

//? Inheritance we used when we want to use the property of parent class in the child class


class BankAccount{
    userName;
    id;
    balance=0;

    constructor(userName,balance=0){
        this.userName=userName;
        this.id=Date.now();
        this.balance=balance
    }

    deposit(amount){
        this.balance +=amount;

    }
    withdraw(amount){
        this.balance -=amount;
    }
}


//? let create a saving account


class SavingAccount extends BankAccount{
    limit=2000;
    // flag=false

    constructor(userName,balance=0){
        super(userName,balance)
        
    }

    personalLoan(amount){
        if(this.balance>3000){
            console.log(`Your loan of ${amount} is approved`)
        }
        else{
            console.log("denied")
        }
    }

    checkWithDraw(amount){
        if(this.balance>this.limit){
            console.log("amount is withdraw");
            console.log(`Remaining amount is ${this.balance-amount}`)

        }
        else{
            console.log("you can not withdraw")
        }
    }
        
}









let user1=new BankAccount("shubham",1000);
let user2=new SavingAccount("shubham",500)


// console.log(user2)
// console.log(user2.personalLoan(4000))
// user2.deposit(8000)
// user2.withdraw(15000)

// user2.checkWithDraw(1000)



// console.log(user2)
// 





  

// =======================================================================================// =======================================================================================


// inheritance in constructor function



function Bank(name,balance=0){
    this.name=name;
    this.id=Date.now();
    this.balance=balance;
}
Bank.prototype.deposit=function(depositAmu){
    this.balance +=depositAmu
}


function Loan(name,balance=0,amount=0){
Bank.call(this,name,balance)     //? .call() is used to inhert the parent property
limit=700;
if(this.balance<1000){
    console.log("loan not approve")
}
else{
    console.log(`your loan is approved that is ${amount}`);
    this.balance +=amount;
    console.log(this.balance)
}

}
Loan.prototype=Object.create(Bank.prototype)           //? To inherit the prototype of the parent prototype

// let newUser1=new Bank("kunal",3000)
let newUser1 = new Loan("shubham",100)
newUser1.deposit(1000)
console.log(newUser1)