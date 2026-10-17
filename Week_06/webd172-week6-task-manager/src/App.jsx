import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskSummary from "./components/TaskSummary.jsx";
import TaskFilter from "./components/TaskFilter.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Finish React Review", completed: false },
    { id: 2, title: "Build Task Manager", completed: true },
    { id: 3, title: "Learn Express", completed: false }
  ]);

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title = `${tasks.length} Tasks`;
  }, [tasks]);

  function addTask(title) {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
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
    const updatedTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(updatedTasks);
  }

  const completedTasks = tasks.filter((task) => {
    return task.completed;
  });

  const activeTasks = tasks.filter((task) => {
    return !task.completed;
  });

  const completedCount = completedTasks.length;
  const totalCount = tasks.length;

  let displayedTasks = tasks;

  if (filter === "active") {
    displayedTasks = activeTasks;
  }

  if (filter === "completed") {
    displayedTasks = completedTasks;
  }

  return (
    <main className="app">
      <Header />

      <TaskForm onAddTask={addTask} />

      <TaskSummary
        completedCount={completedCount}
        totalCount={totalCount}
      />

      <TaskFilter
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      <TaskList
        tasks={displayedTasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </main>
  );
}

export default App;
