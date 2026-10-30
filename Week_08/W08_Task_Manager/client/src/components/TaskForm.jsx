import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle === "") {
      return;
    }

    await onAddTask(trimmedTitle);
    setTitle("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="taskTitle">New Task</label>

      <div className="task-form-row">
        <input
          id="taskTitle"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a task"
        />

        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
