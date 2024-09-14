import './hombres.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
function Hombres() {
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
        <div className="hombresPage">
            < div className="NavPrincipalHombres">
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

            <div className="aboutHombres">

                <div className="text">
                    <p className="parrafoHombres">El discipulado de hombres en nuestra iglesia es un programa diseñado para fortalecer y edificar la fe, carácter y liderazgo de los hombres en nuestra comunidad. A través de reuniones regulares, estudios bíblicos, tiempo de oración y actividades prácticas, buscamos fomentar relaciones auténticas entre los hombres, inspirar un compromiso más profundo con Dios y equiparlos para enfrentar los desafíos de la vida cotidiana desde una perspectiva cristiana. Nuestro objetivo es cultivar hombres piadosos, íntegros y valientes que puedan impactar positivamente a sus familias, lugares de trabajo y comunidades, reflejando el carácter de Cristo en todas sus acciones y decisiones.<br /> <br />
                        Te esperamos!</p>
                </div>
            </div>
            <div className='titulo'>
                <h3>Nuestras actividades</h3>
            </div>
            <div className='actividades'>
                <div className='card'>
                    <img src='./Galeria4.jpg'>
                    </img>
                </div>
                <div className='card'>
                    <img src='./Galeria5.jpg'>
                    </img>
                </div>
                <div className='card'>
                    <img src='./Galeria6.jpg'>
                    </img>
                </div>
            </div>
        </div >
    )
}
export default Hombres