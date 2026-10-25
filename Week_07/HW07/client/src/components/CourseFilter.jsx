function CourseFilter({ currentFilter, onFilterChange }) {
  function showAllCourses() {
    onFilterChange("all");
  }

  function showActiveCourses() {
    onFilterChange("active");
  }

  function showCompletedCourses() {
    onFilterChange("completed");
  }

  return (
    <div className="course-filters" aria-label="Course filters">
      <button
        type="button"
        className={currentFilter === "all" ? "active-filter" : ""}
        onClick={showAllCourses}
      >
        All
      </button>

      <button
        type="button"
        className={currentFilter === "active" ? "active-filter" : ""}
        onClick={showActiveCourses}
      >
        Available
      </button>

      <button
        type="button"
        className={currentFilter === "completed" ? "active-filter" : ""}
        onClick={showCompletedCourses}
      >
        Not Available
      </button>
    </div>
  );
}

export default CourseFilter;
