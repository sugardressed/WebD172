import './App.css'
import CourseCard from './CourseCard.jsx'

// Map array objects and pass props to CourseCard Components

function CourseList({courses}) {

  return (
    <section className="course-list">

        {courses.map(function(course){

            return(
                <CourseCard
                    key={course.id}
                    tile={course.title}
                    description={course.description}
                /> 
                );
        })}

    </section>

  );
}

export default CourseList