import "./Reuniones.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Reuniones() {
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

    <div className="reuniones">
      < div className="NavPrincipalReuniones">
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
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Reunión General</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">Mier, Vier y Domingos 19:00hs</span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Reunion de Hombres</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">Martes 20:00 hs</span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Cita Kids</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">Sabado 11:00 hs</span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Cadenas rotas</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">Jueves 20:00 hs</span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Reunión de Mujeres</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">Jueves 20:00 hs</span>
              </div>
            </a>
          </div>
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Pre, Ados y Jovenes</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">Sábados 20:00hs</span>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>


  );
}

export default Reuniones;