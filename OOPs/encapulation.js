//? encapulation is used to encapsulate the method and propeties
//? Things that we do not want to people to access directly
//? we make it private. we can only use it inside that class and we can use it in sub class

class BankAccount{
    userName;
    id;
    #balance=0;  // !For make it private we use "!"


    constructor(userName,balance=0){
        this.userName=userName;
        this.id=Date.now();
        this.#balance=balance;

    }

    //? to get the private value we use get method
   getBal(amount){
    this.#balance=amount;
    console.log(this.#balance)

   } 

   #CalInterrest(amount){
    this.inter=amount;
    if(this.inter>1000){
        console.log("Interest is 3%")
    }
    else{
        console.log("Interest is 1.5%")
    }
   }
   

   Loan(amount){
    this.#CalInterrest(amount);
    if(amount>3000){
        console.log("loan approve")
    }
    else{
        console.log("loan deny")
    }
   }

}


let user1=new BankAccount("shubham",2000);
// console.log(user1)
user1.Loan(20000)