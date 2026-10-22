import express from 'express';
import cors from 'cors';
const app = express();
// BROKEN VERSION: CORS is intentionally disabled.
// FIX: Uncomment these three lines and restart Express:
// app.use(cors({
//   origin: 'http://localhost:5173'
// }));
const tasks = [
  { id: 1, title: 'Review React props' },
  { id: 2, title: 'Connect React to Express' },
  { id: 3, title: 'Understand CORS' }
];
app.get('/api/tasks', function(req, res) {
  console.log('GET /api/tasks received');
  res.json(tasks);
});
app.listen(3000, function() { console.log('API: http://localhost:3000/api/tasks'); });
