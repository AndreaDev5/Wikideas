import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import "../css/Results.css";

const Results = ({ busq, data }) => {
  const handleConsultar = (tema) => {
    console.log("Consulta:", tema);
  };

  let results = null;

  if (busq) {
    results = data.map((item) => (
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
            <button onClick={() => handleConsultar(item.titulo)}>
              Consultar
            </button>
          </div>
        </div>
      </article>
    ));
  }

  return <section className="Results-container">{results}</section>;
};

export default Results;
