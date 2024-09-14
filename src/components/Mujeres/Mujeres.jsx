import React from 'react';
import './Mujeres.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Mujeres() {
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
    <div className='containerM'>
      < div className="NavPrincipalMujeres">
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



      <div className='CardWomen'>
        <div className='cardsInfo'>
          <div className='fondoCard'>
            <div className='cardMujeres'>
              <h2 className='discipuladosMuj'>Discipulados de mujeres</h2>
              <p className='DescripMuj'>Un espacio donde las mujeres pueden crecer espiritualmente, fortalecer sus relaciones con Dios y entre ellas, y ser equipadas para enfrentar los desafíos de la vida cotidiana con fe y confianza. Te esperamos!</p>
            </div>
          </div>
        </div>
        <div className='img'>
          <img src='./Galeria7.jpg' alt='imagen1'></img>
        </div>
      </div>
      <div className='CardWomen card2'>
        <div className='cardsInfo'>
          <div className='fondoCard'>
            <div className='cardMujeres'>

              <p className='DescripMuj'>Más bien, que la belleza de ustedes sea la incorruptible, la que procede de lo íntimo del corazón y consiste en un espiritu humilde y apacible. Esta sí que tiene mucho valor delante de Dios.<br /><br /> 1 Pedro 3:4 (NVI)</p>
            </div>
          </div>
        </div>
        <div className='img img2'>
          <img src='./Galeria8.jpg' alt='imagen2'></img>
        </div>
      </div>
      <div className='CardWomen'>
        <div className='cardsInfo'>
          <div className='fondoCard'>
            <div className='cardMujeres'>
              <h2 className='discipuladosMuj'>Con que te encontrarás</h2>
              <p className='DescripMuj'>- Enseñanza biblica <br /> - Apoyo y Comunidad <br /> - Oración y alabanza</p>
            </div>
          </div>
        </div>
        <div className='img'>
          <img src='./Mujeres1.jpg' alt='imagen3'></img>
        </div>
      </div>
      <div className="lugarHorarioMujeres">
        <div className="horarios-mujeres">
          <h3 className='nuestrasReunionestt'>Nuestros Horarios de Reunión.</h3>
          <div className="tabla">
            <div className="fila">
              <div className="columna">Días</div>
              <div className="columna">Horario</div>
            </div>
            <div className="fila">
              <div className="columna">Jueves</div>
              <div className="columna">20:00 hs.</div>
            </div>
          </div>
        </div>
        <div className="lugar-mujeres">
          <h3 className='ttComoLLegar'>Cómo llegar </h3>
          <div class="loaderLocation"></div>
          <div className="boton-mujeres">
            <Link
              to="https://www.google.com/maps/place/Iglesia+Cita+Con+La+Vida/@-31.340506,-63.9610832,17z/data=!4m7!3m6!1s0x9432eabea42245b1:0x3d408621c6ce3156!4b1!8m2!3d-31.3432517!4d-63.9398718!16s%2Fg%2F11bwylz14v?entry=ttu"
              className="btn-mujeres"
            >
              Mapa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mujeres;
