import "../css/Header.css";
import { useState } from "react";

const Header = ({ busq, setBusq }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setBusq(!busq);
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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

          <form>
            <input type="text" placeholder="Buscar..." />
            <button onClick={handleChange}>Buscar</button>
          </form>
        </section>
      </header>
    </>
  );
};

export default Header;
