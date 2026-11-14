# WEBD 172 — Week 10 Mongoose Course API Demo

This project demonstrates:

**Schema → Model → Documents → CRUD → Express API**

## Setup

1. Make sure MongoDB is running locally.
2. Copy `.env.example` to `.env`.
3. Run `npm install`.
4. Run `npm run seed`.
5. Run `npm run dev`.

Open:

`http://localhost:3000`

## API Endpoints

### GET /api/courses
Returns all courses.

### GET /api/courses/:id
Returns one course by MongoDB `_id`.

### POST /api/courses
Creates a course.

Example body:

```json
{
  "title": "Advanced JavaScript",
  "department": "WEBD",
  "units": 3,
  "description": "Advanced JavaScript programming concepts."
}
```

### PUT /api/courses/:id
Updates a course.

### DELETE /api/courses/:id
Deletes a course.

## Core Mongoose Methods

```javascript
await Course.create(...);
await Course.find();
await Course.findById(...);
await Course.findByIdAndUpdate(...);
await Course.findByIdAndDelete(...);
```

## Suggested Demo Flow

1. Open `models/Course.js`.
2. Explain the schema.
3. Explain the model.
4. Seed the database.
5. Test GET all.
6. Copy one `_id`.
7. Test GET one.
8. POST a new course.
9. PUT an update.
10. DELETE the course.

## Mental Model

```text
Schema defines it
      ↓
Model works with it
      ↓
MongoDB stores it
      ↓
Express exposes it
```

The project stays intentionally small so the focus remains on Mongoose.
