// Spread attributes help to spread the expression as the name suggests. In simple words, it converts a list of elements to an array and vice versa.
// Example without spread attributes:

// let SumElements = (arr) => {
//   console.log(arr); // [10, 20, 40, 60, 90]
//   let sum = 0;
//   for (let element of arr) {
//     sum += element;
//   }
//   console.log(sum); // 220.
// };
// SumElements([10, 20, 40, 60, 90]);

// Example with Spread attributes

// let SumElements = (...arr) => {
//   console.log(arr); // [10, 20, 40, 60, 90]
//   let sum = 0;
//   for (let element of arr) {
//     sum += element;
//   }
//   console.log(sum); // 220.
// };
// SumElements(10, 20, 40, 60, 90);

// Or

// console.log(Math.max(10, 20, 60, 100, 50, 200)); // returns 200.

// But

// let arr = [10, 20, 60];
// console.log(Math.max(arr)); // Shows error. Doesn't accept an array.

// But

let arr = [10, 20, 60];
console.log(Math.max(...arr)); // 60
