/*
   In Javascript we will pass a function to another function which is known as callback function



*/

function greet() {
  console.log("Good Night!!!");
}

function meet(callback) {
  console.log("I am going to meet somone");
  callback();
}

meet(greet);
