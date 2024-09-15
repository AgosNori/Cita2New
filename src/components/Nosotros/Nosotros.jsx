import './Nosotros.css';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Nosotros() {
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
        <div className='nosotros'>
            < div className="NavPrincipalNosotros">
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

            <div className='descripcion'>
                <div className='imagenPastor'>
                    <img className='fotoPastor' src='public\Home1.jpg' width="550"></img>
                </div>
                <div className='textoDescrip'>
                    <p>La vida del pastor es una vocación llena de desafíos, sacrificios y bendiciones. El pastor lleva la carga de cuidas las almas de la congregación. Esto implica orar por ellos, aconsejarlos, visitarlos en momentos de necesidad y guiarlos en su caminar con Dios. La responsabilidad de predicar la Palabra de Dios con fidelidad y amor es un peso significativo.
                        El pastor estudia, prepara las predicas y ministra incluso cunado su propio corazon está afligido. Las emergencias, las visitas hospitalarias, los funerales y las reuniones con miembros de la iglesia pueden surgiri en cualquier momento.
                        Esto requiere de su flexibilidad y sacrificio personal.
                    </p>
                </div>
            </div>
            <div className='mision'>
                <div className='tituloMision'>
                    <h3 className='ttmision'>Nuestra Misión</h3>
                </div>
                <div className='cuerpoMision'>
                    <div className='textoMision'>
                        <p>Seguimos la visión de Jesús: alcanzar a las multitudes con el mensaje del Evangelio. Al igual que Él, tambien tenemos un método claro: formar líderes apasionadso por la evangelización y el discipulado. Para lograrlo, hemos construido la Escalera del Éxito, compuesta por cuatro pasos fundamentales: Ganar, Consolidar, Discipular y Enviar.

                        </p>
                    </div>
                    <div className='fotico'>
                        <img className='imagenMision' src='public\mision.png' width="600" />
                      
                    </div>
                </div>

            </div>
            <div className='ministeriosBoton'>
                <h2 className='irTitulo'>Te invitamos a conocer nuestros ministerios</h2>
                <button className='irMinis'>
                    <span className="span-mother">
                        <span>C</span>
                        <span>o</span>
                        <span>n</span>
                        <span>o</span>
                        <span>c</span>
                        <span>e</span>
                        <span>r</span>
                    </span>
                    <span className="span-mother2">
                        <span>C</span>
                        <span>o</span>
                        <span>n</span>
                        <span>o</span>
                        <span>c</span>
                        <span>e</span>
                        <span>r</span>
                    </span>
                </button>

            </div>
        </div>
    )
}
export default Nosotros