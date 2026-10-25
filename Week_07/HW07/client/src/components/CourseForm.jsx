import { useState } from "react";

function CourseForm({ onAddCourse }) {
  const [title, setTitle] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle === "") {
      return;
    }

    onAddCourse(trimmedTitle);
    setTitle("");
  }

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <label htmlFor="courseTitle">New Course</label>

      <div className="course-form-row">
        <input
          id="courseTitle"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a course name"
        />

        <button type="submit">Add Course</button>
      </div>
    </form>
  );
}

export default CourseForm;
