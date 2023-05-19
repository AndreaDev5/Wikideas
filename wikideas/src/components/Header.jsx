import React from "react";

const Header = () => {
  return (
    <header>
      <h3>wikideas</h3>
      <nav>
        <ul>
          <li>inicio</li>
          <li>crear</li>
          <li>nosotros</li>
        </ul>
      </nav>
      <form>
        <input type="text" placeholder="Busca aqui" />
        <button>Buscar</button>
      </form>
    </header>
  );
};

export default Header;
