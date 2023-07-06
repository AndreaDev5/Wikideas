import React from 'react'
import "../css/ModalError.css";

const ModalError = ({setShowResult}) => {

  const closeModal = (e) =>{
    e.preventDefault()
    setShowResult(false)
  }
  return (
    <div className='error'>
      <p>No hay resultados que coincidan con lo que buscas</p>
      <button onClick={closeModal}>Cerrar</button>
     </div>
  )
}

export default ModalError