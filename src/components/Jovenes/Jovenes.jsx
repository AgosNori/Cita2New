import "./Jovenes.css";
import PropTypes from "prop-types";
function Jovenes({ images }) {
  return (
    <>
      <div className="jovenes">
        <div className="BannerJovenes">
          <div className="fotoprincipalJovenes">
            <div className="parallax-inner-Jovenes">
              <h2 className="tituloParallaxHombre">Bienvenidos al ministerio de Jovenes</h2>
            </div>
          </div>
        </div>
        <div className="descJovenes">
          <p>El ministerio de prepara a los  jóvenes con visión de un futuro integro, entendiendo los preceptos de la sana doctrina. Involucrar a los jóvenes en el servicio, la adoración y el liderazgo les permite crecer y contribuir.
            Los jóvenes enfrentan decisiones importantes sobre su futuro. El ministerio debe ofrecer apoyo espiritual y práctico mientras navegan por la universidad, la carrera, trabajos y las relaciones.
          </p>
        </div>
        <div className='CardMyJ'>
          <div className='cardsInfo'>
            <div className='fondoCard'>
              <div className='cardMyJ'>
                <h2 className='discipuladosMyJ'>Ministerio de PreAdolescentes</h2>
                <p className='DescripMyJ'>Etapa Crucial: La preadolescencia es un período de transición entre la niñez y la adolescencia. Los preadolescentes necesitan un espacio seguro donde puedan explorar su fe, hacer preguntas y recibir orientación.
                  El ministerio con preadolescentes está centrado en establecer sólidos fundamentos bíblicos. Es el momento adecuado para enseñarles sobre la gracia, la salvación y la vida en Cristo.</p>
              </div>
            </div>
          </div>
          <div className='img'>
            <img src='./Jovenes2.jpg' alt='imagen1'></img>
          </div>
        </div>
        <div className='CardMyJ card2'>
          <div className='cardsInfo'>
            <div className='fondoCard'>
              <div className='cardMyJ'>
                <h2 className='discipuladosMyJ'>Ministerio de Adolescentes</h2>
                <p className='DescripMyJ'>Desafíos de la Adolescencia: La adolescencia es una etapa de cambios físicos, emocionales y sociales. Los adolescentes enfrentan desafíos como la identidad, las presiones sociales y las dudas de fe.
                  El ministerio con adolescentes debe ir más allá de la superficialidad. Predicar la Palabra de Dios con fidelidad y abordar temas relevantes para ellos es esencial.</p>
              </div>
            </div>
          </div>
          <div className='img img2'>
            <img src='./Jovenes3.jpg' alt='imagen2'></img>
          </div>
        </div>
      </div>
      <div className="cuadro-imagenes">
    
        {images.map((image, index) => (
          <img key={index} className="img-cuadro" src={image} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
    </>
  );
}
Jovenes.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Jovenes;