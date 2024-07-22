import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './NavPrincipal.css';
import { Link } from "react-router-dom";

function Nav() {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const navRef = useRef(null);
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
            <header className="headerNav">
                <video className="background-video" autoPlay loop muted>
                    <source src="./kidsabados.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div data-aos="fade-right">
                    <img className="logoNav" src='./Logo RGB BLANCO.png' alt="Logo" />
                </div>
                <nav ref={navRef} className="navNav">
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
                                        <li><Link to="/avisos" rel="noopener noreferrer">Avisos importantes</Link></li>
                                        <li><Link to="/calendario" rel="noopener noreferrer">Calendario</Link></li>
                                        <li><Link to="/matrimonios" rel="noopener noreferrer">Matrimonios</Link></li>
                                        <li><Link to="/campamentos" rel="noopener noreferrer">Campamentos</Link></li>
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
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes />
                    </button>
                    <button className="nav-btn" onClick={showNavbar}>
                        <FaBars />
                    </button>
                </nav>
            </header>
        </>
    );
}

export default Nav;