// FindIndex method: This finds the position of the item starting from the position index [0]
const tasks = [
  { id: 1, title: "Study React", completed: false },
  { id: 2, title: "Build API", completed: true },
  { id: 3, title: "Learn MongoDB", completed: false },
];

//Finds the position of an item rather than the item itself.

const taskIndex = tasks.findIndex((task) => {
  return task.id === 2;
});

console.log(taskIndex);

//OUTPUT: 1
