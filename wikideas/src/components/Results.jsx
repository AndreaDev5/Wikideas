import { FiSearch } from "react-icons/fi"; // Importación del icono de búsqueda desde react-icons/fi
import { Link } from "react-router-dom"; // Importación del componente de enlace desde react-router-dom
import "../css/Results.css"; 

const Results = ({ busq, data }) => {
  const handleConsultar = (tema) => {
    console.log("Consulta:", tema); // Función para manejar la consulta de un tema
  };
  const results = data.map((item)=>(
    <article className="pero" key={item.id}>
      <figure>
        <img src={item.imagen ? item.imagen :"https://placekitten.com/90/130"} alt={`imagen de ${item.titulo}`} />
        <figcaption>{`imagen de ${item.titulo}`}</figcaption>
      </figure>
      <div>
        <h2>{item.titulo}</h2>
        <p>{item.contenido}</p>
      </div>
    </article>
  ))
  console.log(data)
  return (
    <section className="Results-container">
      {results}
      {busq && (
        <div className="Results-table">
          <div className="Results-row">
            <div className="Results-icon">
              <FiSearch size={24} /> {/* Icono de búsqueda */}
            </div>
            <div className="Results-content">
              <h2 className="Results-title">Inteligencia Artificial</h2> 
              <p className="Results-description">
                La inteligencia artificial es una rama de la informática que busca
                crear sistemas y máquinas capaces de realizar tareas que requieren
                inteligencia humana.
              </p> 
              <Link to="/consultar/inteligencia-artificial" className="Results-button">
                Consultar {/* Enlace para consultar más */}
              </Link>
            </div>
          </div>
          <div className="Results-row">
            <div className="Results-icon">
              <FiSearch size={24} /> {/* Icono de búsqueda */}
            </div>
            <div className="Results-content">
              <h2 className="Results-title">Inteligencia Emocional</h2> 
              <p className="Results-description">
                La inteligencia emocional es la capacidad de reconocer, comprender
                y gestionar las emociones propias y de los demás, así como utilizar
                esas emociones de manera efectiva.
              </p> 
              <Link to="/consultar/inteligencia-emocional" className="Results-button">
                Consultar 
              </Link>
            </div>
          </div>
          <div className="Results-row">
            <div className="Results-icon">
              <FiSearch size={24} /> 
            </div>
            <div className="Results-content">
              <h2 className="Results-title">10 Tipos de Inteligencia</h2> 
              <p className="Results-description">
                La teoría de las 10 inteligencias propuesta por Howard Gardner sugiere
                que existen diferentes formas de inteligencia, más allá de la
                inteligencia tradicionalmente medida por los tests de CI.
              </p> 
              <Link to="/consultar/10-tipos-de-inteligencia" className="Results-button">
                Consultar 
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Results;
