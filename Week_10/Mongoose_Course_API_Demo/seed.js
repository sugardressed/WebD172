require("dotenv").config();

const mongoose = require("mongoose");
const Course = require("./models/Course");

const courses = [
    {
        title: "HTML and CSS",
        department: "WEBD",
        units: 3,
        description: "Beginning web page development."
    },
    {
        title: "JavaScript for Web Development",
        department: "WEBD",
        units: 3,
        description: "Client-side JavaScript fundamentals."
    },
    {
        title: "Full Stack JavaScript",
        department: "WEBD",
        units: 3,
        description: "Node, Express, React, MongoDB, and full-stack development."
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(
            process.env.MONGODB_URI ||
            "mongodb://127.0.0.1:27017/mongooseCourseDemo"
        );

        await Course.deleteMany({});
        await Course.insertMany(courses);

        console.log("Database seeded successfully");
    } catch (error) {
        console.error("Seed error:", error);
    } finally {
        await mongoose.connection.close();
    }
}

seedDatabase();
