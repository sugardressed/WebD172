import Task from "./Task.jsx";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <section className="task-list">
        <p className="empty-message">No tasks available.</p>
      </section>
    );
  }

  return (
    <section className="task-list">
      <h2>Your Tasks</h2>

      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </section>
  );
}

export default TaskList;
