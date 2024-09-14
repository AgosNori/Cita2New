import "./Matrimonios.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Matrimonios() {
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
    <div className="matrimonios">
      < div className="NavPrincipalMatrimonios">
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


    


      <div className="texto-matrimonio">
        <h2 className="subtitulo-matrimonio">
          Acerca del Ministerio de Matrimonios.
        </h2>
        <div className="parrafoMatri">
          <p>
            La bondad de Dios promueve el matrimonio: Dios creó el matrimonio para
            ser una bendición y una ayuda mutua. Es importante entender que, en su
            mayoría, la voluntad de Dios es que las personas se casen. La Biblia
            también nos advierte sobre precipitarnos en relaciones matrimoniales
            sin considerar la voluntad de Dios. Recordemos que Dios tiene un plan
            perfecto para nuestras vidas, y buscarlo a él primero es fundamental. <br /> <br />
            Romanos 12:2 y Jeremías 29:11 nos aseguran que sus planes son buenos y
            beneficiosos. Casarse con un Cristiano comprometido: Proverbios 21:9 y
            25:24 advierten sobre las consecuencias de casarse equivocadamente.
            Buscar un cónyuge comprometido con Cristo es esencial. 2 Corintios
            6:14-18 nos enseña sobre no unirnos en yugo desigual con no creyentes.
            El matrimonio debe ser una unión centrada en Cristo. Prioridad en el
            matrimonio: Mateo 6:33 nos recuerda buscar primero el reino de Dios. <br /> <br />
            Mantener a Dios como nuestra prioridad más importante es esencial. 1
            Corintios 7:32-35 aconseja a los solteros y casados a enfocarse en
            servir al Señor sin distracciones. El ministerio de matrimonios debe
            fomentar la unidad, el crecimiento espiritual y la adoración a Dios en
            la relación conyugal.
          </p>
        </div>

      </div>
      <div className="lugar-horario">
        <div className="horarios-matrimonios">
          <h3 className="tituloMatri">Nuestros Horarios de Reunión.</h3>
          <div className="tablaM">
            <div className="filaM">
              <div className="columnaM">Días</div>
              <div className="columnaM">Horario</div>
            </div>
            <div className="filaM">
              <div className="columnaM">Jueves</div>
              <div className="columnaM">20:00 hs.</div>
            </div>
          </div>
        </div>
        <div className="lugar-matrimonio">
          <h3>Cómo llegar </h3>
          <div className="loaderLocation"></div>
          <div className="boton-matrimonio">
            <Link
              href="https://www.google.com/maps/place/Iglesia+Cita+Con+La+Vida/@-31.340506,-63.9610832,17z/data=!4m7!3m6!1s0x9432eabea42245b1:0x3d408621c6ce3156!4b1!8m2!3d-31.3432517!4d-63.9398718!16s%2Fg%2F11bwylz14v?entry=ttu"
              className="btn-matrimonio"
            >
              Mapa.
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="titulo-recursos">Recursos</h2>
      </div>
      <section className="recursos-matrimonios">
        <div className="card-matrimonios">
          <img className="img-card-matrimonio" src="./Matrimonios2.webp"></img>
          <h3 className="parrafo-card-matrimonio"></h3>
          <Link to="https://www.youtube.com/@citaconlavidamontecristo3858" className="btn-card-matrimonio">
            Video.
          </Link>
        </div>
        <div className="card-matrimonios">
          <img className="img-card-matrimonio" src="./Matrimonios3.jpg"></img>
          <h3 className="parrafo-card-matrimonio"></h3>
          <Link to="https://www.biblegateway.com/?language=es" className="btn-card-matrimonio">
            Biblia.
          </Link>
        </div>
        <div className="card-matrimonios">
          <img className="img-card-matrimonio" src="./Matrimonios4.jpg"></img>
          <h3 className="parrafo-card-matrimonio"></h3>
          <Link to="https://libreriapeniel.com/?s=matrimonio&post_type=product&type_aws=true" className="btn-card-matrimonio">
            Libros.
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Matrimonios;

