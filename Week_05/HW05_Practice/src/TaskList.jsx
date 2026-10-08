import Task from './Task.jsx'

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    if (tasks.length === 0) {
        return <p className="empty-message">No tasks available.</p>
    }

    return (
        <section className="task-list">
            <br />
            <h3>Your Tasks</h3>

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
