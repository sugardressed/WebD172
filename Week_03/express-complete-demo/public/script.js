const button = document.getElementById("loadCourses");
const output = document.getElementById("output");

button.addEventListener("click", async () => {
  const response = await fetch("/courses");
  const courses = await response.json();

  output.innerHTML = courses.map((course) => `<p>${course.title}</p>`).join("");
});
