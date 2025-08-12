import React, { useState } from 'react'
import styled from 'styled-components'
import { FaReact, FaAngular } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ModalContactos from '../Contactos/modal-contactos';


const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  color: #333;
  font-family: Arial, sans-serif;
  overflow-y: auto;
  transition: all 1s ease;

  div {
    width: 100%;
    display: grid;
    justify-content: center;
    justify-items: center;
    
    h1 {
      font-size: clamp(3rem, -2.825rem + 16.333vw, 11.875rem);
      line-height: 0.1em;
      letter-spacing: 0.1em;
      color: rgb(0 182 255);
      font-family: inco;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 6%;
      transition: all 1s ease;

    }
    h3 {
      color: #00000070;
      font-size: clamp(0.5rem, 0.179rem + 1.19vw, 1.25rem); 
      font-weight: 400;
      line-height: 0em;
      letter-spacing: 0.5em;
      margin: 0;
      text-transform: uppercase;
      font-family: roboto;
    }

    p {
      width:clamp(21.875rem, -2.679rem + 65.476vw, 56.25rem);
      font-size: clamp(0.1rem, 0.714rem + 0.595vw, 1.25rem);
      margin-bottom: 30px;
      text-align: center;
      color: #929292f1;
      font-family: roboto;
    }
    .botones {
      display: flex;
      flex-wrap: wrap;
      a {
        letter-spacing: 0.1em;
        border-radius: 30px;
        background-color: rgb(0 182 255);
        color: white;
        text-decoration: none;
        padding: 10px 15px;
        margin: 10px;
    }

    #descargarcv{
      outline: rgb(0 182 255) solid 2px;
      background-color: transparent;
  }

      a:hover {
        background-color: aqua !important;
        color: black;
        transition: all 0.3s ease;
        scale: 1.1;
  }
}
}
`;


const Presentacion = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <Section className='Presentacion'>
      <div>
        <h1 className="animate__animated animate__fadeInUp">Camilo sol</h1>

        <h3
          id="subtitulo-sobremi"
          className="animate__animated animate__fadeInUp animate__delay-1s"
        >
          desarrollador front-End <span><FaReact color='rgb(0, 255, 255)' /> <FaAngular color='rgba(250, 53, 53, 0.699)' /></span>
        </h3>
        <p className="animate__animated animate__fadeInUp animate__delay-1s">
          ¡Bienvenidos a mi increíble y deslumbrante portafolio web! Aquí
          encontrarás una mezcla perfecta de talento, creatividad y un toque de
          locura. Soy como un chef de la web, pero en lugar de ingredientes,
          utilizo líneas de código y diseños extravagantes.
        </p>
        <div className='botones  animate__animated animate__fadeInDown animate__delay-1s' >
          <Link to="#" onClick={e => { e.preventDefault(); setShowContactModal(true); }}>
            Contactame
          </Link>
          <a
            id="descargarcv"
            target="_blank"
            href="Archivos/CamiloSOLCV-12025.pdf">Descargar CV</a>
        </div>
      </div>
      <ModalContactos open={showContactModal} onClose={() => setShowContactModal(false)} />
    </Section>
  )
}

export default Presentacion