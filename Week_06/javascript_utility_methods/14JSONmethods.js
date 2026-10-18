//REACT JSON.stringify and JSON.parse methods
const task = {
  title: "Study REST",
  completed: false,
};
//this convert the object to string
const jsonTask = JSON.stringify(task);
console.log(jsonTask);
//OUTPUT: {"title":"Study REST","completed":false}

const jsonText = '{"title":"Study REST","completed":false}';
//This converts the string to objet
const task2 = JSON.parse(jsonText);
console.log(task.title);
//OUTPUT: Study REST
