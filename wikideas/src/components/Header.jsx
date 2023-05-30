import "../css/Header.css"; 

const Header = ({ busq, setBusq }) => {
  // Componente funcional Header que recibe dos props: busq y setBusq

  const handleChange = (e) => {
    // Función que maneja el cambio en el formulario de búsqueda
    e.preventDefault();
    setBusq(!busq); // Actualiza el estado de busq mediante la función setBusq
    console.log(busq); // Muestra en la consola el valor actual de busq
  };

  const handleLogoClick = () => {
    // Función que maneja el clic en el logotipo "Wikideas"
    window.location.href = "/"; // Redirecciona al home al cambiar la URL de la página
  };

  return (
    <>
      <header>
        <nav>
          <h2 className="banner_logo" onClick={handleLogoClick}>
            {/*  evento onClick */}
            Wikideas
          </h2>
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
            {/* Formulario de búsqueda */}
            <input type="text" placeholder="Buscar..." />
            <button onClick={handleChange}>Buscar</button>
            {/* Botón de búsqueda con evento onClick que llama a la función handleChange */}
          </form>
        </section>
      </header>
    </>
  );
};

export default Header;
