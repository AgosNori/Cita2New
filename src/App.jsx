
import './App.css'
import Home from './components/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Hombres from './components/hombres/hombre';
import Ministerios from './components/Ministerios/Ministerios';
import Mujeres from './components/Mujeres/Mujeres';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/hombres' element={<Hombres/>}/>
          <Route path='/ministerios' element={<Ministerios/>}/>
          <Route path='/mujeres' element={<Mujeres/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
