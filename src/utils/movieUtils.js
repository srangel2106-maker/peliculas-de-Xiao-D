// Funciones puras para que App no concentre toda la lógica.

export function getGenres(movies) {
  return [...new Set(movies.map((movie) => movie.genre))].sort();
}

export function getYears(movies) {
  return [...new Set(movies.map((movie) => movie.year))].sort((a, b) => b - a);
}

// Combina buscador + filtros. Los favoritos llegan como lista de IDs.
export function filterMovies(movies, query, filters, favorites) {
  const text = query.trim().toLowerCase();

  return movies.filter((movie) => {
    const matchesQuery = movie.title.toLowerCase().includes(text);
    const matchesGenre = filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear = filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorite = !filters.onlyFavorites || favorites.includes(movie.id);

    return matchesQuery && matchesGenre && matchesYear && matchesRating && matchesFavorite;
  });
}
