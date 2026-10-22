import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskSummary from "./components/TaskSummary.jsx";
import TaskFilter from "./components/TaskFilter.jsx";
import TaskList from "./components/TaskList.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadTasks() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(
          "http://localhost:3000/api/tasks"
        );

        if (!response.ok) {
          throw new Error("Could not load tasks.");
        }

        const serverTasks = await response.json();
        setTasks(serverTasks);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadTasks();
  }, []);

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

  if (isLoading) {
    return (
      <main className="app">
        <Header />
        <p className="status-message">Loading tasks...</p>
      </main>
    );
  }

  if (errorMessage !== "") {
    return (
      <main className="app">
        <Header />
        <p className="error-message">{errorMessage}</p>
        <p className="help-message">
          Make sure the Express server is running on port 3000.
        </p>
      </main>
    );
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
