// Every Method: Will check if every records match.
const tasks = [
  { id: 1, title: "Study React", completed: false },
  { id: 2, title: "Build API", completed: true },
  { id: 3, title: "Learn MongoDB", completed: false },
];

//Checks whether all items match.
const allComplete = tasks.every((task) => {
  return task.completed;
});

console.log(allComplete);

//OUTPUT: false , not all the recordds have completed true.
