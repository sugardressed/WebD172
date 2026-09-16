const tasks = [
  { id: 1, title: "Study React", completed: false },
  { id: 2, title: "Build API", completed: true },
  { id: 3, title: "Learn MongoDB", completed: false },
  { title: "Testing", completed: false, id: 4 },
];

//Finds the position of an item rather than the item itself.

const taskIndex = tasks.findIndex((task) => {
  return task.id === 4; // This finds the Key ID position.
});

console.log(taskIndex);
