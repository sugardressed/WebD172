const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Finish REST API lesson", completed: false },
  { id: 2, title: "Connect React CRUD to Express", completed: true },
  { id: 3, title: "Prepare for MongoDB", completed: false }
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((task) => {
    return task.id === taskId;
  });

  if (!task) {
    return res.status(404).json({
      message: "Task not found."
    });
  }

  res.json(task);
});

app.post("/api/tasks", (req, res) => {
  const title = req.body.title;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Task title is required."
    });
  }

  const newTask = {
    id: Date.now(),
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

app.patch("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const task = tasks.find((task) => {
    return task.id === taskId;
  });

  if (!task) {
    return res.status(404).json({
      message: "Task not found."
    });
  }

  if (req.body.title !== undefined) {
    const updatedTitle = String(req.body.title).trim();

    if (updatedTitle === "") {
      return res.status(400).json({
        message: "Task title cannot be empty."
      });
    }

    task.title = updatedTitle;
  }

  if (req.body.completed !== undefined) {
    if (typeof req.body.completed !== "boolean") {
      return res.status(400).json({
        message: "Completed must be true or false."
      });
    }

    task.completed = req.body.completed;
  }

  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);

  const taskIndex = tasks.findIndex((task) => {
    return task.id === taskId;
  });

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Task not found."
    });
  }

  const deletedTasks = tasks.splice(taskIndex, 1);
  const deletedTask = deletedTasks[0];

  res.json(deletedTask);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
