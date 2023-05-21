import '../css/Header.css';

const Header = () => {
    return (
    <div className="banner_main">
        <header>
        <a href="/">
            <h2 className="banner_logo">Wiki<span>deas</span></h2>
        </a>
        <nav>
            <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/Create">Crear</a></li>
            <li><a href="/Team">Nosotros</a></li>
            </ul>
        </nav>
        <form className="search_form">
            <input
            type="text"
            placeholder="Buscar..."
            />
            <button type="submit">Buscar</button>
        </form>
        </header>
        <div className="banner_title">
        <h1>¿Quieres consultar, colaborar o crear?</h1>
        </div>
    </div>
    );
}

export default Header;
