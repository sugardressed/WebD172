const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const courses = [
  {
    id: 1,
    title: "React",
    department: "Web Development",
    units: "3",
    disabled: true,
  },
  {
    id: 2,
    title: "Java Script",
    department: "Web Development",
    units: "3",
    disabled: true,
  },
  {
    id: 3,
    title: "Express",
    department: "Web Development",
    units: "3",
    disabled: false,
  },
  {
    id: 4,
    title: "Music 100",
    department: "Humanities",
    units: "2",
    disabled: false,
  },
  {
    id: 5,
    title: "Communications",
    department: "Humanities",
    units: "2",
    disabled: true,
  },
  {
    id: 6,
    title: "Design UX|UI",
    department: "Web Development",
    units: "3",
    disabled: false,
  },
  {
    id: 7,
    title: "Physics",
    department: "Science",
    units: "4",
    disabled: true,
  },
];

app.get("/api/courses", (req, res) => {
  res.json(courses);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
