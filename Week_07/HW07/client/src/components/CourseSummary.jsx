function CourseSummary({ completedCount, totalCount }) {
  return (
    <p className="course-summary">
      {completedCount} of {totalCount} course(s) not available
    </p>
  );
}

export default CourseSummary;
