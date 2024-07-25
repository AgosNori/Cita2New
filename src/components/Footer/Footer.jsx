import './footer.css'

function FooterMusic() {
    return (
        
            <footer className="footer-musicos">
                <div className="footer-musica">
                    <div className="musica-logo">
                        <img src="public\img\logos\Logo RGB BLANCO.png" alt="Cita Logo" />
                    </div>
                    <div className="musica-links">
                        <a href="/novedades">Novedades</a>
                        <a href="/reuniones">Reuniones</a>
                        <a href="/campamento">Campamentos</a>
                        <a href="/">Home</a>
                        <a href="/citakids">Cita Kids</a>
                    </div>
                    <div className="musica-social">
                        <a href="public\img\iconos\whats.png"><img src="public\img\iconos\whatsapp.png" alt="WhatsApp" /></a>
                        <a href="https://www.instagram.com/citaconlavidamontecristo/?hl=es"><img src="public\img\iconos\instagram.png" alt="Instagram" /></a>
                        <a href="https://www.facebook.com/citaconlavida.montecristo/?locale=es_LA"><img  src="public\img\iconos\facebook.png" alt="Facebook" /></a>
                        <a href="https://twitter.com/citamonte"><img  src="public\img\iconos\x.png" alt="Twitter" /></a>
                    </div>

                    <div className="musica-info">
                        <a href="/ministerios">Ministerios</a>
                        <a href="http://citaconlavida.com.ar">Casa Central</a>
                        <a href="/calendario">Calendario</a>
                        <a href="https://institutocitaconlavida.com">Instituto Biblico</a>
                        <a href="http://citaconlavida.com.ar/radiohtml.html">Radio Amistad</a>
                        <a href="https://www.youtube.com/@citaconlavidamontecristo3858">Canal de YouTube</a>

                    </div>
                </div>
            </footer>
    
    )
}

export default FooterMusic