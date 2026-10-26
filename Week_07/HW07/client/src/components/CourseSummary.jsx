function CourseSummary({ disabledCount, totalCount }) {
  return (
    <p className="course-summary">
      {disabledCount} of {totalCount} course(s) not available
    </p>
  );
}

export default CourseSummary;
