import "./Jovenes.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Jovenes({ images }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navRef = useRef(null);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(!isMenuOpen);
      if (!isMenuOpen) {
        navRef.current.classList.add('responsive_nav_principal');
      } else {
        navRef.current.classList.remove('responsive_nav_principal');
      }
    } else {
      navRef.current.classList.toggle('responsive_nav_large');
    }
  };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="jovenes">
        < div className="NavPrincipalJovenes">
          <header className="headerNavP">
            <div className="nav">
              <div data-aos="fade-right">
                <img className="logoNavP" src='./Logo RGB BLANCO.png' alt="Logo" />
              </div>
              <nav ref={navRef} className={`navNavP ${isMenuOpen ? "responsive_nav_principal" : ""}`}>
                <div data-aos="fade-left">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li className="dropdown" onMouseEnter={() => toggleDropdown("ministerios")} onMouseLeave={() => toggleDropdown(null)}>
                      <Link to="#ministerios">Ministerios</Link>
                      {activeDropdown === "ministerios" && (
                        <ul className="dropdown-menu">
                          <li><Link to="/hombres" rel="noopener noreferrer">Discipulado de hombres</Link></li>
                          <li><Link to="/mujeres" rel="noopener noreferrer">Discipulado de mujeres</Link></li>
                          <li><Link to="/matrimonios" rel="noopener noreferrer">Matrimonios</Link></li>
                          <li><Link to="/citakids" rel="noopener noreferrer">Cita kids</Link></li>
                          <li><Link to="/jovenes" rel="noopener noreferrer">Jovenes</Link></li>
                          <li><Link to="/reuniones" rel="noopener noreferrer">Reuniones generales</Link></li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link to="/nosotros" rel="noopener noreferrer">Nosotros</Link>

                    </li>
                    <li className="dropdown" onMouseEnter={() => toggleDropdown("vidaiglesia")} onMouseLeave={() => toggleDropdown(null)}>
                      <Link to="#vidaiglesia">Vida de la iglesia</Link>
                      {activeDropdown === "vidaiglesia" && (
                        <ul className="dropdown-menu">
                          {/*} <li><Link to="/avisos" rel="noopener noreferrer">Avisos importantes</Link></li>*/}
                          <li><Link to="/calendario" rel="noopener noreferrer">Calendario</Link></li>
                          <li><Link to="/campamento" rel="noopener noreferrer">Campamentos</Link></li>
                          <li><Link to="/musicos" rel="noopener noreferrer">Escuela de musicos</Link></li>
                          <li><Link to="/galeria" rel="noopener noreferrer">Galeria</Link></li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link to="/soynuevo" rel="noopener noreferrer">Soy Nuevo</Link>
                    </li>
                    <li>
                      <Link to="/contacto" rel="noopener noreferrer">Contacto</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <button className="nav-btn-principal" onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </header>
        </div>

        <div className="descJovenes">
          <p>El ministerio de prepara a los  jóvenes con visión de un futuro integro, entendiendo los preceptos de la sana doctrina. Involucrar a los jóvenes en el servicio, la adoración y el liderazgo les permite crecer y contribuir.
            Los jóvenes enfrentan decisiones importantes sobre su futuro. El ministerio debe ofrecer apoyo espiritual y práctico mientras navegan por la universidad, la carrera, trabajos y las relaciones.
          </p>
        </div>
        <div className='CardJovenes'>
          <div className='cardsInfoJ'>
            <div className='fondoCardJ'>
              <div className='cardJ'>
                <h2 className='discipuladosJovenes'>Ministerio de Preados</h2>
                <p className='descJ'>Etapa Crucial: La preadolescencia es un período de transición entre la niñez y la adolescencia. Los preadolescentes necesitan un espacio seguro donde puedan explorar su fe, hacer preguntas y recibir orientación.
                  El ministerio con preadolescentes está centrado en establecer sólidos fundamentos bíblicos. Es el momento adecuado para enseñarles sobre la gracia, la salvación y la vida en Cristo.</p>
              </div>
            </div>
          </div>
          <div className='imgJ img2J'>
            <img src='./App9.jpg' alt='imagen1' ></img>
          </div>
        </div>
        <div className='CardJovenes card2J'>
          <div className='cardsInfoJ'>
            <div className='fondoCardJ'>
              <div className='cardJ'>
                <h2 className='discipuladosJovenes'>Ministerio de Ados</h2>
                <p className='descJ'>Desafíos de la Adolescencia: La adolescencia es una etapa de cambios físicos, emocionales y sociales. Los adolescentes enfrentan desafíos como la identidad, las presiones sociales y las dudas de fe.
                  El ministerio con adolescentes debe ir más allá de la superficialidad. Predicar la Palabra de Dios con fidelidad y abordar temas relevantes para ellos es esencial.</p>
              </div>
            </div>
          </div>
          <div className='imgJ img2J'>
            <img src='./Jovenes3.jpg' alt='imagen2'></img>
          </div>
        </div>
      </div>
      <div className="cuadro-imagenes">

        {images.map((image, index) => (
          <img key={index} className="img-cuadro" src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </>
  );
}
Jovenes.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Jovenes;