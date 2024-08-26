import './footer.css'

function FooterMusic() {
    return (

        <footer className="footer-musicos">
            <div className="footer-musica">
                <div className="logoCitaFooter">
                    <img src="./Logo RGB BLANCO.png" alt="Cita Logo" className='logoF' />
                </div>
                <div className="musica-links">
                    <a className='aFooter' href="/cardnovedades">Novedades</a>
                    <a className='aFooter' href="/reuniones">Reuniones</a>
                    <a className='aFooter' href="/campamento">Campamentos</a>
                    <a className='aFooter' href="/">Home</a>
                    <a className='aFooter' href="/citakids">Cita Kids</a>
                </div>
                <div className="musica-social">
                    <div className='iconos'>
                        <a href="public\img\iconos\whats.png"><img className='iconoRS' src="./whatsapp.png" alt="WhatsApp" /></a>
                        <a href="https://www.instagram.com/citaconlavidamontecristo/?hl=es"><img className='iconoRS' src="./instagram.png" alt="Instagram" /></a>
                        <a href="https://www.facebook.com/citaconlavida.montecristo/?locale=es_LA"><img className='iconoRS' src="./facebook.png" alt="Facebook" /></a>
                        <a href="https://twitter.com/citamonte"><img className='iconoRS' src="./x.png" alt="Twitter" /></a>
                    </div>

                </div>

                <div className="musica-links">
                    <a className='aFooter' href="/ministerios">Ministerios</a>
                    <a className='aFooter' href="http://citaconlavida.com.ar" target='_blank'>Casa Central</a>
                    <a className='aFooter' href="/calendario" target='_blank'>Calendario</a>
                    <a className='aFooter' href="https://institutocitaconlavida.com" target='_blank'>Instituto Biblico</a>
                    <a className='aFooter' href="http://citaconlavida.com.ar/radiohtml.html" target='_blank'>Radio Amistad</a>
                    <a className='aFooter' href="https://www.youtube.com/@citaconlavidamontecristo3858" target='_blank'>Canal de YouTube</a>

                </div>
               

            </div>
            <hr />
            <div className='copy'>
                <div className='copyRelleno'>
                    <p >  2024 © Cita con la Vida Montecristo</p>
                </div>

            </div>
        </footer>

    )
}

export default FooterMusic