# WEBD 172 — Week 9 MongoDB CRUD Demo

This sample supports Week 9's focus on MongoDB itself before Mongoose is introduced.

## Goal

Practice the four basic database operations:

Create → Read → Update → Delete

## Database

- Database: `webd172`
- Collection: `courses`

## Option 1 — mongosh

Open `week9-mongodb-demo.js` and run the commands one section at a time in mongosh.

## Option 2 — MongoDB Compass

You can perform the same operations in Compass. The `courses.json` file contains sample data that can be imported into a `courses` collection.

## Suggested Demo Flow

1. Connect to MongoDB.
2. Select the `webd172` database.
3. Insert the sample course documents.
4. Display all courses.
5. Find one course.
6. Run filtered queries.
7. Update one course.
8. Confirm the update.
9. Delete one course.
10. Confirm the delete.

## Teaching Point

Week 8 stored data in a JavaScript array. That data disappeared when the Express server restarted.

Week 9 stores documents in MongoDB, so the data persists independently of the application.

Week 10 will introduce Mongoose as the layer that connects Express applications to MongoDB in a structured way.
