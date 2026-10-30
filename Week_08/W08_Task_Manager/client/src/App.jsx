import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskSummary from "./components/TaskSummary.jsx";
import TaskFilter from "./components/TaskFilter.jsx";
import TaskList from "./components/TaskList.jsx";

const API_URL = "http://localhost:3000/api/tasks";

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

        const response = await fetch(API_URL);

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

  async function addTask(title) {
    try {
      setErrorMessage("");

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Could not create task.");
      }

      const newTask = await response.json();
      const updatedTasks = [...tasks, newTask];

      setTasks(updatedTasks);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  async function toggleTask(id) {
    try {
      setErrorMessage("");

      const task = tasks.find((task) => {
        return task.id === id;
      });

      if (!task) {
        throw new Error("Task not found in React state.");
      }

      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          completed: !task.completed
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Could not update task.");
      }

      const updatedTask = await response.json();

      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return updatedTask;
        }

        return task;
      });

      setTasks(updatedTasks);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  async function deleteTask(id) {
    try {
      setErrorMessage("");

      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Could not delete task.");
      }

      const updatedTasks = tasks.filter((task) => {
        return task.id !== id;
      });

      setTasks(updatedTasks);
    } catch (error) {
      setErrorMessage(error.message);
    }
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

  return (
    <main className="app">
      <Header />

      {errorMessage !== "" && (
        <p className="error-message">{errorMessage}</p>
      )}

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
