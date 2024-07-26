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
import Footer from './components/Footer/Footer';
function App() {
  //const contactoImages = [];
  // const hombresImages = ['public/img/imagenes/FOTOS EVANGELIZACION/hombres12.jpg',
  //'public/img/imagenes/FOTOS EVANGELIZACION/hombres3.jpg', 'public/img/imagenes/FOTOS EVANGELIZACION/hombres22.jpg', 'public/img/imagenes/FOTOS EVANGELIZACION/hombres15.jpg'];
  const jovenesImages = [
    "/img/imagenes/App1.jpg",
    "/img/imagenes/App2.jpg",
    "public/img/imagenes/Ministerios4.jpg",
    "public/img/imagenes/App3.jpg",
    "public/img/imagenes/App4.jpg",
    "public/img/imagenes/App5.jpg",
  ];
  //const novedadesImage = [];
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
  //const reunionesImages = [];
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
  //const soyNuevoImages = [];
  // const matrimoniosImages = [
  //   "public/img/imagenes/Matri1.jpg",
  //   "public/img/imagenes/imagen2.jpg",
  // ];
  //const ministeriosImages = [];
  //const nosotrosImages = [];
  const musicosImages = [

  ];

  return (
    <BrowserRouter basename="/Cita2New">
      <Routes>
        <Route path="/" element={<><Nav /> <NavBorde /><Home /><Footer/> </>} />
        <Route path="/nosotros" element={<><NavSecundario/><NavBorde/><Nosotros /><Footer/> </>} />
        <Route path="/contacto" element={<><NavBorde /> <Contacto /><Footer/> </>} />
        <Route path="/hombres" element={<><NavSecundario /><NavBorde /><Hombres /><Footer/> </>} />
        <Route path="/ministerios" element={<Ministerios />} />
        <Route path="/mujeres" element={<><NavSecundario /><NavBorde /><Mujeres /><Footer/></>} />
        <Route path="/nav" element={<NavBorde />} />
        <Route path="/formcampa" element={<><NavBorde /> <FormCampa /><Footer/></>} />
        <Route path="/calendario" element={<><NavSecundario/><NavBorde/><Calendario /><Footer/> </>} />
        <Route path="/campamento" element={<><NavSecundario/><Campamento campamentoImages={campamentoImages} /><Footer/> </>} />
        <Route path="/cardnovedades" element={<CardNovedades />} />
        <Route path="/citakids" element={<><NavBorde/><NavSecundario/><Citakids images={citakidsImages} /><Footer/></>} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/jovenes" element={<><NavSecundario/><NavBorde/><Jovenes images={jovenesImages} /><Footer/></>} />
        <Route path="/matrimonios" element={<><NavSecundario /><NavBorde /><Matrimonios /><Footer/></>} />
        <Route path="/musicos" element={<Musicos images={musicosImages} />} />
        <Route path="/soynuevo" element={<SoyNuevo />} />
        <Route path='/navprincipal' element={<Nav />} />
        <Route path='/reuniones' element={<><NavSecundario/><NavBorde/><Reuniones/><Footer/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
