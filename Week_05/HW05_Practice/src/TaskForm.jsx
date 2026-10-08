import {useState} from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedTitle = title.trim();
        if (trimmedTitle === '') {
            return;
        }

        onAddTask(trimmedTitle);
        setTitle('');
    }   

    return (
        <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-title"> New Task</label>
      <div className="task-form-row">
        <input
        id="task-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter a task"
        />
        <button type="submit">Add Task</button> 
      </div>


        </form>
    );
}

export default TaskForm;