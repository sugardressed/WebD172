import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import CourseForm from "./components/CourseForm.jsx";
import CourseSummary from "./components/CourseSummary.jsx";
import CourseFilter from "./components/CourseFilter.jsx";
import CourseList from "./components/CourseList.jsx";
import CourseSearch from "./components/CourseSearch.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'

const API_URL="http://localhost:3000/api/courses";

function App() {
  const [courses, setCourses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [search,setSearch]=useState("");
// This method catch the API_URL
  useEffect(() => {
    async function loadCourses() {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const response = await fetch(API_URL);
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
//This method counts how may items in the URL exists
  useEffect(() => {
    document.title = `${courses.length} Courses`;
  }, [courses]);

  //
  // function addCourse(title, department, units) {
  //   const newCourse = {
  //     id: Date.now(),
  //     title: title,
  //     department: department,
  //     units: units,
  //     disabled: false
  //   };

  //   const updatedCourses = [...courses, newCourse];
  //   setCourses(updatedCourses);
  // }
async function addCourse(title, department,units) {
  try {
    setErrorMessage("");

    const response = await fetch(API_URL, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        department: department,
        units: units
      })
    });

    if(!response.ok){
      const errorData = await response.json();
      throw new Error(errorData.message || "Could not create course.");
    }

    const newCourse = await response.json();
    const updatedCourses = [...courses, newCourse];

    setCourses(updatedCourses);
  } catch (error){
    setErrorMessage(error.message);
  }
  
}

  // function toggleCourse(id) {
  //   const updatedCourses = courses.map((course) => {
  //     if (course.id === id) {
  //       return {
  //         ...course,
  //         disabled: !course.disabled
  //       };
  //     }

  //     return course;
  //   });

  //   setCourses(updatedCourses);
  // }

  async function toggleCourse(id) {
    try{
      setErrorMessage("");
      const course=courses.find((course) =>{
        return course.id ===id;
      });
      if (!course){
        throw new Error ("Course not found in React State.");
      }
      const response=await fetch(`${API_URL}/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        disabled: !course.disabled
      })
    });
    if(!response.ok){
      const errorData = await response.json();
      throw new Error(errorData.message || "Could not update course.");
    }
    const updatedCourse= await response.json();
    const updatedCourses= courses.map((course) =>{
      if (course.id ===id){
        return updatedCourse;
      }
      return course;
    });
    setCourses(updatedCourses);
  } catch (error){
    setErrorMessage(error.message);
  }
}

  // function deleteCourse(id) {
  //   const updatedCourses = courses.filter((course) => {
  //     return course.id !== id;
  //   });

  //   setCourses(updatedCourses);
  // }

  async function deleteCourse(id) {
    try{
      setErrorMessage("");
      const response=await fetch (`${API_URL}/${id}`,{
        method: "DELETE"
      });
      if(!response.ok){
        const errorData = await response.json();
        throw new Error(errorData.message || "Could not delete course.");
      }
const updatedCourses = courses.filter((course) =>{
  return course.id !==id;
});
setCourses(updatedCourses);
    } catch (error){
      setErrorMessage(error.message);
    }
 }
  const disabledCourses = courses.filter((course) => {
    return course.disabled;
  });

  const activeCourses = courses.filter((course) => {
    return !course.disabled;
  });

    const disabledCount = disabledCourses.length;
  const totalCount = courses.length;

  let displayedCourses = courses;

  if (filter === "active") {
    displayedCourses = activeCourses;
  }

  if (filter === "disabled") {
    displayedCourses = disabledCourses;
  }

  displayedCourses = displayedCourses.filter(function (course) {
    return course.title.toLowerCase().includes(search.toLowerCase());
  });

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
      <CourseSearch search={search} 
      onSearchChange={setSearch}/>

      <CourseForm onAddCourse={addCourse} />

      <CourseSummary
        disabledCount={disabledCount}
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
      <Footer />
    </main>
  );
}

export default App;
