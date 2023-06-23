//===========================================  Synch. and Asynch. JS ================================================================================================

// Synchoronous js

const fun1 = () => {
  console.log("fuction 1");
};

const fun2 = () => {
  console.log("function 2");
  fun1();
};

fun2();

// Asynchoronous JS

const fun3 = () => {
  console.log("function 3");
  setTimeout(() => {
    console.log("function 4");
  }, 1000);
};


fun3()