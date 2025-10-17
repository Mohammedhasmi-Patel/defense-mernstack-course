// const arr = [1, 2, 3, "Hasmi", "Madni"];

// arr.forEach((val) => {
//   console.log(val);
// });

// let sum = 0;

// arr.forEach((val) => {
//   if (typeof val == "number") {
//     sum += val;
//   }
// });

// console.log(sum);

// let numbers = [10, 25, 39, 92, 82, 100];

// numbers.filtering = function (compare) {
//   const ans = [];
//   for (let num of this) {
//     if (compare(num)) {
//       ans.push(num);
//     }
//   }
//   return ans;
// };

// let filterValues = numbers.filtering((num) => num > 10);
// console.log(filterValues);

Array.prototype.myMap = function (callback) {
  // console.dir(callback);
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

Array.prototype.myFilter = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4, 5];
const arr2 = arr.myFilter((num) => num % 2 == 0);
console.log(arr2);
