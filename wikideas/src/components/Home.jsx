import Footer from './Footer';
import '../css/Home.css';
import card1Image from '../Assets/Card1.jpg';
import card2Image from '../Assets/Card2.jpg';
import card3Image from '../Assets/Card3.jpg';

const Home = () => {
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
        </header>
        <div className="banner_title">
        <h1>¿Quieres consultar, colaborar o crear?</h1>
        </div>

        <div className="search_bar">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
        </div>

        <section className="container__cursos">
        <article className="card">
            <figure>
            <img src={card1Image} alt="Imagen 1" />
            <figcaption>Texto de la imagen</figcaption>
            </figure>
            <div className="contenido">
            <h3>Tecnologia</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                commodi aliquam odit unde voluptatem quo ipsam voluptates
                voluptatibus quaerat numquam.
            </p>
            <a href="#">Gratis</a>
            </div>
        </article>

        <article className="card">
                <figure>
            <img src={card2Image} alt="Imagen 2" />
            <figcaption>Texto de la imagen</figcaption>
            </figure>
            <div className="contenido">
            <h3>Historia</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                commodi aliquam odit unde voluptatem quo ipsam voluptates
                voluptatibus quaerat numquam.
            </p>
            <a href="#">Gratis</a>
            </div>
        </article>

        <article className="card">
            <figure>
            <img src={card3Image} alt="Imagen 3" />
            <figcaption>Texto de la imagen</figcaption>
            </figure>
            <div className="contenido">
            <h3>zen</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
                commodi aliquam odit unde voluptatem quo ipsam voluptates
                voluptatibus quaerat numquam.
            </p>
            <a href="#">Gratis</a>
            </div>
        </article>
        </section>

        <section>
        <h3>Misión y visión</h3>
        <p>reglas de comunidad</p>
        </section>
        <Footer />
    </div>
    );
}

export default Home;
