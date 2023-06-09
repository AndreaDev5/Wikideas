import { useEffect, useState } from "react";
import Header from "./Header";
import Results from "./Results";
import Footer from "./Footer";
import About from "./About";
import card1Image from "../Assets/Card1.jpg";
import card2Image from "../Assets/Card2.jpg";
import card3Image from "../Assets/Card3.jpg";
import bombilla from "../Assets/bombilla.jpg";
import "../css/Home.css";



const Home = () => {
  const [busq, setBusq] = useState("");
  const [data, setData] = useState([]);
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://wiki-wavm.onrender.com/api/articulos/consulta");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };
  return (
    <div className="body">
      <Header busq={busq} setBusq={setBusq} setShowResult={setShowResult}/>
      {showResult ? <Results busq={busq} data={data} setShowResult={setShowResult}/> : false}
      <p className="cat">Temas más buscados</p>
      <section className="container__cursos">
        <article className="card">
          <figure>
            <img src={card1Image} alt="Imagen 1" />
          </figure>
          <div className="contenido">
            <h3>Tecnología</h3>
            <p>
              Descubre los avances que están transformando nuestro mundo. Desde
              la inteligencia artificial hasta la electrónica, mantente
              actualizado sobre los últimos descubrimientos y desarrollos
              tecnológicos. Aprende cómo la tecnología está dando forma a
              nuestra sociedad y cómo puedes ser parte de este emocionante
              futuro.
            </p>
            <a href="#">Ver más</a>
          </div>
        </article>

        <article className="card">
          <figure>
            <img src={card2Image} alt="Imagen 2" />
          </figure>
          <div className="contenido">
            <h3>Historia</h3>
            <p>
              Sumérgete en el fascinante pasado que ha moldeado nuestro
              presente. Explora civilizaciones antiguas, eventos históricos
              clave y las vidas de personajes influyentes. Comprende cómo las
              decisiones y los acontecimientos pasados continúan impactando
              nuestra sociedad hoy en día. Aprende de la historia para construir
              un futuro mejor.
            </p>
            <a href="#">Ver más</a>
          </div>
        </article>

        <article className="card">
          <figure>
            <img src={card3Image} alt="Imagen 3" />
          </figure>
          <div className="contenido">
            <h3>Zen</h3>
            <p>
              Encuentra equilibrio y serenidad en tu vida cotidiana. Descubre
              las enseñanzas ancestrales de esta tradición espiritual y
              filosófica, que enfatiza la conexión mente-cuerpo y la atención
              plena. Explora prácticas meditativas y aprende a vivir en el
              presente, encontrando paz interior y sabiduría en un mundo
              acelerado.
            </p>
            <a href="#">Ver más</a>
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
    </div>
  );
};

export default Home;
