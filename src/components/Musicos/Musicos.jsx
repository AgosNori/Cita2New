import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from "prop-types";

function Musicos({ images }) {
    const [dropdownOpenMinisterios, setDropdownOpenMinisterios] = useState(false);
    const [dropdownOpenVidaIglesia, setDropdownOpenVidaIglesia] = useState(false);

    // const handleSearch = (searchTerm) => {
    //   // Realizar la lógica de búsqueda aquí
    //   console.log('Búsqueda realizada:', searchTerm);
    //   // Ejemplo: setSearchResults(resultadosDeLaBusqueda);
    // };

    const dropdownMinisterios = () => {
        setDropdownOpenMinisterios(!dropdownOpenMinisterios);
    };

    const dropdownVidaIglesia = () => {
        setDropdownOpenVidaIglesia(!dropdownOpenVidaIglesia);
    };
    return (
        <div className="contMusicos">
            <section className='video-seccion-musicos'>
                <div className="video-musicos">
                    {/* <iframe
                        width="900"
                        height="500"
                        src="public\img\imagenes\introCita.mp4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe> */}
                    <div className="drop1-musicos">
                        <h2>Desarrollá tu don al servicio de Dios!</h2>
                        <img className="imagen-musicos" src="public\img\imagenes\bannerMusicos.jpeg"></img>
                    </div>

                </div>
            </section>
            <br></br>
            <section className='paragraphs-musicos'>
                <div className="paragraphs">
                    <div className="paragraph">
                        <h2>Ministerio de Música</h2>
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
                        <h2>Escuela de Musica</h2>
                        <p>Bajo la órbita del Ministerio de Música funcoina nuestra Escuela de Música,  en donde podrás expresar y desarrollar tu don al servicio de Dios, juanto a la direccion de colaboradores capacitados y asi poder brindar un servicio de excelencia como nuestro padre lo merece. En la misma ofrecemos calses en distintos talleres como lo son el de : guitarra, batería , teclado y tambien podras expesarte en el arte que en la manos correcta agradará a nuestro padre; para lo cual contamos con el grupo de danza y bandera.  </p>
                        <img></img>
                    </div>
                </div>
            </section>
            <section className='tarjetas-musicos'>
                <div className="tarjetas">
                    <div className="tarj">
                        <img src="public\img\imagenes\bateria.jpeg" alt="Imagen 1" />
                        <div className="tarj-cont">
                            <h3>Taller de Batería</h3>

                        </div>
                    </div>
                    <div className="tarj">
                        <img src="public\img\imagenes\guitarra.jpg" alt="Imagen 2" />
                        <div className="tarj-cont">
                            <h3>Taller de Guitarra</h3>

                        </div>
                    </div>
                    <div className="tarj">
                        <img src="public\img\imagenes\piano.jpeg" />
                        <div className="tarj-cont">
                            <h3>Taller de Teclado</h3>

                        </div>
                    </div>
                    <div className="tarj">
                        <img src="public\img\imagenes\Card3.jpg" alt="Imagen 4" />
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