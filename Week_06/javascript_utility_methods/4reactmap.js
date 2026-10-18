const tasks = [
  { id: 1, title: "Study React", completed: false },
  { id: 2, title: "Build API", completed: true },
  { id: 3, title: "Learn MongoDB", completed: false },
];

const updatedTasks = tasks.map((task) => {
  // If task is equaly to 2
  if (task.id === 2) {
    //Then
    return {
      // Spread or display the entire array
      ...task,
      // Change only the field "complete" to false
      completed: false,
    };
  }

  return task;
});

console.log(updatedTasks);
//OUTPUT:
//  { id: 1, title: 'Study React', completed: false },
//   { id: 2, title: 'Build API', completed: false },
//   { id: 3, title: 'Learn MongoDB', completed: false }
