import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Hombres from './components/hombres/hombre';
import Ministerios from './components/Ministerios/Ministerios';
import Mujeres from './components/Mujeres/Mujeres';
import NavBorde from './components/NavBorde/NavBorde';
import FormCampa from './components/FormCampa/FormCampa';
import Calendario from './components/Calendario/Calendario';
import Campamento from './components/Campamento/Campamento';
import CardNovedades from './components/Cards/CardNovedades';
import Citakids from './components/Citakids/Citakids';
import Gallery from './components/Galeria/Galeria';
import Jovenes from './components/Jovenes/Jovenes';
import Matrimonios from './components/Matrimonios/Matrimonios';
import Musicos from './components/Musicos/Musicos';
import SoyNuevo from './components/SoyNuevo/SoyNuevo';
import Nav from './components/NavPrincipal/NavPrincipal';
import NavSecundario from './components/NavSecundario/NavSecundario';
import Reuniones from './components/Reuniones/Reuniones';

function App() {
  const contactoImages = [];
  // const hombresImages = ['public/img/imagenes/FOTOS EVANGELIZACION/hombres12.jpg',
  //'public/img/imagenes/FOTOS EVANGELIZACION/hombres3.jpg', 'public/img/imagenes/FOTOS EVANGELIZACION/hombres22.jpg', 'public/img/imagenes/FOTOS EVANGELIZACION/hombres15.jpg'];
  const jovenesImages = [
    "./App1.jpg",
    "./App2.jpg",
    "./Ministerios4.jpg",
    "./App3.jpg",
    "./App4.jpg",
    "./App5.jpg",
  ];
  const novedadesImage = [];
  const citakidsImages = [
    "./App6.jpg",
    "./App7.jpg",
    "./App8.jpg",
    "./App9.jpg",
    "./App1.jpg",
    "./App2.jpg",
    "./App10.jpg",
    "./App11.jpg",
    "./Ministerios4.jpg",
  ];
  const reunionesImages = [];
  const campamentoImages = [
    "./Campa1.jpg",
    "./Campa2.jpg",
    "./Campa3.jpg",
    "./Campa4.jpg",
    "./Pastor.jpg",
    "./Campa5.jpg",
    "./Campa6.jpg",
    "./Campa7.jpg",
    "./Campa8.jpg",

  ];
  const soyNuevoImages = [];
  const matrimoniosImages = [
    "./Matri1.jpg",
    "./imagen2.jpg",
  ];
  const ministeriosImages = [];
  const nosotrosImages = [];
  const musicosImages = [

  ];

  return (
    <BrowserRouter basename="/Cita2New/">
      <Routes>
        <Route path="/" element={<><Nav /> <NavBorde /><Home /> </>} />
        <Route path="nosotros" element={<><NavSecundario/><NavBorde/><Nosotros /></>} />
        <Route path="contacto" element={<><NavBorde /> <Contacto /></>} />
        <Route path="hombres" element={<><NavSecundario /><NavBorde /><Hombres /></>} />
        <Route path="ministerios" element={<Ministerios />} />
        <Route path="mujeres" element={<><NavSecundario /><NavBorde /><Mujeres /></>} />
        <Route path="nav" element={<NavBorde />} />
        <Route path="formcampa" element={<><NavBorde /> <FormCampa /></>} />
        <Route path="calendario" element={<><NavSecundario/><NavBorde/><Calendario /></>} />
        <Route path="campamento" element={<Campamento campamentoImages={campamentoImages} />} />
        <Route path="cardnovedades" element={<CardNovedades />} />
        <Route path="citakids" element={<><NavBorde/><NavSecundario/><Citakids images={citakidsImages} /></>} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="jovenes" element={<><NavSecundario/><NavBorde/><Jovenes images={jovenesImages} /></>} />
        <Route path="matrimonios" element={<><NavSecundario /><NavBorde /><Matrimonios /></>} />
        <Route path="musicos" element={<Musicos images={musicosImages} />} />
        <Route path="soynuevo" element={<SoyNuevo />} />
        <Route path='navprincipal' element={<Nav />} />
        <Route path='reuniones' element={<><NavSecundario/><NavBorde/><Reuniones/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
