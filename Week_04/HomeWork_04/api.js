const getMovies = async () => {
  const response = await fetch("https://jsonfakery.com/movies/simple-paginate");
  if (!response.ok) {
    throw new Error(`Unable to fetch movies: ${response.status}`);
  }

  const result = await response.json();
  if (!Array.isArray(result.data)) {
    throw new Error("Unexpected response from movies API");
  }

  return result.data;
};

module.exports = getMovies;
