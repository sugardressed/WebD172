// Object spread method: This works when there is no block around the array which is the [ ], this one has {} alone which make this an object, not necessarily the block, when the [] is absent we can still use the ... spread
const task = {
  id: 1,
  title: "Study React",
  completed: false,
};

const updatedTask = {
  ...task,
  completed: true,
};

console.log(updatedTask);

//OUTPUT:
//{ id: 1, title: 'Study React', completed: true }
