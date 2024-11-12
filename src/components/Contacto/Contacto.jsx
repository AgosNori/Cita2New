import React, { useState, useRef } from 'react';
import './Contacto.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contacto = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const refFormM = useRef();
  const refForm = useRef();

  const handleSubmitMotivos = (event) => {
    event.preventDefault();

    const serviceIdMotivos = 'service_aj6qnhp';
    const templateIdMotivos = 'template_zwzoef9';
    const apiKey = 'TQU6uXvnWyJFzkSac';

    emailjs.sendForm(serviceIdMotivos, templateIdMotivos, refFormM.current, apiKey)
      .then(result => {
        refFormM.current.reset();
        Swal.fire({
          title: "Mensaje enviado!",
          text: "Gracias por contactarnos.",
          icon: "success",
          confirmButtonText: "OK"
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Error!",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
  };

  const handleSubmitContacto = (event) => {
    event.preventDefault();

    const serviceIdContacto = 'service_aj6qnhp';
    const templateIdContacto = 'template_sf93498';
    const apiKey = 'TQU6uXvnWyJFzkSac';

    emailjs.sendForm(serviceIdContacto, templateIdContacto, refForm.current, apiKey)
      .then(result => {
        refForm.current.reset();
        Swal.fire({
          title: "Mensaje enviado!",
          text: "Gracias por contactarnos.",
          icon: "success",
          confirmButtonText: "OK"
        });
      })
      .catch(error => {
        Swal.fire({
          title: "Error!",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "OK"
        });
      });
  };

  const handleOverlayToggle = () => {
    setIsOverlayActive(!isOverlayActive);
  };

  return (
    <div className={`contactBody ${isOverlayActive ? 'right-panel-active' : ''}`}>
      <div className="container">
        {/* Formulario de contacto */}
        <div className="form-container contact-container">
          <form action="#" ref={refForm} onSubmit={handleSubmitContacto}>
            <h1 className='tituloForm'>Escríbenos</h1>
            <span className='subtitulo'>Dejanos tus datos y un mensaje</span>
            <input type="text" id="name_user" name="name_user" placeholder="Su nombre" />
            <input type="tel" id="telefono" name="telefono_user" placeholder="Su celular" />
            <textarea id="mensaje" name="contacto" placeholder="Escribe tu mensaje aquí..." cols="40" rows="3"></textarea>
            <button type="submit" className='botonEnviar'>Enviar</button>
          </form>
        </div>
        
        {/* Formulario de motivos de oración */}
        <div className="form-container sign-in-container">
          <form action="#" ref={refFormM} onSubmit={handleSubmitMotivos}>
            <h1 className='tituloForm'>Tus motivos de oración</h1>
            <span className='subtitulo'>O si quieres dar gracias</span>
            <input type="text" name="name" placeholder="Su nombre" />
            <input type="tel" name="telefono" placeholder="Su teléfono" />
            <textarea id="pedido" name="pedido" placeholder="Escribe tu mensaje aquí..." cols="40" rows="2"></textarea>
            <button type="submit" className='botonEnviar'>Enviar</button>
          </form>
        </div>

        {/* Panel de overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <button className="ghost" onClick={handleOverlayToggle}>Formulario de Contacto</button>
            </div>
            <div className="overlay-panel overlay-right">
              <button className="ghost" onClick={handleOverlayToggle}>Motivos de Oración</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
