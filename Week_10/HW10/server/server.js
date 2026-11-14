require("dotenv").config();

const express = require("express");
const cors = require("cors"); // Added to connect to the Client
const mongoose = require("mongoose");
const Course = require("./models/Course");

const app = express();
const PORT = process.env.PORT || 3000;

// Added to connect to the Client
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mongooseCourseDemo",
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

//Put Mongoos Crud Methods here
//Test connection to MongoDB
app.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.send("Web 172 Week 10 Mongoose Course API");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all courses
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get a single course by ID
app.get("/api/courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Create a new course
app.post("/api/courses", async (req, res) => {
  try {
    const course = await Course.create({
      title: req.body.title,
      department: req.body.department,
      units: req.body.units,
      description: req.body.description,
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Patch a course by ID
// app.patch("/api/courses/:id", async (req, res) => {
//   try {
//     const updatedCourse = await Course.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true, runValidators: true },
//     );
//     if (!updatedCourse) {
//       return res.status(404).json({ message: "Course not found" });
//     }
//     res.json(updatedCourse);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// app.patch("/api/courses/:id", async (req, res) => {
//   const courseId = new ObjectId(req.params.id);

//   const coursesCollection = await getCoursesCollection();

//   const update = { $set: { disabled: req.body.disabled } };
//   const result = await coursesCollection.updateOne({ _id: courseId }, update);

//   if (result.matchedCount === 0) {
//     return res.status(404).json({ message: "Course not found." });
//   }

//   const updatedCourse = await coursesCollection.findOne({ _id: courseId });
//   res.json(updatedCourse);
// });

app.patch("/api/courses/:id", async (req, res) => {
  try {
    if (typeof req.body.disabled !== "boolean") {
      return res.status(400).json({
        message: "disabled must be true or false",
      });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: { disabled: req.body.disabled } },
      { new: true, runValidators: true },
    );

    if (!updatedCourse) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Update a course by ID
app.put("/api/courses/:id", async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        department: req.body.department,
        units: req.body.units,
        description: req.body.description,
      },
      { new: true, runValidators: true },
    );
    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete a course by ID
app.delete("/api/courses/:id", async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully", course: deletedCourse });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
