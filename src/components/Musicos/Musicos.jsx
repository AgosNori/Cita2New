
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from "prop-types";
import './Musicos.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Musicos({ images }) {
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
        <div className="contMusicos">
            < div className="NavPrincipalMusicos">
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
          
            <br></br>
            <section className='paragraphs-musicos'>
                <div className="paragraphs">
                    <div className="paragraph">
                        <h2 className='ttParag'>Ministerio de Música</h2>
                        <p>Más allá de la excelencia musical, debemos concentrarnos en los objetivos de un ministerio
                            musical eficaz. La música tiene la capacidad
                            divina de conmovernos e inspirarnos. los objetivos de la adoración incluyen,
                            recordar verdades bíblicas: Las canciones deben ayudar al pueblo a recordar las verdades fundamentales de la fe.
                            La música enseña y amonesta a los demás en la sabiduría de Dios.
                            Adorar a Dios: La adoración fluye desde corazones agradecidos por quién es Dios y lo que ha hecho.
                            Los músicos que sirven en el ministerio cultivan su entendimiento del evangelio, crecen en santidad y luchan contra el pecado. Además,  desarrollan sus habilidades musicales.
                            El coro,desempeña un papel crucial en el ministerio. Su función es importante y debe recibir atención especial.
                            El ministerio de música no se trata solo de la calidad musical, sino de dirigir a la congregación hacia una adoración
                            gnificativa y centrada en Dios.</p>
                        <img></img>
                    </div>
                    <div className="paragraph">
                        <h2 className='ttParag'>Escuela de Musica</h2>
                        <p>Bajo la órbita del Ministerio de Música funcoina nuestra Escuela de Música,  en donde podrás expresar y desarrollar tu don al servicio de Dios, juanto a la direccion de colaboradores capacitados y asi poder brindar un servicio de excelencia como nuestro padre lo merece. En la misma ofrecemos calses en distintos talleres como lo son el de : guitarra, batería , teclado y tambien podras expesarte en el arte que en la manos correcta agradará a nuestro padre; para lo cual contamos con el grupo de danza y bandera.  </p>
                        <img></img>
                    </div>
                </div>
            </section>
            <section className='tarjetas-musicos'>
                <div className="tarjetas">
                    <div className="tarj">
                        <img src="./bateria.jpeg" alt="Imagen 1" />
                        <div className="tarj-cont">
                            <h3>Taller de Batería</h3>

                        </div>
                    </div>
                    <div className="tarj">
                        <img src="./guitarra.jpg" alt="Imagen 2" />
                        <div className="tarj-cont">
                            <h3>Taller de Guitarra</h3>

                        </div>
                    </div>
                    <div className="tarj">
                        <img src="./piano.jpeg" />
                        <div className="tarj-cont">
                            <h3>Taller de Teclado</h3>

                        </div>
                    </div>
                    <div className="tarj">
                        <img src="./Card3.jpg" alt="Imagen 4" />
                        <div className="tarj-cont">
                            <h3>Danza y Bandera</h3>

                        </div>
                    </div>
                </div>
            </section>
            <div><br></br></div>


        </div>
    );
}
Musicos.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Musicos;