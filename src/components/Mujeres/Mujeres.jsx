import React from 'react';
import './Mujeres.css';
import { Link } from "react-router-dom";

function Mujeres() {
  return (
    <div className='containerM'>
      <div className="fotoMujeres">
        <div className="parallaxMujeres">
          <h1>Eres bendita porque creíste que el Señor haría lo que te dijo. <br /><small className='versiculo'>Lucas 1:45 - NTV</small></h1>
        </div>
      </div>
      <div className='CardWomen'>
        <div className='cardsInfo'>
          <div className='fondoCard'>
            <div className='cardMujeres'>
              <h2 className='discipuladosMuj'>Discipulados de mujeres</h2>
              <p className='DescripMuj'>Un espacio donde las mujeres pueden crecer espiritualmente, fortalecer sus relaciones con Dios y entre ellas, y ser equipadas para enfrentar los desafíos de la vida cotidiana con fe y confianza. Te esperamos!</p>
            </div>
          </div>
        </div>
        <div className='img'>
          <img src='public\Galeria7.jpg' alt='imagen1'></img>
        </div>
      </div>
      <div className='CardWomen card2'>
        <div className='cardsInfo'>
          <div className='fondoCard'>
            <div className='cardMujeres'>
              <h2 className='discipuladosMuj'>Discipulados de mujeres</h2>
              <p className='DescripMuj'>Un espacio donde las mujeres pueden crecer espiritualmente, fortalecer sus relaciones con Dios y entre ellas, y ser equipadas para enfrentar los desafíos de la vida cotidiana con fe y confianza. Te esperamos!</p>
            </div>
          </div>
        </div>
        <div className='img img2'>
          <img src='public\Galeria8.jpg' alt='imagen2'></img>
        </div>
      </div>
      <div className='CardWomen'>
        <div className='cardsInfo'>
          <div className='fondoCard'>
            <div className='cardMujeres'>
              <h2 className='discipuladosMuj'>Discipulados de mujeres</h2>
              <p className='DescripMuj'>Un espacio donde las mujeres pueden crecer espiritualmente, fortalecer sus relaciones con Dios y entre ellas, y ser equipadas para enfrentar los desafíos de la vida cotidiana con fe y confianza. Te esperamos!</p>
            </div>
          </div>
        </div>
        <div className='img'>
          <img src='public\Mujeres1.jpg' alt='imagen3'></img>
        </div>
      </div>
      <div className="lugarHorarioMujeres">
        <div className="horarios-mujeres">
          <h3 className='nuestrasReunionestt'>Nuestros Horarios de Reunión.</h3>
          <div className="tabla">
            <div className="fila">
              <div className="columna">Días</div>
              <div className="columna">Horario</div>
            </div>
            <div className="fila">
              <div className="columna">Jueves</div>
              <div className="columna">20:00 hs.</div>
            </div>
          </div>
        </div>
        <div className="lugar-mujeres">
          <h3 className='ttComoLLegar'>Cómo llegar </h3>
          <div class="loaderLocation"></div>
          <div className="boton-mujeres">
            <Link
              to="https://www.google.com/maps/place/Iglesia+Cita+Con+La+Vida/@-31.340506,-63.9610832,17z/data=!4m7!3m6!1s0x9432eabea42245b1:0x3d408621c6ce3156!4b1!8m2!3d-31.3432517!4d-63.9398718!16s%2Fg%2F11bwylz14v?entry=ttu"
              className="btn-mujeres"
            >
              Mapa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mujeres;
