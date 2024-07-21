import "./Citakids.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

function Citakids({ images }) {
  const widthOfSingleImage = 500;
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      controls.start({
        x: -nextIndex * widthOfSingleImage,
        transition: { duration: 0.5, ease: 'linear' },
      });
      setCurrentIndex(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length, controls]);

  return (
    <div className="kids">

        
      <div className="fotoprincipalKids">
        <div className="parallax-kids">
          <p>
            Pero Jesús les dijo: «Dejen que los niños vengan a mí. ¡No los detengan!
            Pues el reino del cielo pertenece a los que son como estos niños».
            (Mateo 19:14 NTV)
          </p>
        </div>
      </div>
      <div>
        <h3>Ministerio de Niños.</h3>
      </div>

      <div className="texto-kids">
        <p>
          El objetivo principal del ministerio de niños es ayudar a los niños a
          escuchar y responder al evangelio. Es un espacio donde los pequeños
          pueden aprender sobre Dios, Jesús y la Biblia de manera accesible y
          significativa. Además, el ministerio de niños proporciona un contexto
          para la amistad y relaciones seguras entre generaciones. Los niños
          interactúan con adultos piadosos que les guían y les muestran el amor
          de Cristo. Los niños aprenden el contenido y la importancia de las
          Escrituras. Se les enseña sobre la creación, el pecado, la gracia, la
          salvación y cómo vivir una vida centrada en Jesús. El enfoque debe ser
          sano y divertido, adaptado a la edad de cada niño. Las lecciones
          bíblicas, canciones, juegos y actividades son apropiadas y atractivas.
          Los niños crecen en su fe y desarrollan una relación personal con
          Jesús. El ministerio de niños es más grande de lo que imaginamos. No
          solo impacta a los niños, sino también a las familias y a toda la
          iglesia.
        </p>
      </div>
      <div className="linea-horizontal"></div>
      <div className="cuadradoColores">
       
      </div>
      <div className="video-containerKids">
        <video
          className="videoKids"
          src="public\img\imagenes\kidsabados.mp4"
          controls
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="linea-horizontal"></div>
      <div className="conexion-kids">
        <div className="merendero-kids">
          <div className="mer-kids">
            <p>  El merendero funcoina los días sábados  a las 16:30 hs.</p>
          </div>
          <img className="img-merendero" src="public\img\imagenes\Kids1.jpeg"></img>
          <Link to="/ministerios" className="btn-kids">
            Más Info.
          </Link>
        </div>
      </div>
      <div className="linea-horizontal"></div>
      <div className="contenedor-slide">
        <motion.div className="slider-container">
          <motion.div
            className="slider"
            animate={controls}
            style={{ display: 'flex' }}
          >
            {images.map((image, index) => (
              <motion.div className="item" key={index} style={{ marginRight: '10px' }}>
                <img src={image} alt="" style={{ width: `${widthOfSingleImage}px, height: '200' }` }} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
}

Citakids.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Citakids;