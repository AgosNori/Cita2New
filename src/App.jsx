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
    "public/img/imagenes/Matri1.jpg",
    "public/img/imagenes/imagen2.jpg",
  ];
  const ministeriosImages = [];
  const nosotrosImages = [];
  const musicosImages = [

  ];

  return (
    <BrowserRouter basename="/Cita2New/">


      {isLoading ? (
        <Loader />

      ) : (
        <>
          <Routes>
            <Route path="/" element={<><Nav /> <NavBorde /><Home /><FooterMusic /> </>} />
            <Route path="nosotros" element={<><NavBorde /><Nosotros /><FooterMusic /></>} />
            <Route path="contacto" element={<><NavBorde /> <Contacto /></>} />
            <Route path="hombres" element={<><NavBorde /><Hombres /><FooterMusic /></>} />
            <Route path="ministerios" element={<><Ministerios /><FooterMusic /></>} />
            <Route path="mujeres" element={<><NavBorde /><Mujeres /><FooterMusic /></>} />
            <Route path="nav" element={<NavBorde />} />
            <Route path="formcampa" element={<><NavBorde /> <FormCampa /></>} />
            <Route path="calendario" element={<><NavBorde /><Calendario /><FooterMusic /></>} />
            <Route path="campamento" element={<><NavBorde /><Campamento campamentoImages={campamentoImages} /><FooterMusic /></>} />
            <Route path="cardnovedades" element={<><NavSecundario /><NavBorde /><CardNovedades /><FooterMusic /></>} />
            <Route path="citakids" element={<><NavBorde /><Citakids images={citakidsImages} /><FooterMusic /></>} />
            <Route path="galeria" element={<><NavSecundario /><Gallery /><FooterMusic /></>} />
            <Route path="jovenes" element={<><NavBorde /><Jovenes images={jovenesImages} /><FooterMusic /></>} />
            <Route path="matrimonios" element={<><NavBorde /><Matrimonios /><FooterMusic /></>} />
            <Route path="musicos" element={<><Musicos images={musicosImages} /><NavBorde /><FooterMusic /></>} />
            <Route path="soynuevo" element={<><NavBorde /><SoyNuevo /><FooterMusic /></>} />
            <Route path='navprincipal' element={<Nav />} />
            <Route path='reuniones' element={<><NavBorde /><Reuniones /><FooterMusic /></>} />
          </Routes>
        </>

      )
      }

    </BrowserRouter >
  );
}

export default App;
