import { useState } from "react";

function CourseForm({ onAddCourse }) {
  const [title, setTitle] = useState("");
  const [department, setDepartment] = useState("");
  const [units, setUnits] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDepartment = department.trim();

    if (trimmedTitle === "" || trimmedDepartment === "" ||
        units === "" || !Number.isFinite(Number(units)) || Number(units) < 0) {
      return;
    }

    onAddCourse(trimmedTitle, trimmedDepartment, Number(units));
    setTitle("");
    setDepartment("");
    setUnits("");
  }

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <h2>New Course</h2>

      <div className="course-form-row">
        <div className="course-form-field">
        <label htmlFor="courseTitle">Course name</label>
        <input
          id="courseTitle"
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a course name"
          required
        />
        </div>

        <div className="course-form-field">
          <label htmlFor="courseDepartment">Department</label>
          <input
            id="courseDepartment"
            type="text"
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            placeholder="Enter a department"
            required
          />
        </div>

        <div className="course-form-field">
          <label htmlFor="courseUnits">Units</label>
          <input
            id="courseUnits"
            type="number"
            min="0"
            step="0.5"
            value={units}
            onChange={(event) => setUnits(event.target.value)}
            placeholder="e.g. 3"
            required
          />
        </div>

        <button type="submit">Add Course</button>
      </div>
    </form>
  );
}

export default CourseForm;
