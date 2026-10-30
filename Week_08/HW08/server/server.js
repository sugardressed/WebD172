const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // Allow express reads json from react request body.

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
//req=request
//res=response
//Get all the courses
app.get("/api/courses/", (req, res) => {
  res.json(courses);
});
// Get the course by ID
app.get("/api/courses/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return res.status(404).json({ message: "Course not found." });
  }

  res.json(course);
});

// Add a course
app.post("/api/courses", (req, res) => {
  const { title, department, units } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Course title is required.",
    });
  }

  const newCourse = {
    id: Date.now(),
    title: title.trim(),
    department: department.trim(),
    units,
    disabled: false,
  };
  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Update a course's disabled status
app.patch("/api/courses/:id", (req, res) => {
  const id = Number(req.params.id);
  const course = courses.find((course) => course.id === id);

  if (!course) {
    return res.status(404).json({ message: "Course not found." });
  }

  course.disabled = req.body.disabled;
  res.json(course);
});

// Delete a course
app.delete("/api/courses/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = courses.findIndex((course) => course.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Course not found." });
  }

  courses.splice(index, 1);
  res.json({ message: "Course deleted." });
});

app.listen(PORT, () => {
  console.log(
    "Course API running at http://localhost:" + PORT + "/api/courses",
  );
});
