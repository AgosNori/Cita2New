import "./Matrimonios.css";

import { Link } from "react-router-dom";
function Matrimonios() {
  return (
    <div className="matrimonios">
      <div className="BannerMatrimonios">
        <div className="fotoprincipalMatrimonios">
          <div className="parallax-inner-Matrimonios">
            <h2>Ministerios de Matrimonios</h2>
          </div>
        </div>
      </div>


      <div className="texto-matrimonio">
        <h2 className="subtitulo-matrimonio">
          Acerca del Ministerio de Matrimonios.
        </h2>
        <div className="parrafoMatri">
          <p>
            La bondad de Dios promueve el matrimonio: Dios creó el matrimonio para
            ser una bendición y una ayuda mutua. Es importante entender que, en su
            mayoría, la voluntad de Dios es que las personas se casen. La Biblia
            también nos advierte sobre precipitarnos en relaciones matrimoniales
            sin considerar la voluntad de Dios. Recordemos que Dios tiene un plan
            perfecto para nuestras vidas, y buscarlo a él primero es fundamental.
            Romanos 12:2 y Jeremías 29:11 nos aseguran que sus planes son buenos y
            beneficiosos. Casarse con un Cristiano comprometido: Proverbios 21:9 y
            25:24 advierten sobre las consecuencias de casarse equivocadamente.
            Buscar un cónyuge comprometido con Cristo es esencial. 2 Corintios
            6:14-18 nos enseña sobre no unirnos en yugo desigual con no creyentes.
            El matrimonio debe ser una unión centrada en Cristo. Prioridad en el
            matrimonio: Mateo 6:33 nos recuerda buscar primero el reino de Dios.
            Mantener a Dios como nuestra prioridad más importante es esencial. 1
            Corintios 7:32-35 aconseja a los solteros y casados a enfocarse en
            servir al Señor sin distracciones. El ministerio de matrimonios debe
            fomentar la unidad, el crecimiento espiritual y la adoración a Dios en
            la relación conyugal.
          </p>
        </div>

      </div>
      <div className="lugar-horario">
        <div className="horarios-matrimonios">
          <h3 className="tituloMatri">Nuestros Horarios de Reunión.</h3>
          <div className="tablaM">
            <div className="filaM">
              <div className="columnaM">Días</div>
              <div className="columnaM">Horario</div>
            </div>
            <div className="filaM">
              <div className="columnaM">Jueves</div>
              <div className="columnaM">20:00 hs.</div>
            </div>
          </div>
        </div>
        <div className="lugar-matrimonio">
          <h3>Cómo llegar </h3>
          <div class="loaderLocation"></div>
          <div className="boton-matrimonio">
            <Link
              href="https://www.google.com/maps/place/Iglesia+Cita+Con+La+Vida/@-31.340506,-63.9610832,17z/data=!4m7!3m6!1s0x9432eabea42245b1:0x3d408621c6ce3156!4b1!8m2!3d-31.3432517!4d-63.9398718!16s%2Fg%2F11bwylz14v?entry=ttu"
              className="btn-matrimonio"
            >
              Mapa.
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 className="titulo-recursos">Recursos</h2>
      </div>
      <section className="recursos-matrimonios">
        <div className="card-matrimonios">
          <img className="img-card-matrimonio" src="public\img\imagenes\Matrimonios2.webp"></img>
          <h3 className="parrafo-card-matrimonio"></h3>
          <Link to="https://www.youtube.com/@citaconlavidamontecristo3858" className="btn-card-matrimonio">
            Video.
          </Link>
        </div>
        <div className="card-matrimonios">
          <img className="img-card-matrimonio" src="public\img\imagenes\Matrimonios3.jpg"></img>
          <h3 className="parrafo-card-matrimonio"></h3>
          <Link to="https://www.biblegateway.com/?language=es" className="btn-card-matrimonio">
            Biblia.
          </Link>
        </div>
        <div className="card-matrimonios">
          <img className="img-card-matrimonio" src="public\img\imagenes\Matrimonios4.jpg"></img>
          <h3 className="parrafo-card-matrimonio"></h3>
          <Link to="https://libreriapeniel.com/?s=matrimonio&post_type=product&type_aws=true" className="btn-card-matrimonio">
            Libros.
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Matrimonios;

