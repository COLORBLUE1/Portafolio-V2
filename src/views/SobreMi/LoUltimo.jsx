import { useEffect, useState } from 'react';
import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;

  div:first-child {
  overflow: hidden;
  background-image: url(https://res.cloudinary.com/dehpi4905/image/upload/v1748704012/Portafolio/Programacion-port/m5extryx2afpp5faz1gx.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  border-radius: 90px;
  transition: all 1s ease;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;

figure {
  opacity: 0;
  transition: all 1s;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #3b3b3b9d;
  backdrop-filter: blur(10px);
  border-radius: 90px;

  img {
  width: 150px;
  height: 150px;
}

&:hover  {
  opacity: 1;
  }
}

&:hover {
  transition: all 1s;
  transform: translateY(-15px);
  scale: 1.01;

  figure {
    opacity: 1;
  }
  }
  @media (max-width: 768px) {
    width: 80%;
}
}


div:last-child {
  background-color: #ffdca2;
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
  height: 500px;
  border-radius: 90px;
  text-align: center;
  padding: 30px;
  overflow: hidden;
  color: #3b3b3b;
  font-size: 30px;
  font-weight: 400;
  line-height: 0.1em;
  letter-spacing: 0.1em;
  
    h2 {
font-size: clamp(1.875rem, 1.429rem + 1.19vw, 2.5rem);
  }

figure {
  margin: auto;

 img {
  width: 400px;
  top: 100px;
  position: relative;
  object-fit: contain;
  scale: 1.5;
  right: -20%;
  transition: all 1s ease;

  &:hover  {
    transform: translateY(50px);
  }

  @media (max-width: 768px) {
    width: 70%;
    left: 0;
    bottom: 0;
    }
  }
}

  @media (max-width: 768px) {
    width: 70%;
}

&:hover {
  transition: all 1s ease;
  transform: translateY(-50px);
  scale: 1.02;
}

}
  @media (max-width: 768px) {
    height: auto;
    padding: 30px 0;
    }
`;

const LoUltimo = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    // Verificar al montar el componente
    checkScreenSize();
    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener('resize', checkScreenSize);
    // Limpiar listener al desmontar
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  return (
    <Section className="sobre_mi_3 seccion" id="sobre_mi_3">
      <div data-aos="fade-up" data-aos-duration="1000" className="gustos">
        <a
          href="https://www.uniajc.edu.co/semana-universitaria-unidiversidad/"
          target="_blank"
        >
          <figure>
            <img
              src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg"
              alt="INIAJC-VIRTUAL"
            />
          </figure>
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        className="Educacion"
        id="Educacion"
      >
        <h2 id="Miraloultimo">Mira lo ultimo</h2>
        <figure>
          <img
            src={isMobile ? "https://res.cloudinary.com/dehpi4905/image/upload/v1751384460/ChatGPT_Image_Jul_1__2025__10_40_25_AM-removebg-preview_ztbiyn.png" : "https://res.cloudinary.com/dehpi4905/image/upload/v1748704013/Portafolio/fixvdrg0athbp9ddp321.png"}
            alt="ver lo ultimo"
          />
        </figure>
      </div>
    </Section>
  )
}

export default LoUltimo