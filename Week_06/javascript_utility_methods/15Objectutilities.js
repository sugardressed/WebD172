// REACT OBJECT UTILITIES
const task = {
  title: "Learn React",
  completed: false,
};

// This will bring keys
console.log(Object.keys(task));
//OUTPUT: [ 'title', 'completed' ]

// This will bring values
console.log(Object.values(task));
//OUTPUT: [ 'Learn React', false ]

// This will bring entries
console.log(Object.entries(task));
//OUTPUT: [ [ 'title', 'Learn React' ], [ 'completed', false ] ]
