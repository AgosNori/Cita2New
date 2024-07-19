// src/components/AuthForm.jsx
import React, { useState, useRef } from 'react';
import './Contacto.css'; // Asegúrate de que los estilos estén en un archivo CSS
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contacto = () => {
  const [isPedido, setIsPedido] = useState(false);

  const handleIsPedido = () => {
    setIsPedido(false);
  };

  const handleIsContact = () => {
    setIsPedido(true);
  };

  /* logica del formulario para recibir datos del formulario de motivos de oracion */
  const refFormM = useRef();

  const handleSubmitMotivos = (event) => {
    event.preventDefault();

    const serviceIdMotivos = 'service_aj6qnhp';
    const templateIdMotivos = 'template_zwzoef9';
    const apiKey = 'TQU6uXvnWyJFzkSac';

    emailjs.sendForm(serviceIdMotivos, templateIdMotivos, refFormM.current, apiKey)
      .then(result => {
        console.log(result.text);

        refForm.current.reset();

        Swal.fire({
          title: "Mensaje enviado!",
          text: "Gracias por contactarnos.",
          icon: "success",
          confirmButtonText: "OK"
        })
      })
      .catch(error => {
        console.error(error);

        Swal.fire({
          title: "Error!",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "OK"
        });
      });

  }

  /* logica para recibir los datos del formulario de contacto */
  const refForm = useRef();

  const handleSubmitContacto = (event) => {
    event.preventDefault();

    const serviceIdContacto = 'service_aj6qnhp';
    const templateIdContacto = 'template_sf93498';
    const apiKey = 'TQU6uXvnWyJFzkSac';

    emailjs.sendForm(serviceIdContacto, templateIdContacto, refForm.current, apiKey)
      .then(result => {
        console.log(result.text);

        refForm.current.reset();

        Swal.fire({
          title: "Mensaje enviado!",
          text: "Gracias por contactarnos.",
          icon: "success",
          confirmButtonText: "OK"
        })
      })
      .catch(error => {
        console.error(error);

        Swal.fire({
          title: "Error!",
          text: "Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo más tarde.",
          icon: "error",
          confirmButtonText: "OK"
        });
      });

  }

  return (
    <div className='contactBody'>
      <div className={`container ${isPedido ? 'right-panel-active' : ''}`} id="container">
        <div className="form-container contact-container">
          <form action="#" ref={refForm} onSubmit={handleSubmitContacto}>
            <h1 className='tituloForm'>Escríbenos</h1>

            <span className='subtitulo'>Dejanos tus datos y un mensaje</span>

            <input
              type="text"
              id="name_user"
              name="name_user"
              placeholder=" Su nombre"

            />



            <input
              type="tel"
              id="telefono"
              name="telefono_user"
              placeholder="Su celular"

            />


            <textarea
              id="mensaje"
              name="contacto"
              placeholder="Escribe tu mensaje aquí..."
              cols="40"
              rows="3"

            ></textarea>


            <button type="submit" className='botonEnviar'>Enviar</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#" ref={refFormM} onSubmit={handleSubmitMotivos} >
            <h1 className='tituloForm'>Tus motivos de oración</h1>

            <span className='subtitulo'>O si quieres dar gracias</span>
            <input
              type="text"
              name="name"
              placeholder="Su nombre"

            />

            <input
              type="tel"
              name="telefono"
              placeholder="Su telefono"

            />
            <textarea
              id="pedido"
              name="pedido"
              placeholder="Escribe tu mensaje aquí..."
              cols="40"
              rows="2"

            ></textarea>
            <button type="submit" className='botonEnviar'>Enviar</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Pedidos de oración</h1>
              <p className='paraffo'>Si tienes algún pedido de oración o simplemente contarnos que hizo Dios en tu vida, estaremos muy feliz por leerlo.</p>
              <button className="ghost botonEnviar" id="signIn" onClick={handleIsPedido}>Pedido </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>¡Bienvenido!</h1>
              <p className='paraffo'>Si es tu primera vez , nos gustaria que dejes tus datos y un pedido de oración para poder orar.</p>
              <button className="ghost botonEnviar" id="signUp" onClick={handleIsContact}>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Contacto;
