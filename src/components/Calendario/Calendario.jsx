import './Calendario.css';

function Calendario() {
  return (
    <div className="calendario-container">
      <main className="grid">
        <section className="content item1">
          <h2 className='ttCalendario'>Futuros Eventos</h2>
          <p className='pCalendario'>Aquí encontrarás toda la información de los eventos que se avecinan!</p>
        </section>
        <section className="cardC item2">
          <h2 className='ttReunion'>Reunion de Jóvenes Sábados 20:00hs </h2>
        </section>
        <section className="cardC item3"><h2 className='ttReunion'>Reunion de Hombres <br />Martes 20hs</h2></section>
        <section className="cardC item4"><h2 className='ttReunion'>Reunion de Oración <br />Miercoles 20hs</h2></section>
        <section className="cardC item5">
          <h2 className='ttReunion'>Cita Kids Sábados 13:00 hs a 16:00hs</h2>
        </section>
        <section className="cardC item7"><h2 className='ttReunion'>Merenderos <br />Sabados 16:30 hs</h2></section>
        <section className="cardC item8">
          <h2 className='ttReunion'>Reunion General Domingos 19:30hs</h2>
        </section>
        <section className="cardC item9"><h2 className='ttReunion'>Reunion de Ayuno y oración <br />Viernes 20 hs</h2></section>
        <section className="cardC item10"><h2 className='ttReunion'></h2></section>
        <section className="cardC item11">
          <h2 className='ttReunion'>Reunion de Mujeres <br /> Jueves 20 hs</h2>
        </section>
      </main>
    </div>

  );
}

export default Calendario;
