function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li className={task.completed ? "task completed" : "task"}>
      <label className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTask(task.id)}
        />

        <span>{task.title}</span>
      </label>

      <button
        className="delete-button"
        type="button"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Task;
