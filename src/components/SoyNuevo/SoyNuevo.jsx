import { Link } from 'react-router-dom';
import './SoyNuevo.css';

function SoyNuevo() {
  return (
    <>
      <div className="soy-nuevo">

        <div className="bienvenida">
          <div className="parallax-innerBienvenida">
          </div>
        </div>


        <div className="frm-contacto">
          <h2>¡Bienvenido!</h2>
          <p>
            ¡Bienvenidos a la Iglesia Cita con la Vida Monte Cristo! Aquí encontrarás comunidad, amor y guía espiritual. Juntos crecemos en fe, esperanza y amor. ¡Únete a nuestra familia hoy mismo!
          </p>
          <form className="frm-contacto">
            <div className="frm">
              <label>
                <span>Nombre:</span>
                <input type="text" placeholder="Ingresa tu nombre" />
              </label>
              <label>
                <span>Correo:</span>
                <input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                />
              </label>
              <button type="submit" className="btn-frm-contacto">
                Conecta!
              </button>
            </div>
          </form>
        </div>

        <div>
          <h3>Material de Ayuda</h3>
        </div>
        <div className="material-lectura">
          <div className="cardSoyNuevo">
            <img
              src="./biblia.jpg"
              alt="Descripción de la imagen"
            ></img>
            <div className="card-content">
              <button className="btn-soyNuevo" type=" submit">
                <Link to="https://www.bible.com/es/app" className="btn-material"> Biblia App</Link>
              </button>
            </div>
          </div>
          <div className="cardSoyNuevo">
            <img
              src="./musica.jpg"
              alt="Descripción de la imagen"
            ></img>
            <div className="card-content">
              <button className="btn-soyNuevo" type=" submit">
                <Link to="https://www.youtube.com/watch?v=IejOt3BWi3s" className="btn-material"> Musica</Link>
              </button>
            </div>
          </div>
          <div className="cardSoyNuevo">
            <img
              src="./radio.jpg"
              alt="Descripción de la imagen"
            ></img>
            <div className="card-content">
              <button className="btn-soyNuevo" type=" submit">
                <Link to="http://citaconlavida.com.ar/radiohtml.html" className="btn-material"> Radio</Link>
              </button>
            </div>
          </div>
          <div className="cardSoyNuevo">
            <img
              src="./youtube.png"
              alt="Descripción de la imagen"
            ></img>
            <div className="card-content">
              <button className="btn-soyNuevo" type=" submit">
                <Link to="https://www.youtube.com/@citaconlavidamontecristo3858" className="btn-material">   Canal Youtube</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoyNuevo;