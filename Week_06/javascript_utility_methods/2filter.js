// Filter Method: Will find all records that match the statement. In this example will find all that are not "completed" where !task.completed.
const tasks = [
  { id: 1, title: "Study React", completed: false },
  { id: 2, title: "Build API", completed: true },
  { id: 3, title: "Learn MongoDB", completed: false },
];

const activeTasks = tasks.filter((task) => {
  return !task.completed;
});

console.log(activeTasks);

//OUTPUT:
// [
//   { id: 1, title: 'Study React', completed: false },
//   { id: 3, title: 'Learn MongoDB', completed: false }
// ]
