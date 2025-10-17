/*
  Arithmetic Operator :
      Basically Maths calculation like + , = , * , \ , % modulo etc


  Comparison operator : compare value using > , < , >= , <=,== etc

*/

let num1 = 12;
let num2 = "12";

// javascript convert the string into number & then compare
console.log(num1 == num2);
// here first check data type of both value if different data type then return false
console.log(num1 === num2);

// type casting

let bool = true;
console.log(Number(bool));
console.log(Number(undefined));

// convert number into string
let num = 55;
console.log(String(num));

// Big Challange of computer science

// let a = 0.1;
// let b = 0.2;
// let c = a + b;

// console.log(c);

// null is loosely equal to undefined
console.log(`undefined == null ${undefined == null}`);
// when we applie > , < ,>= , <= then null convert to 0

console.log(`null > 0 ${null > 0}`);
console.log(`null >= 0 ${null >= 0}`);
console.log(`null < 0 ${null < 0}`);
console.log(`null >= 0 ${null >= 0}`);
