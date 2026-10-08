import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, ratings, onSelect, onToggleFavorite }) {
  if (movies.length === 0) {
    return (
      <div className="empty" role="status">
        <p className="empty__title">Ni el viento encontró esa película</p>
        <p>Prueba con otro título o limpia los filtros para ver todo el catálogo.</p>
      </div>
    );
  }

  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          userRating={ratings[movie.id] ?? 0}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </section>
  );
}

export default MovieList;
