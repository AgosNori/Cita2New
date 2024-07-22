import './home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='homePage'>
            <div className='navbar'>
                <div className='logo'>
                    <img src='./Logo RGB BLANCO.png'></img>
                </div>
                <div className='nav'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/hombres">Hombres</Link></li>
                    </ul>
                </div>
            </div>
            <div className='banner'>
                <img src='./sean-oulashin-KMn4VEeEPR8-unsplash.jpg' width="100%" height="600px" />
            </div>
            <div className='presentacion'>
                <div className='cardBack'>
                </div>
                <div className='cardpresen'>
                    <div className='parrafo'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor error nisi itaque iste, voluptates minus enim molestiae facilis, beatae animi quibusdam optio qui suscipit eligendi tempore recusandae officia sunt, provident quas autem corporis illum quidem? Quam officia quo quae dolorem dolorum pariatur similique maxime omnis laudantium. Expedita id eveniet vel! Architecto magnam suscipit at minus est atque officiis rerum, voluptatum ipsam officia soluta sapiente, enim ea placeat nisi vitae incidunt totam? Officiis ipsum, voluptatum aliquid maiores laudantium facilis, nulla qui ex porro itaque dicta excepturi culpa. Quasi a deserunt saepe nobis, commodi omnis sequi in, qui, exercitationem laudantium suscipit nemo?</p>
                    </div>
                </div>
            </div>
            <div className='botones'>
                <div className='btnUbi'>
                    <button className="btn-53">
                        <div className="original">UBICACIÓN</div>

                        <div className="letters">

                            <span>U</span>
                            <span>B</span>
                            <span>I</span>
                            <span>C</span>
                            <span>A</span>
                            <span>C</span>
                            <span>I</span>
                            <span>Ó</span>
                            <span>N</span>
                        </div>

                    </button>
                </div>
                <div className='btnSembrar'>
                    <button className="btn-53">
                        <div className="original">SEMBRAR</div>
                        <div className="letters">

                            <span>S</span>
                            <span>E</span>
                            <span>M</span>
                            <span>B</span>
                            <span>R</span>
                            <span>A</span>
                            <span>R</span>

                        </div>
                    </button>
                </div>
            </div>
            <div className='reuniones'>
                <h4>Te esperamos en todas nuestras reuniones </h4>
                <div className="ag-format-container">
                    <div className="ag-courses_box">
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg"></div>

                                <div className="ag-courses-item_title">Reunión General</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Domingos 19:30hs</span>
                                </div>
                            </a>
                        </div>

                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg"></div>

                                <div className="ag-courses-item_title">Reunion de Hombres</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Martes 20:00 hs</span>
                                </div>
                            </a>
                        </div>

                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg"></div>

                                <div className="ag-courses-item_title">Cita Kids</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Sabado 11:00 hs</span>
                                </div>
                            </a>
                        </div>

                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg"></div>

                                <div className="ag-courses-item_title">Pre y Adolescentes</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Sabado 20:00 hs</span>
                                </div>
                            </a>
                        </div>

                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg"></div>

                                <div className="ag-courses-item_title">Reunión de Mujeres</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Jueves 20:00 hs</span>
                                </div>
                            </a>
                        </div>
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg"></div>

                                <div className="ag-courses-item_title">Jóvenes</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Sábados 20:00hs</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="videoBienvenidos">
                <div className='tituloBienvenidos'>
                    <h4>Mensaje de bienvenida</h4>
                </div>
                <div className='videoBienvenida'>
                    <video controls autoPlay loop className='video' src='./kidsabados.mp4' width="800"></video>
                </div>
            </div>
            <div className='novedades'>
                <div className='tituloNovedades'>
                    <h3 className='nove'>Novedades</h3>
                </div>

                <div className="card-container">
                    <section className="articles">
                        <article>
                            <div className="article-wrapper">
                                <figure>
                                    <img src="./fotoNovedades.jpeg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <h2>Título </h2>
                                    <p className='parrafo'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, exercitationem repellendus voluptate officia officiis obcaecati alias delectus excepturi animi possimus?</p>
                                    <a href="#" className="read-more">
                                        Más info. <span className="sr-only">about this is some title</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="article-wrapper">
                                <figure>
                                    <img src="./fotoNovedades.jpeg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <h2>Título</h2>
                                    <p className='parrafo'>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                    </p>
                                    <a href="#" className="read-more">
                                        Más info. <span className="sr-only">Escuela de Musica</span>
                                        <svg xmlns="" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="article-wrapper">
                                <figure>
                                    <img src="./fotoNovedades.jpeg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <h2>Titulo </h2>
                                    <p className='parrafo'>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                    </p>
                                    <a href="#" className="read-more">
                                        Más info. <span className="sr-only">Cita kids</span>
                                        <svg xmlns="" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>

                        <br></br>
                    </section>


                </div>
            </div>
            <div className='AreasTrabajo'>
                <div className="infoMinisterios">
                    <p>Te invitamos a conocer a nuestras areas de trabajo</p>
                    <button href="/ministerios" className=" botoncito">
                        <span className='more'>Más información</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <h2 className='ttForm'>¿Necesitas contactarte con nosotros?</h2>
            <div className='formulariosEscPedidos'>

                <div className='cardForm'>
                    <div className='Escribenos'>
                        <div className='cardFormHeader'>
                            <h4 className='tituloFormCard'>Escribenos </h4>
                        </div>
                        <div className='botonForm'>
                            <button className='botoncitoForm'>Ir al form</button>
                        </div>
                    </div>
                    <div className='Pedidos'>
                        <div className='cardFormHeader'>
                            <h4 className='tituloFormCard'>Pedidos de oración</h4>
                        </div>
                        <div className='botonForm'>
                            <button className='botoncitoForm'>Ir al form</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className='canalesReuniones'>
                <div className="canales">
                    <h2 className='canalesTitulo'>Nuestros canales de transmisión</h2>
                    <div className="canales-ver">
                        <img src="./iconos/iconmonstr-video-camera-12-240.png" className="" width="90px"></img>
                        <h6> Volve a revivir la palabra por nuestro canal.</h6>

                        <button href="https://www.youtube.com/@citaconlavidamontecristo3858" className="btn-ver">
                            Ver
                        </button>
                    </div>
                    <div className="canales-ver">
                        <img src="./iconos/galeria.png" className=""></img>
                        <h6>Nuestra Galería de imágenes.</h6>
                        <button href="/galeria" className="btn-ver">
                            Ver
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home