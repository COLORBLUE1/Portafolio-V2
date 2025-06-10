import React from 'react'
import styled from 'styled-components'
import { FaReact, FaAngular } from "react-icons/fa";


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

  div {
    width: 100%;
    display: grid;
    justify-content: center;
    justify-items: center;
    
    h1 {
      font-size: clamp(3.3rem, -2.825rem + 16.333vw, 11.875rem);
      font-weight: 600;
      line-height: 0.1em;
      letter-spacing: 0.1em;
      color: rgb(0 182 255);
      font-family: inco;
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: 100px;
    }
    h3 {
      color: #a3a3a371;
      font-size: 20px;
      font-weight: 400;
      line-height: 0em;
      letter-spacing: 0.5em;
      margin: 0;
      text-transform: uppercase;
      font-family: roboto;
    }

    p {
      width: 55%;
      font-size: 20px;
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
}

}
@media (max-width: 768px) {
  background-color: red;
}
`;


const Presentacion = () => {
  return (
    <Section >
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
          <a href="#" id="contactame">Contactame</a>
          <a
            id="descargarcv"
            target="_blank"
            href="/assets/Archivos/Camilo SOL · CV - 1 2025.pdf">Descargar CV</a>
        </div>
      </div>
    </Section>
  )
}

export default Presentacion