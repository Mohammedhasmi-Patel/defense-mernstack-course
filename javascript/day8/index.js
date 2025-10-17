/*
   => Object In Javascript


*/

// const user = {
//   name: "Mohammedhasmi",
//   age: 20,
// };

// // console.log(user["name"]);

// user.age = 22;
// user.aadhar = 723712;

// delete user.aadhar;
// console.log(user);

const user = {
  name: "Mohammedhasmi",
  age: 20,
  email: "hasmi@mail.com",
};

// const keys = Object.keys(user);
// const firstKey = keys[0];
// console.log(`firstkey is ${firstKey} and type is ${typeof firstKey}`)

// for (let keys in user) {
//   console.log(user[keys]);
// }

// iterate through the array

// for (let keys of Object.keys(user)) {
//   console.log(user[keys]);
// }

// for (let [key, value] of Object.entries(user)) {
//   console.log(`key is ${key} and value is ${value}`);
// }

const user2 = {
  name: "Hasmi",
  class: "MCA",
  designation: "Developer",
  hobbies: {
    cooking: "love",
    reading: "lovely",
  },
  work: function () {
    console.log("i am doing coding also");
  },
};

const another = structuredClone(user2);
// another.hobbies.cooking = "yummy";
// // console.log(user2);
console.log(another);
