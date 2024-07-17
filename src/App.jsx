
import './App.css'
import Home from './components/home/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
