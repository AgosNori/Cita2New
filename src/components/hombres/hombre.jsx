import './hombres.css'
function Hombres() {
    return (
        <div className="hombresPage">
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
                <h1>Discipulado de Hombres</h1>
            </div>
            <div className="aboutHombres">
                <div className='bannerHombres'>
                    <div className="parallax-innerHombres">
                    </div>
                </div>
                <div className="text">
                    <p className="parrafoHombres">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum aliquam cum sunt consequuntur necessitatibus reprehenderit voluptate assumenda autem at veritatis laborum consequatur, est ipsa. Consectetur debitis molestiae doloremque molestias voluptatum. Nam tenetur molestias maxime beatae nostrum suscipit assumenda est voluptatibus, rerum temporibus sunt dolore quia laborum esse possimus quos et quibusdam nobis sapiente quam animi soluta voluptate ab reprehenderit. Ipsam, dolorem? Esse laborum quo vitae laudantium perferendis debitis laboriosam ad.</p>
                </div>
            </div>
            <div className='titulo'>
                <h3>Nuestras actividades</h3>
            </div>
            <div className='actividades'>
                <div className='card'>
                    <img src='public\fotoNovedades.jpeg'>
                    </img>
                </div>
                <div className='card'>
                    <img src='public\fotoNovedades.jpeg'>
                    </img>
                </div>
                <div className='card'>
                    <img src='public\fotoNovedades.jpeg'>
                    </img>
                </div>
            </div>
        </div >
    )
}
export default Hombres