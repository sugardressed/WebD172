require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Course = require("./models/Course");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(
        process.env.MONGODB_URI ||
        "mongodb://127.0.0.1:27017/mongooseCourseDemo"
    )
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

//Put Mongoos Crud Methods here






app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
