const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const tasks = [
  { id: 1, title: "Finish React Review", completed: false },
  { id: 2, title: "Build Task Manager", completed: true },
  { id: 3, title: "Connect React to Express", completed: false }
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
