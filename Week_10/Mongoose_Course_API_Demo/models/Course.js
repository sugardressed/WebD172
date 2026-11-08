const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    units: { type: Number, required: true, min: 1, max: 6 },
    description: { type: String, default: "" }
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
