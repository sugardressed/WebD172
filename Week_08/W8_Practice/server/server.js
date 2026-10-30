const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
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

// app.get("/api/courses", (req, res) => { /This open the communication between react and express to get the information
//   res.json(courses); // This provides what information to return, in this case is res=all information
// });

//GET THE COURSE
app.get("/api/courses/:id", (req, res) => {
  const courseId = Number(req.params.id);

  const course = courses.find((course) => {
    return course.id === courseId;
  });
  if (!course) {
    return res.status(404).json({
      message: "Course not found.",
    });
  }
  res.jspn(course);
});

// CREATE A COURSE
app.post("/api/courses/", (req, res) => {
  const title = req.body.title;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Course title is required.",
    });
  }
  const newCourse = {
    id: Date.now(),
    title: req.body.title,
    completed: false,
  };

  //UPDATE COURSE USING PATCH METHOD

  app.patch("/api/courses/:id", (req, res) => {
    const courseId = Number(req.params.id); //Convert data to number

    const course = courses.find((course) => {
      return course.id === courseId;
    });

    if (!course) {
      return res.status(400).json({
        message: "Course not found.",
      });
    }
    if (req.body.completed !== undefined) {
      course.completed = req.body.completed;
    }

    res.json(course);
  });

  //DELETE
  app.delete("/api/courses/:id", (req, res) => {
    const courseId = Number(req.params.id);
    const courseIndex = courses.findIndex((course) => {
      return course.id === courseId;
    });
    if (courseIndex === -1) {
      return res.status(404).json({
        message: "Coures not found",
      });
    }
    const deletedCourse = course.splice(courseIndex, 1)[0];
    res.json(deletedCourse);
  });

  courses.push(newCourse);
  res.status(201).json(newCourse);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
