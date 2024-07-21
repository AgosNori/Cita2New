import "./Campamento.css";

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
function Campamento({ campamentoImages }) {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navClass = visible ? "navb-campamento" : "navb-campamento hidden";
  const menuToggleClass = menuOpen ? "menu-toggle open" : "menu-toggle";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
  
      <section className="banner-campa-campamento">
        <div className="imagen-conta-campamento">
          <img
            className="img-campa-campamento"
            src="public\img\Fotos Campamento\Campamento1.jpg"
            alt="Campamento de Verano" width="100%" height="650px"
          />
          <div className="texto-sobre-imagen-campamento">
            <h2>Campa de Verano ¡Inscríbete cuanto antes!</h2>
            <button className="btn-inscripcion-campamento">Inscribirse</button>
          </div>
        </div>
      </section>
      <div className="content-campamento">
        <h2>Campamentos de la Iglesia Cita Con La Vida Montecristo</h2>
        <p>
          En el mes de febreo se desarrollaron los campamentos para niños de 10 a 18 años, en los cuales se
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