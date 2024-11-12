import { Link } from 'react-router-dom';
import './SoyNuevo.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SoyNuevo() {
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
      <div className="soy-nuevo">

        {/* <div className="bienvenida">
          <div className="parallax-innerBienvenida">
            <h2 className='ttBienv'>De modo que si alguno está en Cristo, nueva criatura es; las cosas viejas pasaron; he aquí, todas son hechas nuevas. <br /><br /> 2 Corintios 5:17 (RVR)</h2>
          </div>
        </div> */}
        < div className="NavPrincipalSoyNuevo">
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
        <div className='tarjetitaNuevo'>
          <div className="frm-contacto">
            <h2 className='ttCSN'>¡Bienvenido!</h2>
            <p>
              ¡Bienvenidos a la Iglesia Cita con la Vida Monte Cristo! Aquí encontrarás comunidad, amor y guía espiritual. Juntos crecemos en fe, esperanza y amor. ¡Únete a nuestra familia hoy mismo!
            </p>
            <form className="frm-contacto">
              <div className="frm">
                <label>

                  <input className='inputCSN' type="text" placeholder="Nombre" />
                </label>
                <label>

                  <input className='inputCSN'
                    type="email"
                    placeholder="Correo"
                  />
                </label>
                <button type="submit" className="btn-frm-contacto">
                  Conecta!
                </button>
              </div>
            </form>
          </div>
        </div>



        <div className='SeccionMateriales'>
          <h3>Material de Ayuda</h3>
        </div>
        <div className="material-lectura" data-aos="zoom-in">
          <div className="cardSoyNuevo">
            <img
              src="./biblia.jpg"
              alt="Descripción de la imagen"
            ></img>
            <div className="card-content">
              <button className="btn-soyNuevo" type=" submit">
                <Link to="https://www.bible.com/es/app" className="btn-material"> Biblia App</Link>
              </button>
            </div>
          </div>
          <div className="cardSoyNuevo">
            <img
              src="./musica.jpg"
              alt="Descripción de la imagen"
            ></img>
            <div className="card-content">
              <button className="btn-soyNuevo" type=" submit">
                <Link to="https://www.youtube.com/watch?v=IejOt3BWi3s" className="btn-material"> Musica</Link>
              </button>
            </div>
          </div>
          <div className="cardSoyNuevo">
            <img
              src="./radio.jpg"
              alt="Descripción de la imagen"
            ></img>
            <div className="card-content">
              <button className="btn-soyNuevo" type=" submit">
                <Link to="http://citaconlavida.com.ar/radiohtml.html" className="btn-material"> Radio</Link>
              </button>
            </div>
          </div>
          <div className="cardSoyNuevo">
            <img
              src="./youtube.png"
              alt="Descripción de la imagen"
            ></img>
            <div className="card-content">
              <button className="btn-soyNuevo" type=" submit">
                <Link to="https://www.youtube.com/@citaconlavidamontecristo3858" className="btn-material">   Canal Youtube</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoyNuevo;