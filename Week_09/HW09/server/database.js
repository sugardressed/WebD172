//This code was suggested by ChatGPT to connect to the MongoDB database. It uses the MongoClient from the 'mongodb' package to establish a connection to the database and exports a function to retrieve the database instance for use in other parts of the application.

// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017"; //PORT 27017 is the default port for MongoDB
// const dbName = "coursesDB";

// const client = new MongoClient(url, { useUnifiedTopology: true });

// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// module.exports = { connectToDatabase };

//Class suggestion: The code snippet provided is a module that connects to a MongoDB database using the MongoClient from the 'mongodb' package. It defines a connection string and a function to connect to the database, handling any potential errors during the connection process. The module exports the connectToDatabase function for use in other parts of the application.
const { MongoClient } = require("mongodb");

const connectionString = "mongodb://localhost:27017";

const client = new MongoClient(connectionString);

async function connectToDatabase() {
  await client.connect();

  const database = client.db("webd172");

  return database;
}

async function getCoursesCollection() {
  const database = await connectToDatabase();

  const coursesCollection = database.collection("courses");

  return coursesCollection;
}

module.exports = { getCoursesCollection };
