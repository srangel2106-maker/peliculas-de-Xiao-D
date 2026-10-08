function MovieCard({ movie, isFavorite, userRating, onSelect, onToggleFavorite }) {
  return (

    <article className="movie-card" onClick={() => onSelect(movie.id)}>
      <div className="movie-card__poster">
        <img src={movie.image} alt={`Póster de ${movie.title}`} loading="lazy" />
        <span className="movie-card__score">★ {movie.rating.toFixed(1)}</span>
        <button
          type="button"
          className={`fav-btn${isFavorite ? " is-on" : ""}`}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Quitar ${movie.title} de favoritos`
              : `Agregar ${movie.title} a favoritos`
          }
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(movie.id);
          }}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">
          <button type="button" className="link-btn">
            {movie.title}
          </button>
        </h3>
        <p className="movie-card__meta">
          {movie.genre}, {movie.year}
        </p>
        <p className="movie-card__desc">{movie.description}</p>
        {userRating > 0 && (
          <p className="movie-card__mine">Tu nota: {"★".repeat(userRating)}</p>
        )}
      </div>
    </article>
  );
}

export default MovieCard;
