import styled from 'styled-components'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  .yo {
    font-family: inco;
    background-color: #86e3ce;
    width: 30%;
    height: 500px;
    border-radius: 90px;
    text-align: right;
    padding: 30px;
    margin: 50px 10px;
    overflow: hidden;

    h2 {
      text-align: center;
      color: #3b3b3b;
      font-size: clamp(1.25rem, 0.804rem + 1.19vw, 1.875rem);
      font-weight: 800;
      line-height: 0.1em;
      letter-spacing: 0.3em;
      text-transform: uppercase;
    }

    figure {
      display: flex;
      justify-content: center;

      img {
        position: relative;
        top: -100px;
        scale: 1.5;
        margin: auto;
        left: -50px;
        transition: all 1s ease;
      }
    }

    &:hover {
    transition: all 1s ease;
    transform: translateY(-50px);


    img {
      scale: 1.3;
      transform: translateY(50px);
    }
  }
@media (max-width: 768px) {
    width: 70%;
    figure img {
        position: relative;
        top: -50px;
        scale: 1.7;
        transition: all 1s ease;
      }
    }
}

  .informacio {
    scrollbar-width: none; 
    overflow: auto;
    overflow-y: scroll; 
    padding: 30px;
    background-color: #41fd70c3;
    outline: 2px solid #ffffff;
    width: 50%;
    height: 500px;
    border-radius: 55px;
    transition: all 0.5s linear;
    font-size: clamp(1em, 2vw, 5em);
    text-align: center;
    font-family: roboto;

    #scroll-sobremi {
      display: flex;
      justify-content: center;
      animation: scrollUpDown 2s ease-in-out infinite;
      cursor: pointer;

      img {
        width: 50px;
        height: 50px;
        object-fit: contain;
        transition: all 1s ease;
      }
    }

    h4 {
      letter-spacing: 2px;
      color: #3a3a3a;
      margin: 5px;
      line-height: 70px;
    }

    p {
      font-size: 15px;
      letter-spacing: 0.1em;
      margin: 30px auto;
      width: 100%;
      color: #4e4e4e;
      font-size: clamp(1.25rem, 0.804rem + 1.19vw, 1.875rem);
    }

    figure {
      scale: 1.5;
      img {
        position: relative;
        width: 200px;
        height: 250px;
      }
    }

  &::-webkit-scrollbar {
    display: none; 
  }
 &:hover {
    transform: translateY(-50px);
    scale: 1.02;
    img {
      scale: 1.01;
    }
  }
  @media (max-width: 768px) {
    width: 70%;
    p{
      font-size: 14px;
      line-height: 1.5;
    }
}

    @keyframes scrollUpDown {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-15px);
      }
        100% {
        transform: translateY(0);
      }
    }
  }
  @media (max-width: 768px) {
    height: auto;
    padding: 30px 0;
    }
`;

const Informacion = () => {
  return (
    <Section>
      <div data-aos="fade-up" data-aos-duration="2000" className="yo" id="yo">
        <h2 id="estesoyyo">Este soy yo</h2>
        <figure>
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1749327251/photo_5055586398052134396_y-removebg-preview_vf8w7s.png" alt="" />
        </figure>
      </div>
      <div data-aos="fade-down" className="informacio">
        <div id="scroll-sobremi">
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704009/Portafolio/icons/vpvx3dkig8a1akuybkjl.svg"
            alt="mause down scroll"
          />
        </div>
        <h4>Ingeniero en sistemas - Desarrollador web</h4>
        <h4>¿Que puedo aportar?</h4>
        <p>  Como programador front-end, aporto habilidades en HTML, CSS y
          JavaScript para desarrollar interfaces intuitivas y visualmente
          atractivas. Con el objetivo de optimizar el rendimiento y la
          experiencia del usuario en cada proyecto.</p>
      </div>
    </Section>
  )
}

export default Informacion