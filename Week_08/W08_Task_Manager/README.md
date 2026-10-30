# WEBD 172 — Week 8 REST API Task Manager

This is the completed Week 8 version of the Task Manager.

## Goal

Move all four CRUD operations through the Express REST API.

## API Routes

- GET /api/tasks
- GET /api/tasks/:id
- POST /api/tasks
- PATCH /api/tasks/:id
- DELETE /api/tasks/:id

## Run the Server

From the `server` folder:

```bash
npm install
npm start
```

The API runs at:

```text
http://localhost:3000
```

## Run React

From the `client` folder:

```bash
npm install
npm run dev
```

The Vite URL is usually:

```text
http://localhost:5173
```

## Week 8 Concepts

- REST resources and endpoints
- CRUD
- GET, POST, PATCH, DELETE
- Route parameters
- req.params
- req.body
- express.json()
- CORS
- JSON request bodies
- Content-Type: application/json
- JSON.stringify()
- HTTP status codes
- Server-side validation
- React fetch()
- async / await
- Keeping React state synchronized with Express

## Intentional Limitation

The Express API still stores tasks in a JavaScript array.

CRUD works while the server is running, but restarting Express resets the data.

That limitation leads directly into Week 9: MongoDB.
