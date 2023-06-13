import "../css/Header.css";

const Header = ({ busq, setBusq }) => {
  const handleChange = (e) => {
    e.preventDefault();
    setBusq(!busq);
    console.log(busq);
  };

  return (
    <>
      <header>
        <nav>
          <a className="title" href="/">
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
            <button onClick={handleChange}>Buscar</button>
          </form>
        </section>
      </header>
    </>
  );
};

export default Header;
