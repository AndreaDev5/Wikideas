import Header from "./Header";
import Footer from "./Footer";
import card1Image from "../Assets/Card1.jpg";
import card2Image from "../Assets/Card2.jpg";
import card3Image from "../Assets/Card3.jpg";
import bombilla from "../Assets/bombilla.jpg";
import "../css/Home.css";
import About from "./About";

const Home = () => {
  return (
    <>
      <Header />
      <section className="container__cursos">
        <article className="card">
          <figure>
            <img src={card1Image} alt="Imagen 1" />
            <figcaption>Texto de la imagen</figcaption>
          </figure>
          <div className="contenido">
            <h3>Tecnologia</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, commodi aliquam odit unde voluptatem quo ipsam
              voluptates voluptatibus quaerat numquam.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, commodi aliquam odit unde voluptatem quo ipsam
              voluptates voluptatibus quaerat numquam.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, commodi aliquam odit unde voluptatem quo ipsam
              voluptates voluptatibus quaerat numquam.
            </p>
            <a href="#">Gratis</a>
          </div>
        </article>
      </section>

      <section className="MyV">
        <article className="Mision">
          <h2>WIKIDEAS</h2>
          <p>
            Encuentra información precisa y actualizada en nuestra enciclopedia
            creada por la comunidad, donde se fomenta la colaboración y el
            intercambio de conocimientos
          </p>
        </article>
        <article className="Vision">
          <p>
            Es una enciclopedia, entendida como soporte que permite la
            recopilación, el almacenamiento y la transmisión de la información
            de forma estructurada. Es un wiki, por lo que, con pequeñas
            excepciones, puede ser editada por cualquiera. Es de contenido
            abierto.
          </p>
          <img src={bombilla} alt="imagen de bombilla" />
        </article>
      </section>
      <About />
      <Footer />
    </>
  );
};

export default Home;
