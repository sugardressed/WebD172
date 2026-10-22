# WEBD 172 — Week 7 Task Manager

This is the final Week 7 version of the Task Manager.

## Goal

Connect the React front end to the Express back end.

React now loads its initial task data from:

http://localhost:3000/api/tasks

## Project Structure

WEBD172_Week7_Task_Manager/
├── client/
│   └── React application
└── server/
    ├── package.json
    └── server.js

## Start Express

Open a terminal in the `server` folder:

npm install
npm start

Test:

http://localhost:3000/api/tasks

You should see task data as JSON.

## Start React

Open a second terminal in the `client` folder:

npm install
npm run dev

Then open the Vite URL, usually:

http://localhost:5173

## Week 7 Concepts

- Separate React and Express applications
- Two development ports
- Express GET endpoint
- JSON with res.json()
- CORS middleware
- fetch()
- async/await
- useEffect()
- loading state
- error state
- response.ok
- try/catch/finally
- server data becoming React state
- existing components rendering fetched data

## Intentional Week 7 Limitation

Only the initial GET comes from Express.

Adding, toggling, deleting, and filtering still happen locally in React state.

Refreshing the browser reloads the original tasks from the Express server.

That limitation leads directly into Week 8, where REST API work can add POST, PUT/PATCH, and DELETE requests.
