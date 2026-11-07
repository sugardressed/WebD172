// WEBD 172 — Week 9 MongoDB CRUD Demo
// Run these examples one section at a time in mongosh.

// --------------------------------------------------
// 1. SELECT THE DATABASE
// --------------------------------------------------

use webd172;


// --------------------------------------------------
// 2. CREATE — INSERT COURSE DOCUMENTS
// --------------------------------------------------

db.courses.insertMany([
    {
        title: "HTML and CSS - Beginning",
        department: "WEBD",
        units: 3,
        delivery: "Online"
    },
    {
        title: "JavaScript for Web Development",
        department: "WEBD",
        units: 3,
        delivery: "Online"
    },
    {
        title: "PHP: An Introduction",
        department: "WEBD",
        units: 3,
        delivery: "Online"
    },
    {
        title: "Advanced JavaScript",
        department: "WEBD",
        units: 3,
        delivery: "Online"
    },
    {
        title: "Full Stack JavaScript",
        department: "WEBD",
        units: 3,
        delivery: "Online"
    }
]);


// --------------------------------------------------
// 3. READ — DISPLAY ALL COURSES
// --------------------------------------------------

db.courses.find();


// --------------------------------------------------
// 4. READ — FIND ONE COURSE
// --------------------------------------------------

db.courses.findOne({
    title: "Full Stack JavaScript"
});


// --------------------------------------------------
// 5. READ — FILTER THE COLLECTION
// --------------------------------------------------

db.courses.find({
    department: "WEBD"
});

db.courses.find({
    units: 3
});

db.courses.find({
    delivery: "Online"
});


// --------------------------------------------------
// 6. UPDATE — CHANGE ONE COURSE
// --------------------------------------------------

db.courses.updateOne(
    {
        title: "Full Stack JavaScript"
    },
    {
        $set: {
            delivery: "Fully Online"
        }
    }
);


// --------------------------------------------------
// 7. READ — CONFIRM THE UPDATE
// --------------------------------------------------

db.courses.findOne({
    title: "Full Stack JavaScript"
});


// --------------------------------------------------
// 8. CREATE — ADD A TEMPORARY COURSE
// --------------------------------------------------

db.courses.insertOne({
    title: "Temporary Demo Course",
    department: "WEBD",
    units: 1,
    delivery: "Online"
});


// --------------------------------------------------
// 9. DELETE — REMOVE THE TEMPORARY COURSE
// --------------------------------------------------

db.courses.deleteOne({
    title: "Temporary Demo Course"
});


// --------------------------------------------------
// 10. READ — CONFIRM THE DELETE
// --------------------------------------------------

db.courses.find();


// --------------------------------------------------
// OPTIONAL CLEANUP
// --------------------------------------------------
// Uncomment only if you want to remove all documents
// and start the demonstration again.
//
// db.courses.deleteMany({});
