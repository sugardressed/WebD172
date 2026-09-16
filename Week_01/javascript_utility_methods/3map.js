const tasks = [
  { id: 1, title: "Study React", completed: false },
  { id: 2, title: "Build API", completed: true },
  { id: 3, title: "Learn MongoDB", completed: false },
];

const taskTitles = tasks.map((task) => {
  return task.title;
});

console.log(taskTitles);
