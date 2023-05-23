import "../css/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <a href="/">
            <h2 className="banner_logo">Wikideas</h2>
          </a>
          <ul>
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
            <button>Buscar</button>
          </form>
        </section>
      </header>
    </>
  );
};

export default Header;
