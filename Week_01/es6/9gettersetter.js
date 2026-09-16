// Getters and setters and one of the useful feature introduced in ES6. It will come in handy if you are using classes in JS.

// Without:

// class People {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   setName(name) {
//     this.name = name;
//   }
// }
// let person = new People("Jon Snow");// call the name(Get)
// console.log(person.getName());
// person.setName("Dany"); // replace the name (Set)
// console.log(person.getName());

// With:

class People {
  constructor(name) {
    this.name = name;
  }
  get Name() {
    return this.name;
  }
  set Name(name) {
    this.name = name;
  }
}
let person = new People("Jon Snow");
console.log(person.Name);
person.Name = "Dany";
console.log(person.Name);
