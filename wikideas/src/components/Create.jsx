import { useState } from "react";
import "../css/Create.css";
import NaturalImage from "../Assets/Natural.jpg";

const Create = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [savedContent, setSavedContent] = useState("");

    const openModal = () => {
    setIsOpen(true);
};

    const closeModal = () => {
    setIsOpen(false);
};

    const handleTitleChange = (event) => {
    setTitle(event.target.value);
};

    const handleCategoryChange = (event) => {
    setCategory(event.target.value);
};

    const handleContentChange = (event) => {
    setContent(event.target.value);
};

    const saveTopic = () => {
    setSavedContent(content);
    closeModal();
};

    const editContent = () => {
    setContent(savedContent);
    openModal();
};

    const cancelEdit = () => {
    closeModal();
};

    const goToHome = () => {
    // Lógica para redirigir al componente Home.jsx
    console.log("Redirigiendo a Home...");
};

return (
    <div className="create" style={{ backgroundImage: `url(${NaturalImage})` }}>
      {/* Ventana principal */}
    <div className="create-window" onClick={openModal}>
        <h2>Crear nuevo tema</h2>
        <p>Comparte tu conocimiento</p>
        <button className="create-button">Nuevo tema</button>
    </div>

      {/* Modal */}
    {isOpen && (
        <div className="modal">
        <img className="modal-background" src={NaturalImage} alt="Natural" />

          {/* Contenido del modal */}
        <div className="modal-content show">
            <h3>¡Wow, vas a crear un nuevo tema!</h3>
            {/* Formulario */}
            <form>
        <div className="input-group">
                <label htmlFor="title">Título:</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={handleTitleChange}
                />
        </div>
        <div className="input-group">
                <label htmlFor="category">Categoría:</label>
                <input
                type="text"
                id="category"
                value={category}
                onChange={handleCategoryChange}
                />
        </div>
        <div className="input-group">
                <label htmlFor="content">Escribir tema:</label>
                <textarea
                id="content"
                value={content}
                onChange={handleContentChange}
                ></textarea>
        </div>
            </form>

            {/* Botones */}
            <div className="modal-buttons">
            <button className="edit-button" onClick={editContent}>
                Editar
            </button>
            <button className="save-button" onClick={saveTopic}>
                Guardar
            </button>
            <button className="cancel-button" onClick={cancelEdit}>
                Cancelar
            </button>
            </div>
            </div>
        </div>
    )}
      {/* Modal de visualización */}
    {savedContent && (
        <div className="modal">
        <img className="modal-background" src={NaturalImage} alt="Natural" />
          {/* Contenido del modal */}
        <div className="modal-content show">
            {/* Título del modal */}
            <h3>Vista previa</h3>
            {/* Contenido guardado */}
            <p>{savedContent}</p>
            {/* Botones */}
            <div className="modal-buttons">
            <button className="edit-button" onClick={editContent}>
                Editar
            </button>
            <button className="save-button" onClick={goToHome}>
                Guardar y volver al inicio
            </button>
            <button className="cancel-button" onClick={cancelEdit}>
                Cancelar
            </button>
            </div>
        </div>
        </div>
    )}
    </div>
);
};

export default Create;
