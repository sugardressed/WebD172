import { useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish React Review", completed: false },
    { id: 2, title: "Build Task Manager", completed: true },
    { id: 3, title: "Learn Express", completed: false }
  ]);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    };

    setTasks([...tasks, newTask]);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
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
    <main className="app">
      <Header />

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </main>
  );
}

export default App;
