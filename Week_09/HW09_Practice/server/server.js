const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // Allow cross-origin requests from the React app running on a different port.
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
// app.get("/api/courses/", (req, res) => {
//   res.json(courses);
// });

//FOR TESTNG WITH MONGODB CONNECTION

app.get("/api/test", async (req, res) => {
  try {
    const coursesCollection = await getCoursesCollection();
    const courses = await coursesCollection.find({}).toArray();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Database error" });
  }
});

// Get the course by ID
// app.get("/api/courses/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const course = courses.find((course) => course.id === id);

//   if (!course) {
//     return res.status(404).json({ message: "Course not found." });
//   }

//   res.json(course);
// });
//FOR TESTING WITH MONGODB CONNECTION
const { ObjectId } = require("mongodb");
app.get("/api/courses/:id", async (req, res) => {
  const courseId = new ObjectId(req.params.id);

  const coursesCollection = await getCoursesCollection();
  const course = await coursesCollection.findOne({ _id: courseId });

  if (!course) {
    return res.status(404).json({ message: "Course not found." });
  }

  res.json(course);
});

// Add a course
// app.post("/api/courses", (req, res) => {
//   const { title, department, units } = req.body;

//   if (!title || title.trim() === "") {
//     return res.status(400).json({
//       message: "Course title is required.",
//     });
//   }

//   const newCourse = {
//     id: Date.now(),
//     title: title.trim(),
//     department: department.trim(),
//     units,
//     disabled: false,
//   };
//   courses.push(newCourse);
//   res.status(201).json(newCourse);
// });
//FOR TESTING WITH MONGODB CONNECTION
app.post("/api/courses", async (req, res) => {
  const { title, department, units } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({
      message: "Course title is required.",
    });
  }

  const newCourse = {
    title: title.trim(),
    department: department.trim(),
    units,
    disabled: false,
  };

  const coursesCollection = await getCoursesCollection();
  const result = await coursesCollection.insertOne(newCourse);
  newCourse._id = result.insertedId;
  res.status(201).json(newCourse);
});

// Update a course's disabled status
// app.patch("/api/courses/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const course = courses.find((course) => course.id === id);

//   if (!course) {
//     return res.status(404).json({ message: "Course not found." });
//   }

//   course.disabled = req.body.disabled;
//   res.json(course);
// });
//FOR TESTING WITH MONGODB CONNECTION
app.patch("/api/courses/:id", async (req, res) => {
  const courseId = new ObjectId(req.params.id);

  const coursesCollection = await getCoursesCollection();

  const update = { $set: { disabled: req.body.disabled } };
  const result = await coursesCollection.updateOne({ _id: courseId }, update);

  if (result.matchedCount === 0) {
    return res.status(404).json({ message: "Course not found." });
  }

  const updatedCourse = await coursesCollection.findOne({ _id: courseId });
  res.json(updatedCourse);
});

// Delete a course
// app.delete("/api/courses/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const index = courses.findIndex((course) => course.id === id);

//   if (index === -1) {
//     return res.status(404).json({ message: "Course not found." });
//   }

//   courses.splice(index, 1);
//   res.json({ message: "Course deleted." });
// });
//FOR TESTING WITH MONGODB CONNECTION
app.delete("/api/courses/:id", async (req, res) => {
  const courseId = new ObjectId(req.params.id);

  const coursesCollection = await getCoursesCollection();

  const course = await coursesCollection.findOne({ _id: courseId });
  if (!course) {
    return res.status(404).json({ message: "Course not found." });
  }

  await coursesCollection.deleteOne({ _id: courseId });
  res.json({ message: "Course deleted." });
});

//This is the PORT connection
app.listen(PORT, () => {
  console.log(
    "Course API running at http://localhost:" + PORT + "/api/courses",
  );
});
