import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import CourseForm from "./components/CourseForm.jsx";
import CourseSummary from "./components/CourseSummary.jsx";
import CourseFilter from "./components/CourseFilter.jsx";
import CourseList from "./components/CourseList.jsx";
import './App.css'

function App() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadCourses() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await fetch(
          "http://localhost:3000/api/courses"
        );

        if (!response.ok) {
          throw new Error("Could not load courses.");
        }

        const serverCourses = await response.json();
        setCourses(serverCourses);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadCourses();
  }, []);

  useEffect(() => {
    document.title = `${courses.length} Courses`;
  }, [courses]);

  function addCourse(title) {
    const newCourse = {
      id: Date.now(),
      title: title,
      completed: false
    };

    const updatedCourses = [...courses, newCourse];
    setCourses(updatedCourses);
  }

  function toggleCourse(id) {
    const updatedCourses = courses.map((course) => {
      if (course.id === id) {
        return {
          ...course,
          completed: !course.completed
        };
      }

      return course;
    });

    setCourses(updatedCourses);
  }

  function deleteCourse(id) {
    const updatedCourses = courses.filter((course) => {
      return course.id !== id;
    });

    setCourses(updatedCourses);
  }

  const completedCourses = courses.filter((course) => {
    return course.completed;
  });

  const activeCourses = courses.filter((course) => {
    return !course.completed;
  });

  const completedCount = completedCourses.length;
  const totalCount = courses.length;

  let displayedCourses = courses;

  if (filter === "active") {
    displayedCourses = activeCourses;
  }

  if (filter === "completed") {
    displayedCourses = completedCourses;
  }

  if (isLoading) {
    return (
      <main className="app">
        <Header />
        <p className="status-message">Loading courses...</p>
      </main>
    );
  }

  if (errorMessage !== "") {
    return (
      <main className="app">
        <Header />
        <p className="error-message">{errorMessage}</p>
        <p className="help-message">
          Make sure the Express server is running on port 3000.
        </p>
      </main>
    );
  }

  return (
    <main className="app">
      <Header />

      <CourseForm onAddCourse={addCourse} />

      <CourseSummary
        completedCount={completedCount}
        totalCount={totalCount}
      />

      <CourseFilter
        currentFilter={filter}
        onFilterChange={setFilter}
      />

      

      <CourseList
        courses={displayedCourses}
        onToggleCourse={toggleCourse}
        onDeleteCourse={deleteCourse}
      />
    </main>
  );
}

export default App;
