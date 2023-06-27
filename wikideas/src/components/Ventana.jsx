import "../css/ventana.css";

const VentanaEmergente = ({ palabraBuscada, onClose }) => {
return (
    <main className="ventana-container">
    <section className="ventana-contenido">
        <h3>{`La palabra "${palabraBuscada}" no se encuentra en Wikideas. Realiza una nueva búsqueda.`}</h3>
        <button onClick={onClose}>Aceptar</button>
    </section>
    </main>
    );
};

export default VentanaEmergente;
