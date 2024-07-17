import './Nosotros.css';
function Nosotros() {
    return (
        <div className='nosotros'>
            <div className='headerNosotros'>
                <div className='logo'>
                    <img src='public\Logo RGB BLANCO.png' width="150"></img>
                </div>
                <div className='nav'>
                    <ul>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">home</a>
                        </li>
                        <li>
                            <a href="#">home</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='tituloNosotros'>
                <h1>Nosotros</h1>
            </div>
            <div className='descripcion'>
                <div className='imagenPastor'>
                    <img className='fotoPastor' src='public\Pastor.jpg' width="550"></img>
                </div>
                <div className='textoDescrip'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias minima reprehenderit sit impedit distinctio unde cupiditate non est sed quam exercitationem optio, sint neque, praesentium explicabo nostrum laborum suscipit doloribus odit cum libero nihil maiores maxime? Corporis suscipit mollitia, illo accusantium est quae quidem, sunt, beatae recusandae unde dolores exercitationem!</p>
                </div>
            </div>
            <div className='mision'>
                <div className='tituloMision'>
                    <h3 className='ttmision'>Nuestra Misión</h3>
                </div>
                <div className='cuerpoMision'>
                    <div className='textoMision'>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid hic eos fuga possimus consequuntur similique blanditiis! Alias modi a fugit numquam nulla dicta eveniet quod necessitatibus. Natus labore in ex distinctio quos cum sequi officiis blanditiis. Rerum provident voluptate optio quam rem similique iste itaque quibusdam incidunt animi, aspernatur at qui, sit ratione non.</p>
                    </div>
                    <div className='foticos'>
                        <img className='foto1' src='public\matheus-ferrero-TkrRvwxjb_8-unsplash.jpg' width="400" />
                        <img className='foto2' src='public\priscilla-du-preez-mKJUoZPy70I-unsplash.jpg' width="400" />
                    </div>
                </div>

            </div>
            <div className='ministeriosBoton'>
                <h2 className='irTitulo'>Te invitamos a conocer nuestros minsiterios</h2>
                <button className='irMinis'>
                    <span class="span-mother">
                        <span>C</span>
                        <span>o</span>
                        <span>n</span>
                        <span>o</span>
                        <span>c</span>
                        <span>e</span>
                        <span>r</span>
                    </span>
                    <span class="span-mother2">
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