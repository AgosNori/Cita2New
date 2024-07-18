import "./Ministerios.css";
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Ministerios() {
    const [descriptions, setDescriptions] = useState({
        hombres: false,
        matrimonios: false,
        musicos: false,
        jovenes: false,
        preyados: false,
        citakids: false,
        adicciones: false,
        merendero: false,
    });

    const toggleDescription = (ministerio) => {
        setDescriptions(prevDescriptions => ({
            ...prevDescriptions,
            [ministerio]: !prevDescriptions[ministerio],
        }));
    }

    return (
        <>

            <div className="cont-ministerios">
                <div className="fotoprincipalMinis">
                    <div className="parallax-innerMinis">
                        <h2>Estas son las diferentes áreas de trabajo donde la iglesia Cita con la Vida Monte Cristo cuenta con un sólido equipo de colaboradores capacitados y adaptados para dar respuesta a las necesidades. </h2>
                    </div>
                </div>
                <div className="tituloMinisterios">
                    <h2 className="minisTT">Nuestros Ministerios</h2>
                </div>

                <div className="referente-minist" data-aos="fade-up" data-aos-duration="1500">
                    <img src="public\Pastor.jpg" alt="" className="minis-image" />
                    <div className="vertical-line"></div>
                    <div className="referente-ministerio">
                        <h2 className="ref-name">Discipulado de Hombres</h2>
                        <h5>Responsable: Carlos Jaime</h5>
                        <p className="horario">Horario: Martes 20:00 hs.</p>
                        {descriptions.hombres && (
                            <p className="role">El discipulado de hombres es el proceso mediante el cual los creyentes son acompañados y enseñados para crecer en su conocimiento y relación con Dios.
                                No se trata simplemente de clases o lecciones, sino de generar una estrecha relación entre el Señor y participantes del discipulado.
                                En resumen, el discipulado de hombres en la iglesia es una responsabilidad compartida entre Pastores y responsables del área.

                                Pastora Rosana Benigno. Licenciada Viviana Mañanes; Responsables del ministerio de preadolescentes. adolescentes y jóvenes.
                                SABADOS 19:30hs
                                Este ministerio está coordinado por Rosana Benigno, Viviana Mañanes y un capacitado grupo de colaboradores.
                            </p>
                        )}
                        <div className="btnMinis">
                            <button className="btn-ministerios" onClick={() => toggleDescription('hombres')}>
                                {descriptions.hombres ? 'Ocultar' : 'Más Info.'}
                            </button>
                        </div>

                    </div>
                </div>
                <div className="referente-minist" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src="public\Pastor.jpg" alt="" className="minis-image" />
                    <div className="vertical-line"></div>

                    <div className="referente-ministerio">
                        <h2 className="ref-name">Ministerio de Matrimoios</h2>
                        <h5>Responsables: Marcos Y Rosana Benigno </h5>
                        <p className="horario">Horario: Jueves 20:00 hs.</p>
                        {descriptions.matrimonios && (
                            <p className="role">La bondad de Dios promueve el matrimonio:
                                Dios creó el matrimonio para ser una bendición y una ayuda mutua. Es importante entender que, en su mayoría, la voluntad de Dios es que las personas se casen.
                                La Biblia también nos advierte sobre precipitarnos en relaciones matrimoniales sin considerar la voluntad de Dios.
                                Recordemos que Dios tiene un plan perfecto para nuestras vidas, y buscarlo a él primero es fundamental. Romanos 12:2 y Jeremías 29:11 nos aseguran que sus planes son buenos y beneficiosos.
                                Casarse con un Cristiano comprometido:
                                Proverbios 21:9 y 25:24 advierten sobre las consecuencias de casarse equivocadamente. Buscar un cónyuge comprometido con Cristo es esencial.
                                2 Corintios 6:14-18 nos enseña sobre no unirnos en yugo desigual con no creyentes. El matrimonio debe ser una unión centrada en Cristo.
                                Prioridad en el matrimonio:
                                Mateo 6:33 nos recuerda buscar primero el reino de Dios. Mantener a Dios como nuestra prioridad más importante es esencial.
                                1 Corintios 7:32-35 aconseja a los solteros y casados a enfocarse en servir al Señor sin distracciones.
                                El ministerio de matrimonios debe fomentar la unidad, el crecimiento espiritual y la adoración a Dios en la relación conyugal.</p>
                        )}
                        <div className="btnMinis">
                            <button className="btn-ministerios" onClick={() => toggleDescription('matrimonios')}>
                                {descriptions.matrimonios ? 'Ocultar' : 'Más Info.'}
                            </button>
                        </div>
                    </div>
                </div>


                <div className="referente-minist" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src="public\Pastor.jpg" alt="" className="minis-image" />
                    <div className="vertical-line"></div>
                    <div className="referente-ministerio">
                        <h2 className="ref-name"> Ministerio de Musicos</h2>
                        <h5>Responsable: Claudio Sandri</h5>
                        <p className="horario">Horario:</p>
                        {descriptions.musicos && (
                            <p className="role">Más allá de la excelencia musical, debemos concentrarnos en los objetivos de un ministerio musical eficaz. La música tiene la capacidad divina de conmovernos e inspirarnos. los objetivos de la adoración incluyen,
                                recordar verdades bíblicas: Las canciones deben ayudar al pueblo a recordar las verdades fundamentales de la fe.
                                La música enseña y amonesta a los demás en la sabiduría de Dios.
                                Adorar a Dios: La adoración fluye desde corazones agradecidos por quién es Dios y lo que ha hecho.
                                Los músicos que sirven en el ministerio cultivan su entendimiento del evangelio, crecen en santidad y luchan contra el pecado. Además,  desarrollan sus habilidades musicales.
                                El coro,desempeña un papel crucial en el ministerio. Su función es importante y debe recibir atención especial.
                                El ministerio de música no se trata solo de la calidad musical, sino de dirigir a la congregación hacia una adoración significativa y centrada en Dios.</p>
                        )}
                        <div className="btnMinis">
                            <button className="btn-ministerios" onClick={() => toggleDescription('musicos')}>
                                {descriptions.musicos ? 'Ocultar' : 'Más Info.'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="referente-minist" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src="public\Pastor.jpg" alt="" className="minis-image" />
                    <div className="vertical-line"></div>
                    <div className="referente-ministerio">
                        <h2 className="ref-name">Ministerio de Jovenes</h2>
                        <h5>Responsable: </h5>
                        <p className="horario">Horario:</p>
                        {descriptions.jovenes && (
                            <p className="role">El ministerio de prepara a los  jóvenes con visión de un futuro integro, entendiendo los preceptos de la sana doctrina. Involucrar a los jóvenes en el servicio, la adoración y el liderazgo les permite crecer y contribuir.
                                Los jóvenes enfrentan decisiones importantes sobre su futuro. El ministerio debe ofrecer apoyo espiritual y práctico mientras navegan por la universidad, la carrera, trabajos y las relaciones.

                            </p>
                        )}
                        <div className="btnMinis">
                            <button className="btn-ministerios" onClick={() => toggleDescription('jovenes')}>
                                {descriptions.jovenes ? 'Ocultar' : 'Más Info.'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="referente-minist" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src="public\Pastor.jpg" alt="" className="minis-image" />
                    <div className="vertical-line"></div>
                    <div className="referente-ministerio">
                        <h2 className="ref-name"> Ministerio de Pre y Ados</h2>
                        <h5>Responsable:</h5>
                        <p className="horario">Horario:</p>
                        {descriptions.preyados && (
                            <p className="role">Etapa Crucial: La preadolescencia es un período de transición entre la niñez y la adolescencia. Los preadolescentes necesitan un espacio seguro donde puedan explorar su fe, hacer preguntas y recibir orientación.
                                El ministerio con preadolescentes está centrado en establecer sólidos fundamentos bíblicos. Es el momento adecuado para enseñarles sobre la gracia, la salvación y la vida en Cristo.

                                Ministerio de Adolescentes:
                                Desafíos de la Adolescencia: La adolescencia es una etapa de cambios físicos, emocionales y sociales. Los adolescentes enfrentan desafíos como la identidad, las presiones sociales y las dudas de fe.
                                El ministerio con adolescentes debe ir más allá de la superficialidad. Predicar la Palabra de Dios con fidelidad y abordar temas relevantes para ellos es esencial.</p>
                        )}
                        <div className="btnMinis">
                            <button className="btn-ministerios" onClick={() => toggleDescription('preyados')}>
                                {descriptions.preyados ? 'Ocultar' : 'Más Info.'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="referente-minist" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src="public\Pastor.jpg" alt="" className="minis-image" />
                    <div className="vertical-line"></div>
                    <div className="referente-ministerio">
                        <h2 className="ref-name">Iglesia para Niños Cita Kids</h2>
                        <h5>Responsable:</h5>
                        <p className="horario">Horario: Sábados 11:00 hs.</p>
                        {descriptions.citakids && (
                            <p className="role">El objetivo principal del ministerio de niños es ayudar a los niños a escuchar y responder al evangelio. Es un espacio donde los pequeños pueden aprender sobre Dios, Jesús y la Biblia de manera accesible y significativa.
                                Además, el ministerio de niños proporciona un contexto para la amistad y relaciones seguras entre generaciones. Los niños interactúan con adultos piadosos que les guían y les muestran el amor de Cristo.
                                Los niños aprenden el contenido y la importancia de las Escrituras. Se les enseña sobre la creación, el pecado, la gracia, la salvación y cómo vivir una vida centrada en Jesús.
                                El enfoque debe ser sano y divertido, adaptado a la edad de cada niño. Las lecciones bíblicas, canciones, juegos y actividades son apropiadas y atractivas.
                                Los niños crecen en su fe y desarrollan una relación personal con Jesús.
                                El ministerio de niños es más grande de lo que imaginamos. No solo impacta a los niños, sino también a las familias y a toda la iglesia.</p>
                        )}
                        <div className="btnMinis">
                            <button className="btn-ministerios" onClick={() => toggleDescription('citakids')}>
                                {descriptions.citakids ? 'Ocultar' : 'Más Info.'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="referente-minist" data-aos="fade-up"
                    data-aos-duration="1500">
                    <img src="public\Pastor.jpg" alt="" className="minis-image" />
                    <div className="vertical-line"></div>
                    <div className="referente-ministerio">
                        <h2 className="ref-name"> Ministerio de Adicciones</h2>
                        <h5>Responsables: Nahuel Feldma y Matias Cid</h5>
                        <p className="horario">Horario:</p>
                        {descriptions.adicciones && (
                            <p className="role">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident adipisci maiores, quam saepe quaerat assumenda nesciunt debitis, delectus tempora eos magni, est nemo unde nostrum deserunt. Minus commodi blanditiis hic tempora, sunt, nulla earum a dignissimos corrupti, doloribus laboriosam! Vitae corporis officia hic accusamus. Earum amet at iste consequatur totam?</p>
                        )}
                        <div className="btnMinis">
                            <button className="btn-ministerios" onClick={() => toggleDescription('adicciones')}>
                                {descriptions.adicciones ? 'Ocultar' : 'Más Info.'}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="referente-minist" data-aos="zoom-in-down">
                    <img src="public\Pastor.jpg" alt="" className="minis-image" />
                    <div className="vertical-line"></div>
                    <div className="referente-ministerio">
                        <h2 className="ref-name">Ayuda a la Comunidad Merendero</h2>
                        <h5>Responsable:</h5>
                        <p className="horario">Horario: Sábados 16:30 hs.</p>
                        {descriptions.merendero && (
                            <p className="role">El ministerio de merenderos para niños es una hermosa oportunidad de servir y cuidar a los más pequeños.
                                Los merenderos tiene como objetivo proporcionar alimentos nutritivos a los niños que lo necesitan. Es una expresión práctica del amor de Cristo hacia los más vulnerables.
                                Además de alimentar sus cuerpos, también es una oportunidad para nutrir sus almas. Los niños pueden aprender sobre el amor de Dios y experimentar su cuidado a través de este ministerio.
                                No se trata solo de proporcionar comida, sino también de orar por los niños y sus familias. </p>
                        )}
                        <div className="btnMinis">
                            <button className="btn-ministerios" onClick={() => toggleDescription('merendero')}>
                                {descriptions.merendero ? 'Ocultar' : 'Más Info.'}
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

AOS.init();
export default Ministerios;