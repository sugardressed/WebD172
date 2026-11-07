function CourseSearch({ search, onSearchChange }) {
  return (
    <section className="course-search">
      <label htmlFor="course-search">Search Courses</label>
      <input
        id="course-search"
        type="search"
        placeholder="Search by course name"
        value={search}
        onChange={function (event) {
          onSearchChange(event.target.value);
        }}
      />
    </section>
  );
}

export default CourseSearch;