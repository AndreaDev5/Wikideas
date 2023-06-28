import dev from "../Assets/Misión.jpg";
import "../css/About.css";



const About = () => {
  return (
    <section className="about">
      <h2>Conoce mas</h2>
      <section className="teammates">
        <article>
          <div>
            <h3>Mision</h3>
            <p>
            Nuestra misión es crear una enciclopedia colaborativa de acceso libre, donde cualquier persona pueda contribuir y compartir conocimientos de manera abierta y sin restricciones. Nos esforzamos por promover la difusión del conocimiento, fomentando la participación activa de la comunidad para garantizar una información precisa, confiable y actualizada.
            </p>
          </div>
          <img src={dev} alt="ola" />
        </article>
        <article>
          <div>
            <h3>Visión</h3>
            <p>
            Aspiramos a convertirnos en una referencia global en el ámbito del conocimiento, ofreciendo una plataforma inclusiva y accesible para que expertos, entusiastas y estudiantes puedan contribuir y beneficiarse de una base de conocimientos en constante crecimiento. Nuestro objetivo es empoderar a las personas al brindarles la oportunidad de compartir sus ideas, investigaciones y descubrimientos de manera colaborativa.
            </p>
          </div>
          <img src={dev} alt="ola" />
        </article>
        <article>
          <div>
            <h3>reglas de comunidad</h3>
            <p>
            Libertad de expresión: Fomentamos un ambiente inclusivo y respetuoso que valore la diversidad de opiniones y perspectivas. Sin embargo, no se tolerará ningún contenido ofensivo, difamatorio, discriminatorio, ilegal o perjudicial.
            Precisión y fiabilidad: Priorizamos la exactitud y la calidad de la información. Al contribuir, asegúrate de respaldar tus afirmaciones con fuentes verificables y evita la difusión de información falsa o engañosa.
            </p>
          </div>
          <img src={dev} alt="ola" />
        </article>
      </section>
    </section>
  );
};

export default About;
