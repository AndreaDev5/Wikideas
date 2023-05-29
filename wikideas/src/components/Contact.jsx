import  { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-container">
      <Header />
      <div className="form-container">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Mensaje
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </label>
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <Footer />
    </section>
  );
}
