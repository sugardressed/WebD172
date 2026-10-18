// Spread Method: This one will return the original array adding any new record. The ... is called spread (display), in this example the spread is the original task array and adding the new task record, so it will display the array with two records
const originalTasks = [{ id: 1, title: "Study React" }];

//This is the new record to be added to the original array
const newTask = {
  id: 2,
  title: "Learn Express",
};
//Here is calling the updated array, displaying original array + new task.
const updatedTasks = [...originalTasks, newTask];

console.log(updatedTasks);

// OUTPUT:
//[ { id: 1, title: 'Study React' }, { id: 2, title: 'Learn Express' } ]
