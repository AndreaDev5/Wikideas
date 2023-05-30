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
      <a href="/contact">Contactate con nosotros</a>
    </footer>
  );
};

export default Footer;
