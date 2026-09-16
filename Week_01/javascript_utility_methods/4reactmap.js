const tasks = [
  { id: 1, title: "Study React", completed: false },
  { id: 2, title: "Build API", completed: true },
  { id: 3, title: "Learn MongoDB", completed: false },
];

const updatedTasks = tasks.map((task) => {
  if (task.id === 2) {
    return {
      ...task, //... means spread, and means bring everything in the array in this case.
      completed: false,
    };
  }

  return task;
});

console.log(updatedTasks);
