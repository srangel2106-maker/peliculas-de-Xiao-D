const MIN_RATINGS = [
  { value: 0, label: "Cualquiera" },
  { value: 7, label: "7 o más" },
  { value: 8, label: "8 o más" },
  { value: 8.5, label: "8.5 o más" },
  { value: 9, label: "9 o más" },
];

function Filters({ filters, genres, years, onFiltersChange, onReset }) {
  const updateFilter = (name, value) => {
    onFiltersChange({ ...filters, [name]: value });
  };

  return (
    <section className="filters" aria-label="Filtros">
      <label className="field">
        <span>Género</span>
        <select
          value={filters.genre}
          onChange={(event) => updateFilter("genre", event.target.value)}
        >
          <option value="all">Todos</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Año</span>
        <select
          value={filters.year}
          onChange={(event) => updateFilter("year", event.target.value)}
        >
          <option value="all">Todos</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </label>

      <label className="field">
        <span>Calificación mínima</span>
        <select
          value={filters.minRating}
          onChange={(event) => updateFilter("minRating", Number(event.target.value))}
        >
          {MIN_RATINGS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>

      <label className="check">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(event) => updateFilter("onlyFavorites", event.target.checked)}
        />
        <span>Solo favoritas</span>
      </label>

      <button type="button" className="btn btn--ghost" onClick={onReset}>
        Limpiar filtros
      </button>
    </section>
  );
}

export default Filters;
