import { Link } from 'react-router-dom';
import "../css/Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </div>
      <p className="footer-text">Creado por y para la comunidad</p>
      <Link to="/contact">Contactate con nosotros</Link>
    </footer>
  );
};

export default Footer;
