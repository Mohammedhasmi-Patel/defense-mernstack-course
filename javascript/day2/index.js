/*
    => in const we will not reassign the value
    => we need to assigned value when we declare const variable.


*/

const myName = "Mohammedhasmi";

console.log(myName);

/*
    => we will reassign value into it , but same variable we will nit declare again 

    eg :
      let a = 10;
      let a = 5; this will give an error

*/

let age = 18;
console.log(age);
age = 20;
console.log(age);

var college = "Sarvajanik University";
console.log(college);

/*
    => In javascript there is 2 types of data types

    1) Primitive 
        String
        Number
        boolean
        null
        undefined
        bigint
        symbol


    2) Non Primitive
        Array
        Object
        function


* */

let weather = null;
let uniqueId = Symbol("id");
console.log(uniqueId);

console.log(typeof weather);

const addition = function add() {
  return 200;
};

console.log(addition());
