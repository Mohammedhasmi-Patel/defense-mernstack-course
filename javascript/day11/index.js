/*
  => Closure in js


  => Global Scope 
          -> Acess everywhere

  => Functional Scope
          -> Accesible withing that function


  => Block Level Scope
        -> Access withing that block




*/

// let a = 10;
// const b = 20;

// function greet() {
//   console.log(10);
// }

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     return count;
//   }

//   return increment;
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

function createAccount() {
  let balance = 500;

  let user = {
    deposit: function (amount) {
      if (typeof amount == "number" && amount > 0) {
        this.balance += amount;
      }
    },

    withdraw: function (amount) {
      if (typeof amount == "number" && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
      }
    },

    getCurrentBalance: function () {
      return this.balance;
    },
  };
}
