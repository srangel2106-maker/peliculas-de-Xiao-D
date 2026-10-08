import { useState } from "react";
import movies from "./data/movies";
import { filterMovies, getGenres, getYears } from "./utils/movieUtils";
import Header from "./components/Header";
import Filters from "./components/Filters";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Favorites from "./components/Favorites";

const INITIAL_FILTERS = {
  genre: "all",
  year: "all",
  minRating: 0,
  onlyFavorites: false,
};

const genres = getGenres(movies);
const years = getYears(movies);

function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [favorites, setFavorites] = useState([]); // solo IDs
  const [ratings, setRatings] = useState({}); // { [id]: 1..5 }
  const [selectedId, setSelectedId] = useState(null);

  const visibleMovies = filterMovies(movies, query, filters, favorites);
  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));
  const selectedMovie = movies.find((movie) => movie.id === selectedId);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id) ? current.filter((favId) => favId !== id) : [...current, id]
    );
  };

  const rateMovie = (id, value) => {
    setRatings((current) => {
      const { [id]: previous, ...rest } = current;
      return previous === value ? rest : { ...current, [id]: value };
    });
  };

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} />

      <Filters
        filters={filters}
        genres={genres}
        years={years}
        onFiltersChange={setFilters}
        onReset={() => setFilters(INITIAL_FILTERS)}
      />

      <div className="layout">
        <main>
          <p className="results-count" aria-live="polite">
            {visibleMovies.length} de {movies.length} películas
          </p>
          <MovieList
            movies={visibleMovies}
            favorites={favorites}
            ratings={ratings}
            onSelect={setSelectedId}
            onToggleFavorite={toggleFavorite}
          />
        </main>

        <Favorites
          movies={favoriteMovies}
          onSelect={setSelectedId}
          onRemove={toggleFavorite}
        />
      </div>

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          isFavorite={favorites.includes(selectedMovie.id)}
          userRating={ratings[selectedMovie.id] ?? 0}
          onClose={() => setSelectedId(null)}
          onToggleFavorite={toggleFavorite}
          onRate={rateMovie}
        />
      )}
    </div>
  );
}

export default App;
