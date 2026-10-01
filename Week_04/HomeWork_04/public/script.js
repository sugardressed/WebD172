const loadCoursesButton = document.getElementById("loadCoursesBtn");
const coursesOutput = document.getElementById("courses");
const courseForm = document.getElementById("courseForm");
const courseIdInput = document.getElementById("courseId");
const courseResult = document.getElementById("courseResult");

const displayCourses = ({ id, title, description }) => `
    <article class="course">
        <h3>${title}</h3>
        <p><strong>ID:</strong> ${id}</p>
        <p>${description}</p>
    </article>
`;

loadCoursesButton.addEventListener("click", async () => {
  const response = await fetch("/api/courses");
  const courses = await response.json();
  coursesOutput.innerHTML = courses
    .map((course) => displayCourses(course))
    .join("");
});

courseForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = courseIdInput.value;
  const response = await fetch(`/api/courses/${id}`);
  const data = await response.json();

  if (!response.ok) {
    courseResult.innerHTML = `<p class="error">${data.message}</p>`;
    return;
  }

  courseResult.innerHTML = displayCourses(data);
});
