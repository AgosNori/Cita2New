import './NavBorde.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHouse, faUserPlus ,faFileSignature} from '@fortawesome/free-solid-svg-icons';
function NavBorde() {
    return (
        <div className="button-container">
            <Link to="/" className="button home" data-title="Home">
                <FontAwesomeIcon icon={faHouse} />
            </Link>
            <Link to="/nosotros" className="button nosotros" data-title="Nosotros">
                <FontAwesomeIcon icon={faUsers} />

            </Link>
            <Link to="/soynuevo" className="button soynuevo" data-title="Soy Nuevo">
                <FontAwesomeIcon icon={faUserPlus} />
            </Link>
            <Link to="/contacto" className="button contacto" data-title="Contacto">
                <FontAwesomeIcon icon={faFileSignature} />
            </Link>
        </div>
    );
}

export default NavBorde;
