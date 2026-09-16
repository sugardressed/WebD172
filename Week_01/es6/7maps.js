// Map holds key-value pairs. It’s similar to an array but we can define our own index. And indexes are unique in maps.
// Example:

// const NewMap = new Map();
// NewMap.set("name", "John");
// NewMap.set("id", 2345796);
// NewMap.set("interest", ["js", "ruby", "python"]);
// console.log(NewMap.get("name")); // John
// console.log(NewMap.get("id")); // 2345796
// console.log(NewMap.get("interest")); // ['js', 'ruby', 'python']

// Other interesting features of Maps are all indexes are unique. And we can use any value as key or value

// const map = new Map();
// map.set("name", "John");
// map.set("name", "Andy");
// map.set(1, "number one");
// map.set(NaN, "No value");
// console.log(map.get("name")); // Andy. Note John is replaced by Andy.
// console.log(map.get(1)); // number one
// console.log(map.get(NaN)); // No value

// Or

// const map = new Map();
// map.set("name", "John");
// map.set("id", 10);
// console.log(map.size); // 2. Returns the size of the map.
// console.log(map.keys()); // outputs only the keys.
// console.log(map.values()); // outputs only the values.
// for (let key of map.keys()) {
//   console.log(key);
// }

// In the above example, map.keys() returns the keys of the map but it returns it in Iterator object. It means that it can’t be displayed as it is. It should be displayed only by iterating

// And More:

// const map = new Map();
// map.set("name", "Jane");
// map.set("id", 20);
// for (let element of map) {
//   console.log(element);
// }

// Or

const map = new Map();
map.set("name", "Peet");
map.set("id", 50);
for (let [key, value] of map) {
  console.log(key + " - " + value);
}
