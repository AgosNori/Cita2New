import './Calendario.css';

function Calendario() {
  return (
    <div className="calendario-container">
      <main className="grid">
        <section className="content item1">
          <h1>Futuros Eventos</h1>
          <p>Aquí encontrarás toda la información de los eventos que se avecinan!</p>
        </section>
        <section className="cardC item2">
          <h2>Reunion de Jóvenes Sábados 20:00hs </h2>
        </section>
        <section className="cardC item3"><h2>Reunion de Hombres <br />Martes 20hs</h2></section>
        <section className="cardC item4"><h2>Reunion de Oración <br />Miercoles 20hs</h2></section>
        <section className="cardC item5">
          <h2>Cita Kids Sábados 13:00 hs a 16:00hs</h2>
        </section>
        <section className="cardC item7"><h2>Merenderos <br />Sabados 16:30 hs</h2></section>
        <section className="cardC item8">
          <h2>Reunion General Domingos 19:30hs</h2>
        </section>
        <section className="cardC item9"><h2>Reunion de Ayuno y oración <br />Viernes 20 hs</h2></section>
        <section className="cardC item10"><h2></h2></section>
        <section className="cardC item11">
          <h2>Reunion de Mujeres <br /> Jueves 20 hs</h2>
        </section>
      </main>
    </div>

  );
}

export default Calendario;
