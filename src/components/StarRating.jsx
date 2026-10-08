import { useState } from "react";

const STARS = [1, 2, 3, 4, 5];


function StarRating({ value = 0, onRate }) {
  const [hover, setHover] = useState(0);
  const active = hover || value;

  return (
    <div
      className="stars"
      role="radiogroup"
      aria-label="Tu calificación"
      onMouseLeave={() => setHover(0)}
    >
      {STARS.map((star) => (
        <button
          key={star}
          type="button"
          role="radio"
          aria-checked={value === star}
          aria-label={`${star} ${star === 1 ? "estrella" : "estrellas"}`}
          className={`stars__star${star <= active ? " is-on" : ""}`}
          onMouseEnter={() => setHover(star)}
          onClick={() => onRate(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default StarRating;
