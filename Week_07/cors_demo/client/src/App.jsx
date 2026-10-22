import { useEffect, useState } from 'react';
function App() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState('Loading tasks...');
  useEffect(function() {
    async function loadTasks() {
      try {
        const response = await fetch('http://localhost:3000/api/tasks');
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const data = await response.json();
        setTasks(data);
        setMessage('');
      } catch (error) {
        console.error('Request failed:', error);
        setMessage('Could not load tasks. Check the browser Console and Network tab.');
      }
    }
    loadTasks();
  }, []);
  return <main><h1>Week 7: CORS Demo</h1><p>React: localhost:5173 | Express: localhost:3000</p><p role="status">{message}</p><ul>{tasks.map(function(task) { return <li key={task.id}>{task.title}</li>; })}</ul></main>;
}
export default App;
