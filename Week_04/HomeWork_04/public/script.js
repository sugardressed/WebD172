const loadMoviesButton = document.getElementById("loadMoviesBtn");
const moviesOutput = document.getElementById("movies");
const movieForm = document.getElementById("movieForm");
const movieIdInput = document.getElementById("movieId");
const movieResult = document.getElementById("movieResult");

const displayMovie = ({ movie_id, original_title, poster_path, overview }) => `
    <article class="movie">
    <h3>${original_title}</h3>
    <p><strong>ID:</strong> ${movie_id}</p>
    <img src="${poster_path}" alt="${original_title} poster" width="200" />
    <p><strong>Overview:</strong> ${overview || "No overview available."}</p>
    </article>
`;

loadMoviesButton.addEventListener("click", async () => {
  const response = await fetch("/api/movies");
  const movies = await response.json();
  moviesOutput.innerHTML = movies.map(displayMovie).join("");
});

movieForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const id = movieIdInput.value;
  const response = await fetch(`/api/movies/${id}`);
  const data = await response.json();

  if (!response.ok) {
    movieResult.innerHTML = `<p class="error">${data.message}</p>`;
    return;
  }

  movieResult.innerHTML = displayMovie(data);
});
