import { useState } from 'react';
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
    <>
      <Header />
      <section className="contact-container">
        <div className="form-container">
          <h2>Formulario de Contacto</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
