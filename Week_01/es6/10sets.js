// Sets are used to store the unique values of any type.

// var sets = new Set();
// sets.add("a");
// sets.add("b");
// sets.add("a"); // We are adding duplicate value.
// for (let element of sets) {
//   console.log(element);
// }

// Note that no duplicate values are displayed. Unique values are displayed.
// And also note that sets are iterable objects. We have to iterate through the elements to display it.
// Other useful methods:

var sets = new Set([1, 5, 6, 8, 9]);
console.log(sets.size); // returns 5. Size of the size.
console.log(sets.has(1)); // returns true.
console.log(sets.has(10)); // returns false.

// In the above example, size is self-explanatory. There is another method ‘has’ which returns a boolean value based on whether the given element is present in the set or not.
