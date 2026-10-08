
import{useState} from 'react';
import TaskForm from './TaskForm.jsx';
import TaskList from './TaskList.jsx';
function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish React review', completed: false },
    { id: 2, title: 'Build Task Manager', completed: true },
    { id: 3, title: 'Learn Express', completed: false },
  ]);

    function AddOne() {
    setCount(count + 1);
  }

  function addTask(title) {
    const newTask = {
id:Date.now(),
title,
completed:false
    };
    setTasks([...tasks, newTask]);
  }
   
  function toggleTask(id) {
  const updatedTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  setTasks(updatedTasks);
}



function deleteTask(id) {
  const updatedTasks = tasks.filter((task) => task.id !== id);
  setTasks(updatedTasks);
}

  return (
    <>
    <main className="App">
<p>Hello, React!</p>
count: {count}
<button onClick={AddOne}>Add One</button>

<hr />

<h2>Task List Test</h2>
<TaskForm onAddTask={addTask} />
<TaskList
tasks={tasks}
onToggleTask={toggleTask}
onDeleteTask={deleteTask}
/>
</main>
    </>
  )
}

export default App
