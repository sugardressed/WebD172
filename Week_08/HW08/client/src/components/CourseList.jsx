import Course from "./Course.jsx";

function CourseList({ courses, onToggleCourse, onDeleteCourse }) {
  if (courses.length === 0) {
    return (
      <section className="course-list">
        <p className="empty-message">No course available.</p>
      </section>
    );
  }

  return (
    <section className="course-list">
      <h2>List of Courses</h2>

      <ul>
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            onToggleCourse={onToggleCourse}
            onDeleteCourse={onDeleteCourse}
          />
        ))}
      </ul>
    </section>
  );
}

export default CourseList;
