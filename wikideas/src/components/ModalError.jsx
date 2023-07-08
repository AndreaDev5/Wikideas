import "../css/ModalError.css";

const ModalError = ({ setShowResult, searchWord }) => {
  const closeModal = (e) => {
    e.preventDefault();
    setShowResult(false);
  };

  return (
    <div className="modal-container">
      <div className="error">
        <p> La palabra que buscas no se encuentra en Wikideas 🤖</p>
        <p> Realiza una nueva búsqueda 👩🏻‍💻 </p>
        <button onClick={closeModal}>Aceptar</button>
      </div>
    </div>
  );
};

export default ModalError;
