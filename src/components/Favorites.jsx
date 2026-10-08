function Favorites({ movies, onSelect, onRemove }) {
  return (
    <aside className="favorites" aria-label="Películas favoritas">
      <h2 className="favorites__title">Favoritas ({movies.length})</h2>

      {movies.length === 0 ? (
        <p className="favorites__empty">
          Aún no tienes ninguna. Pulsa el corazón en una tarjeta para guardarla aquí.
        </p>
      ) : (
        <ul className="favorites__list">
          {movies.map((movie) => (
            <li key={movie.id} className="favorites__item">
              <button type="button" className="favorites__open" onClick={() => onSelect(movie.id)}>
                <img src={movie.image} alt="" />
                <span>
                  <strong>{movie.title}</strong>
                  <small>{movie.year}</small>
                </span>
              </button>
              <button
                type="button"
                className="favorites__remove"
                aria-label={`Quitar ${movie.title} de favoritos`}
                onClick={() => onRemove(movie.id)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default Favorites;
