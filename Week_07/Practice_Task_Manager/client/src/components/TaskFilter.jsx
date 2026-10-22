function TaskFilter({ currentFilter, onFilterChange }) {
  function showAllTasks() {
    onFilterChange("all");
  }

  function showActiveTasks() {
    onFilterChange("active");
  }

  function showCompletedTasks() {
    onFilterChange("completed");
  }

  return (
    <div className="task-filters" aria-label="Task filters">
      <button
        type="button"
        className={currentFilter === "all" ? "active-filter" : ""}
        onClick={showAllTasks}
      >
        All
      </button>

      <button
        type="button"
        className={currentFilter === "active" ? "active-filter" : ""}
        onClick={showActiveTasks}
      >
        Active
      </button>

      <button
        type="button"
        className={currentFilter === "completed" ? "active-filter" : ""}
        onClick={showCompletedTasks}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;
