import { useEffect } from "react";
import StarRating from "./StarRating";

function MovieDetail({ movie, isFavorite, userRating, onClose, onToggleFavorite, onRate }) {
  
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="detail__close" aria-label="Cerrar detalle" onClick={onClose}>
          ✕
        </button>

        <img className="detail__poster" src={movie.image} alt={`Póster de ${movie.title}`} />

        <div className="detail__info">
          <h2 id="detail-title" className="detail__title">
            {movie.title}
          </h2>
          <p className="detail__meta">
            {movie.genre}, {movie.year}
          </p>
          <p className="detail__score">★ {movie.rating.toFixed(1)} en la crítica</p>
          <p className="detail__desc">{movie.description}</p>

          <div className="detail__rate">
            <p>
              {userRating > 0
                ? `Tu calificación: ${userRating} de 5`
                : "Aún no la calificas"}
            </p>
            <StarRating value={userRating} onRate={(value) => onRate(movie.id, value)} />
          </div>

          <div className="detail__actions">
            <button
              type="button"
              className={`btn${isFavorite ? " btn--on" : ""}`}
              onClick={() => onToggleFavorite(movie.id)}
            >
              {isFavorite ? "♥ Quitar de favoritos" : "♡ Agregar a favoritos"}
            </button>
            <button type="button" className="btn btn--ghost" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
