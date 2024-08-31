import './hombres.css'
function Hombres() {
    return (
        <div className="hombresPage">


            <div className="aboutHombres">
                <div className='bannerHombres'>
                    <div className="parallax-innerHombres">
                        <h2 className="descHom">Discipulado de Hombres</h2>
                    </div>
                </div>
                <div className="text">
                    <p className="parrafoHombres">El discipulado de hombres en nuestra iglesia es un programa diseñado para fortalecer y edificar la fe, carácter y liderazgo de los hombres en nuestra comunidad. A través de reuniones regulares, estudios bíblicos, tiempo de oración y actividades prácticas, buscamos fomentar relaciones auténticas entre los hombres, inspirar un compromiso más profundo con Dios y equiparlos para enfrentar los desafíos de la vida cotidiana desde una perspectiva cristiana. Nuestro objetivo es cultivar hombres piadosos, íntegros y valientes que puedan impactar positivamente a sus familias, lugares de trabajo y comunidades, reflejando el carácter de Cristo en todas sus acciones y decisiones.<br /> <br />
                        Te esperamos!</p>
                </div>
            </div>
            <div className='titulo'>
                <h3>Nuestras actividades</h3>
            </div>
            <div className='actividades'>
                <div className='card'>
                    <img src='./Galeria4.jpg'>
                    </img>
                </div>
                <div className='card'>
                    <img src='./Galeria5.jpg'>
                    </img>
                </div>
                <div className='card'>
                    <img src='./Galeria6.jpg'>
                    </img>
                </div>
            </div>
        </div >
    )
}
export default Hombres