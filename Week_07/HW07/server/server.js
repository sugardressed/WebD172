const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const courses = [
  { id: 1, title: "React", completed: false },
  { id: 2, title: "Java Script", completed: true },
  { id: 3, title: "Express", completed: false },
  { id: 4, title: "Mongo", completed: false },
  { id: 5, title: "Pandas", completed: true },
  { id: 6, title: "Python", completed: false },
  { id: 7, title: "Mathlab", completed: true },
];

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
