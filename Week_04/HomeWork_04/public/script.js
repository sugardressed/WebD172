const loadMoviesButton = document.getElementById("loadMoviesBtn");
const moviesOutput = document.getElementById("movies");
const movieForm = document.getElementById("movieForm");
const movieIdInput = document.getElementById("movieId");
const movieResult = document.getElementById("movieResult");
const resetButton = document.getElementById("resetBtn");
let resetVersion = 0;

resetButton.addEventListener("click", () => {
  resetVersion += 1;
  movieForm.reset();
  moviesOutput.replaceChildren();
  movieResult.replaceChildren();
});

const displayMovie = ({ movie_id, original_title, poster_path, overview }) => `
    <article class="movie">
    <h3>${original_title}</h3>
    <p><strong>ID:</strong> ${movie_id}</p>
    <img src="${poster_path}" alt="${original_title} poster" width="250" />
    <h4 style="text-align: center;margin: 10px 0 10px 0;">Overview</h4>
    <p style="text-align: center;margin: 0 010px 0;">${overview || "No overview available."}</p>
    </article>
`;

loadMoviesButton.addEventListener("click", async () => {
  const requestVersion = resetVersion;
  const response = await fetch("/api/movies");
  const movies = await response.json();
  if (requestVersion !== resetVersion) return;
  moviesOutput.innerHTML = movies.map(displayMovie).join("");
});

movieForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const requestVersion = resetVersion;
  const id = movieIdInput.value;
  const response = await fetch(`/api/movies/${id}`);
  const data = await response.json();
  if (requestVersion !== resetVersion) return;

  if (!response.ok) {
    movieResult.innerHTML = `<p class="error">${data.message}</p>`;
    return;
  }

  movieResult.innerHTML = displayMovie(data);
});
