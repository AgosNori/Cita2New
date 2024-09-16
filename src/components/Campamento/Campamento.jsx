import "./Campamento.css";
import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Campamento({ campamentoImages }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);



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
      < div className="NavPrincipalCampamento">
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
     
      <section className="banner-campa-campamento">
        <div className="imagen-conta-campamento">
         
          <div className="texto-sobre-imagen-campamento">
            <h2>Campa de Verano ¡Inscríbete cuanto antes!</h2>
            <button className="btn-inscripcion-campamento">Inscribirse</button>
          </div>
        </div>
      </section>
      <div className="content-campamento">
        <h2 className="ttCampa">Campamentos de la Iglesia Cita Con La Vida Montecristo</h2>
        <p className="pCampa">
          En el mes de febrero se desarrollaron los campamentos para niños de 10 a 18 años, en los cuales se
          vivieron días expectaculares en la presencia de Dios!;
          Donde se les impartió palabra y compartieron momentos únicos en un lugar adaptado para el disfrute en tiempo estival;
          con juegos acuáticos y piscinas adaptadas para todas las edades.
          No dudes de consultar las fechas para los proximos campamentos te esperamos! Pasarás un tiempo hermoso en la presencia de Dios!
        </p>
      </div>
      <div className="cuadro-imagenes">
        {campamentoImages && Array.isArray(campamentoImages) && campamentoImages.map((image, index) => (
          <img key={index} className="img-cuadro" src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </>
  );
}

Campamento.propTypes = {
  campamentoImages: PropTypes.array.isRequired,
}

export default Campamento;
