function Course({ course, onToggleCourse, onDeleteCourse }) {
  function handleToggle() {
    onToggleCourse(course.id);
  }

  function handleDelete() {
    onDeleteCourse(course.id);
  }

  const courseClassName = course.disabled
    ? "course disabled"
    : "course";

  return (
    <li className={courseClassName}>
      <label className="course-content">
        <input
          type="checkbox"
          checked={course.disabled}
          onChange={handleToggle}
        />

        <span className="course-details">
          <span className="course-title">{course.title}</span>
          <span className="course-meta">
            Department: {course.department || "Not specified"}
          </span>
          <span className="course-meta">
            Units: {course.units ?? "Not specified"}
          </span>
        </span>
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

export default Course;
