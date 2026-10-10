import { useState } from 'react'
import './App.css'
import CourseList from './CourseList.jsx'

const[showCourses, setShowCourses]= useState(true);

const courses = [
    {
        id: 1,
        title: "Full Stack JavaScript",
        description: "Build modern web applications with JavaScript."
    },
    {
        id: 2,
        title: "Advanced JavaScript",
        description: "Explore advanced JavaScript concepts and frameworks."
    },
    {
        id: 3,
        title: "UX|UI",
        description: "User experience and user interface best practices."
    },
    {
        id: 4,
        title: "SQL",
        description: "Structure Query Language and Agregate Techniques."
    },
    {
        id: 5,
        title: "Phyton and Pandas",
        description: "Data Analysis and BigData"
    }
];


function App() {

  return (
    <>
    <main className="container">
      <header>
        <p className="eyebrow">WEBD 172 • Week 5</p>
        <h1>Course Dashboard</h1>
        <p>A simple React dashboard built with components, props, state, and map().</p>
        <button onClick={function() {setShowCourses(!showCourses);}}>{showCourses ? "Hide Courses" :"Show Courses"}
        </button>
      </header>

    </main>
    {showCourses && <CourseList courses={courses}/>}
    </>
  )
}

export default App
