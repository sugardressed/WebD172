function TaskSummary({ completedCount, totalCount }) {
  return (
    <p className="task-summary">
      {completedCount} of {totalCount} tasks completed
    </p>
  );
}

export default TaskSummary;
