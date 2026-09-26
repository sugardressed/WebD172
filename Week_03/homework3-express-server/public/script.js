const loadCoursesButton = document.getElementById("loadCourses");
const loadStudentButton = document.getElementById("loadStudent");

const courseOutput = document.getElementById("courseOutput");
const studentOutput = document.getElementById("studentOutput");

const studentNameInput = document.getElementById("studentName");

loadCoursesButton.addEventListener("click", async () => {
  const response = await fetch("/courses");
  const courses = await response.json();

  courseOutput.innerHTML = courses
    .map((course) => `<p>${course.id} - ${course.title}</p>`)
    .join("");
});

loadStudentButton.addEventListener("click", async () => {
  const studentName = studentNameInput.value || "Alice";
  const courseId = courseIdInput.value || 4;

  const response = await fetch(
    `/api/student/${studentName}?courseId=${courseId}`,
  );
  const student = await response.json();

  studentOutput.innerHTML = `
    <h3>Student Details</h3>
    <p>Name: ${student.name}</p>
    <p>Course: ${student.course}</p>
    <p>Grade: ${student.grade}</p>
  `;
});
