import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/Results.css";

const Results = ({ busq, data }) => {
  let filteredData = [];
  if (busq && typeof busq === "string") {
    filteredData = data.filter(
      (item) =>
        item.titulo.toLowerCase().includes(busq) ||
        item.contenido.toLowerCase().includes(busq)
    );
  }

  const results = filteredData.map((item) => (
    <article className="result-card" key={item.id}>
      <div className="card-content">
        <div className="card-icon">
          <FiSearch />
        </div>
        <div className="card-text">
          <h2 className="card-title">{item.titulo}</h2>
          <p className="card-description">{item.contenido}</p>
        </div>
        <div className="card-button">
          <Link to={`/consulta/${item.id}`}>Consultar</Link>
        </div>
      </div>
    </article>
  ));

  return <section className="Results-container">{results}</section>;
};

export default Results;
