import "../css/Header.css";
import { useState } from "react";

const Header = ({ busq, setBusq, onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    setBusq(e.target.value.toLowerCase());
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(); // Llamar a la función de búsqueda proporcionada por el componente padre
  };

  return (
    <>
      <header>
        <nav>
          <h2 className="banner_logo" onClick={handleLogoClick}>
            Wikideas
          </h2>
          <div
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={handleMenuToggle}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/create">Crear</a>
            </li>
            <li>
              <a href="/team">Nosotros</a>
            </li>
          </ul>
        </nav>
        <section className="ask">
          <h1>
            ¿Quieres consultar, <span>colaborar</span> o crear?
          </h1>

          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Buscar..." onChange={handleChange} />
            <button type="button" onClick={handleSearch}>Buscar</button>
          </form>
        </section>
      </header>
    </>
  );
};

export default Header;
