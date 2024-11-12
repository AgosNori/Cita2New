import './home.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Home() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);
    return (
        <div className='homePage'>

            <div className='presentacion'>
                <h1 className='ttPresen' data-aos="fade-right"> Bienvenidos a la Iglesia de la Familia</h1>
                <div className='cardBack'>
                </div>
                <div className='cardpresen'>
                    <div className='parrafo'>
                        <p>Creemos en una vida transformada por el poder del amor de Dios. Nuestro propósito es inspirar y equipar a las personas para vivir una vida plena y significativa en Cristo.  Nuestra misión es proporcionar un lugar donde cada persona pueda experimentar el amor incondicional de Dios, crecer en su relación con Él y ser capacitado para marcar una diferencia positiva en el mundo.</p>
                    </div>
                </div>
            </div>
            <div className='botones' data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">


                <Link to="https://maps.app.goo.gl/6aEVEzPrp6AkrsKYA" className='bttHome'>
                    Ubicación
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>

                    </div>
                </Link>

                <Link to="https://www.mercadopago.com.ar/paid?CODE=V1C70X&utm_source=google&utm_medium=cpc&utm_campaign=MLA_MP_G_AO_ALL_BRD_SEARCH_MP_EXACT&matt_tool=28766038&matt_word=MLA_MP_Sellers_AO_X_G_Search_X_BrandKW_X&gad_source=1&gclid=CjwKCAjw3P-2BhAEEiwA3yPhwF_klE5_PoD0p7Vh_5U3XYy-Vqd0jSAbGpplTMTNQcApfF7DkQ3dyBoCTskQAvD_BwE" className='bttHome'>
                    Sembrar
                    <div class="arrow-wrapper">
                        <div class="arrow"></div>

                    </div>
                </Link>
            </div>
            <div className='reuniones'>
                <h4 className='ttReuniones'>Te esperamos en todas nuestras reuniones </h4>
                <div className="ag-format-container">
                    <div className="ag-courses_box">
                        <div className="ag-courses_item">
                            <a href="#" className="ag-courses-item_link">
                                <div className="ag-courses-item_bg"></div>

                                <div className="ag-courses-item_title">Reunión General</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Mier, Vier y Domingos 19:00hs</span>
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

                                <div className="ag-courses-item_title">Cadenas rotas</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Jueves 20:00 hs</span>
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

                                <div className="ag-courses-item_title">Pre, Ados y Jovenes</div>

                                <div className="ag-courses-item_date-box">
                                    <span className="ag-courses-item_date">Sábados 20:00hs</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='novedades'>
                <div className='tituloNovedades'>
                    <h3 className='nove'>Novedades</h3>
                </div>

                <div className="card-container" >
                    <section className="articles">
                        <article data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <div className="article-wrapper">
                                <figure>
                                    <img src="./Matri1.jpg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <h2>Título </h2>
                                    <p className='parrafo'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, exercitationem repellendus voluptate officia officiis obcaecati alias delectus excepturi animi possimus?</p>

                                </div>
                            </div>
                        </article>
                        <article data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <div className="article-wrapper">
                                <figure>
                                    <img src="./Galeria2.jpg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <h2>Título</h2>
                                    <p className='parrafo'>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                    </p>

                                </div>
                            </div>
                        </article>
                        <article data-aos="fade-up"
                            data-aos-anchor-placement="bottom-bottom">
                            <div className="article-wrapper">
                                <figure>
                                    <img src="./Galeria9.jpg" alt="" />
                                </figure>
                                <div className="article-body">
                                    <h2>Titulo </h2>
                                    <p className='parrafo'>
                                        Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                    </p>

                                </div>
                            </div>
                        </article>

                        <br></br>
                    </section>


                </div>
            </div>
            <div className='AreasTrabajo'>
                <div className="infoMinisterios">
                    <p className='ppMinis'>Te invitamos a conocer a nuestras areas de trabajo</p>
                    <Link to="/ministerios" className="botoncito" data-aos="zoom-in-right">
                        <span className='more'>Más información</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className='canalesReuniones'>
                <div className="tituloCanales">
                    <h2 className='canalesTitulo'>Nuestros canales de transmisión</h2>
                </div>
                <div className="canales">
                    <div className="canales-ver" data-aos="zoom-in-right">
                        <img src="./iconmonstr-video-camera-12-240.png" className="" width="90px"></img>
                        <h6 className='descCanales'> Volve a revivir la palabra por nuestro canal.</h6>

                        <Link to="https://www.youtube.com/@citaconlavidamontecristo3858" className="btn-ver">
                            Ver
                        </Link>
                    </div>
                    <div className="canales-ver" data-aos="zoom-in-left">
                        <img src="./galeria.png" className=""></img>
                        <h6 className='descCanales'>Nuestra Galería de imágenes.</h6>
                        <Link to="/galeria" className="btn-ver">
                            Ver
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Home





