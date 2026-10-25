function Course({ course, onToggleCourse, onDeleteCourse }) {
  function handleToggle() {
    onToggleCourse(course.id);
  }

  function handleDelete() {
    onDeleteCourse(course.id);
  }

  const courseClassName = course.completed
    ? "course completed"
    : "course";

  return (
    <li className={courseClassName}>
      <label className="course-content">
        <input
          type="checkbox"
          checked={course.completed}
          onChange={handleToggle}
        />

        <span>{course.title}</span>
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
