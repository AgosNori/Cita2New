import './Nosotros.css';
function Nosotros() {
    return (
        <div className='nosotros'>
            <div className='headerNosotros'>

            </div>
            <div className='tituloNosotros'>
                <h3 className='ttNosotros'>Nosotros</h3>
            </div>
            <div className='descripcion'>
                <div className='imagenPastor'>
                    <img className='fotoPastor' src='public\Pastor.jpg' width="550"></img>
                </div>
                <div className='textoDescrip'>
                    <p>La vida del pastor es una vocación llena de desafíos, sacrificios y bendiciones. El pastor lleva la carga de cuidas las almas de la congregación. Esto implica orar por ellos, aconsejarlos, visitarlos en momentos de necesidad y guiarlos en su caminar con Dios. La responsabilidad de predicar la Palabra de Dios con fidelidad y amor es un peso significativo. 
                        El pastor estudia, prepara las predicas y ministra incluso cunado su propio corazon está afligido. Las emergencias, las visitas hospitalarias, los funerales y las reuniones con miembros de la iglesia pueden surgiri en cualquier momento. 
                        Esto requiere de su flexibilidad y sacrificio personal.
                    </p>
                </div>
            </div>
            <div className='mision'>
                <div className='tituloMision'>
                    <h3 className='ttmision'>Nuestra Misión</h3>
                </div>
                <div className='cuerpoMision'>
                    <div className='textoMision'>
                        <p>Seguimos la visión de Jesús: alcanzar a las multitudes con el mensaje del Evangelio. Al igual que Él, tambien tenemos un método claro: formar líderes apasionadso por la evangelización y el discipulado. Para lograrlo, hemos construido la Escalera del Éxito, compuesta por cuatro pasos fundamentales: Ganar, Consolidar, Discipular y Enviar.

                        </p>
                    </div>
                    <div className='foticos'>
                        <img className='foto1' src='./Galeria9.jpg' width="400" />
                        <img className='foto2' src='./App11.jpg' width="400" />
                    </div>
                </div>

            </div>
            <div className='ministeriosBoton'>
                <h2 className='irTitulo'>Te invitamos a conocer nuestros ministerios</h2>
                <button className='irMinis'>
                    <span className="span-mother">
                        <span>C</span>
                        <span>o</span>
                        <span>n</span>
                        <span>o</span>
                        <span>c</span>
                        <span>e</span>
                        <span>r</span>
                    </span>
                    <span className="span-mother2">
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