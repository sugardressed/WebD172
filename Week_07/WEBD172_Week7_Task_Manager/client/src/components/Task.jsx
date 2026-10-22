function Task({ task, onToggleTask, onDeleteTask }) {
  function handleToggle() {
    onToggleTask(task.id);
  }

  function handleDelete() {
    onDeleteTask(task.id);
  }

  const taskClassName = task.completed
    ? "task completed"
    : "task";

  return (
    <li className={taskClassName}>
      <label className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />

        <span>{task.title}</span>
      </label>

      <button
        className="delete-button"
        type="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}

export default Task;
