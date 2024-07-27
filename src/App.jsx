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
import Loader from './components/Loader/Loader';
import { useState, useEffect } from 'react';
import FooterMusic from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const jovenesImages = [
    "./App1.jpg",
    "./App2.jpg",
    "./Ministerios4.jpg",
    "./App3.jpg",
    "./App4.jpg",
    "./App5.jpg",
  ];

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
        <Route path="/" element={<><Nav /> <NavBorde /><Home /><FooterMusic/> </>} />
        <Route path="/nosotros" element={<><NavSecundario/><NavBorde/><Nosotros /><FooterMusic/></>} />
        <Route path="/contacto" element={<><NavBorde /> <Contacto /></>} />
        <Route path="/hombres" element={<><NavSecundario /><NavBorde /><Hombres /></>} />
        <Route path="/ministerios" element={<Ministerios />} />
        <Route path="/mujeres" element={<><NavSecundario /><NavBorde /><Mujeres /></>} />
        <Route path="/nav" element={<NavBorde />} />
        <Route path="/formcampa" element={<><NavBorde /> <FormCampa /></>} />
        <Route path="/calendario" element={<><NavSecundario/><NavBorde/><Calendario /></>} />
        <Route path="/campamento" element={<Campamento campamentoImages={campamentoImages} />} />
        <Route path="/cardnovedades" element={<CardNovedades />} />
        <Route path="/citakids" element={<><NavBorde/><NavSecundario/><Citakids images={citakidsImages} /></>} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/jovenes" element={<><NavSecundario/><NavBorde/><Jovenes images={jovenesImages} /></>} />
        <Route path="/matrimonios" element={<><NavSecundario /><NavBorde /><Matrimonios /></>} />
        <Route path="/musicos" element={<Musicos images={musicosImages} />} />
        <Route path="/soynuevo" element={<SoyNuevo />} />
        <Route path='/navprincipal' element={<Nav />} />
        <Route path='/reuniones' element={<><NavSecundario/><NavBorde/><Reuniones/></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
