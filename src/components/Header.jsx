import SearchBar from "./SearchBar";

function Header({ query, onQueryChange }) {
  return (
    <header className="header">
      <div className="header__brand">
        <div>
          <h1 className="header__title">Cinemateca de Xiao</h1>
          <p className="header__subtitle">
            Las películas que el yaksha vigila desde las alturas de Liyue
          </p>
        </div>
      </div>
      <SearchBar query={query} onQueryChange={onQueryChange} />
    </header>
  );
}

export default Header;