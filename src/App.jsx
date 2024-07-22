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

function App() {
  const contactoImages = [];
  // const hombresImages = ['public/img/imagenes/FOTOS EVANGELIZACION/hombres12.jpg',
  //'public/img/imagenes/FOTOS EVANGELIZACION/hombres3.jpg', 'public/img/imagenes/FOTOS EVANGELIZACION/hombres22.jpg', 'public/img/imagenes/FOTOS EVANGELIZACION/hombres15.jpg'];
  const jovenesImages = [
    "public/img/imagenes/App1.jpg",
    "public/img/imagenes/App2.jpg",
    "public/img/imagenes/Ministerios4.jpg",
    "public/img/imagenes/App3.jpg",
    "public/img/imagenes/App4.jpg",
    "public/img/imagenes/App5.jpg",
  ];
  const novedadesImage = [];
  const citakidsImages = [
    "public/img/imagenes/App6.jpg",
    "public/img/imagenes/App7.jpg",
    "public/img/imagenes/App8.jpg",
    "public/img/imagenes/App9.jpg",
    "public/img/imagenes/App1.jpg",
    "public/img/imagenes/App2.jpg",
    "public/img/imagenes/App10.jpg",
    "public/img/imagenes/App11.jpg",
    "public/img/imagenes/Ministerios4.jpg",
  ];
  const reunionesImages = [];
  const campamentoImages = [
    "public/img/Fotos Campamento/Campa1.jpg",
    "public/img/Fotos Campamento/Campa2.jpg",
    "public/img/Fotos Campamento/Campa3.jpg",
    "public/img/Fotos Campamento/Campa4.jpg",
    "public/img/Fotos Campamento/Pastor.jpg",
    "public/img/Fotos Campamento/Campa5.jpg",
    "public/img/Fotos Campamento/Campa6.jpg",
    "public/img/Fotos Campamento/Campa7.jpg",
    "public/img/Fotos Campamento/Campa8.jpg",

  ];
  const soyNuevoImages = [];
  const matrimoniosImages = [
    "public/img/imagenes/Matri1.jpg",
    "public/img/imagenes/imagen2.jpg",
  ];
  const ministeriosImages = [];
  const nosotrosImages = [];
  const musicosImages = [

  ];

  return (
    <BrowserRouter basename="/Cita2New">
      <Routes>
        <Route path="/" element={<><Nav/> <NavBorde/><Home /> </>} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<><NavBorde/> <Contacto /></>} />
        <Route path="/hombres" element={<Hombres />} />
        <Route path="/ministerios" element={<Ministerios />} />
        <Route path="/mujeres" element={<Mujeres />} />
        <Route path="/nav" element={<NavBorde />} />
        <Route path="/formcampa" element={<><NavBorde /> <FormCampa /></>} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/campamento" element={<Campamento campamentoImages={campamentoImages} />} />
        <Route path="/cardnovedades" element={<CardNovedades />} />
        <Route path="/citakids" element={<Citakids images={citakidsImages} />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/jovenes" element={<Jovenes images={jovenesImages} />} />
        <Route path="/matrimonios" element={<Matrimonios />} />
        <Route path="/musicos" element={<Musicos images={musicosImages} /> } />
        <Route path="/soynuevo" element={<SoyNuevo />} />
        <Route path='/navprincipal' element={<Nav/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
