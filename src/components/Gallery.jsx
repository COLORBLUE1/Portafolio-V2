import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RxTriangleLeft } from 'react-icons/rx';

const Menu = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  width: 300px;
  display: grid;
  gap: 10px;

  span {
    background-color: #535353;
    border-radius: 15px;
    width: 320px;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: all 1s;
    margin-left:30px ;

    &:hover {
      background-color: #adadad;
  
    strong {
       color: #353535;
    }
  }

    svg {
      transition: all 1s;
      width: 25px;
      height: 25px;
      color: #838383;
      rotate: 180deg;
    }

    strong {
      font-size: clamp(0.938rem, 0.714rem + 0.595vw, 1.25rem);
      text-align: left;
      color: #bbbbbb;
      transition: all 1s;
    }

    &.active {
      background-color: #6a9bcf; /* Cambia el color de fondo cuando está activo */
      margin-left: 0;

      strong {
      color: #ffffff;
    }
    
      svg {
      color: #ffffff;
      width: 65px;
      height: 65px;
      rotate: 0deg;
    }
}
  @media (max-width: 768px) {
  width:40%;
  margin: 0;

   &.active {
       margin: 0;
      svg {
      color: #ffffff;
      width: 55px;
      height: 55px;
      rotate:-90deg;
    }
  }
  strong {
text-align: center;
}
}
}
  @media (max-width: 768px) {
  position: absolute;
  top:100px;
  transform: translateY(0);
  right: 0;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
}
`;

const Contenedor = styled.div`
  padding-top: 50px;
  max-width: 45%;
  width: 100%;
  height: 85%;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 25% 25% 25% 25%;
  gap: 10px;
  transition: all 1s;
  
  div {
    background: no-repeat center;
    background-size: cover;
    border-radius: 100px;
    transition: all 0.5s; 
    display: flex;
    justify-content: center;
    align-items: center;

span{
  display: flex;
  gap: 10px;
}

    a img {
      width: clamp(3.125rem, 0.893rem + 5.952vw, 6.25rem);
      opacity: 0;
      transition: all 0.3s;

    @media (max-width: 768px) {
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          opacity: 1;
          border-radius: 200px;
          padding: 5px;
          outline: 1px solid aqua;
  }
}

     &:hover {
        img {
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          opacity: 1;
          border-radius: 200px;
          padding: 5px;
          outline: 1px solid aqua;
        }
      }
  }

  div:first-child {
    background-color: #ff0080;
  }

  div:nth-child(2) {
    background-color: #c8ff00;
  }

  div:nth-child(3) {
    background-color: #f700ff;
  }

  div:nth-child(4) {
    background-color: #ffffff;
  }

  div:last-child {
    background-color: #0011ff;
  }

  @media (max-width: 768px) {
  padding-top: 50px;  
  max-width: 80%;
  width:100%;
  height: 60%;
}
`;

const Gallery = ({ urlscola, urlspersonal, colum, row }) => {
  const [reloadKey, setReloadKey] = useState(0);
  const [activeMenu, setActiveMenu] = useState('Colab');

  localStorage.setItem('Proyectos', activeMenu);

  const checkProyectosStatus = () => {
    return localStorage.getItem('Proyectos') === 'Colab';
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setReloadKey(prev => prev + 1);
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateAndReload = (value) => {
    localStorage.setItem('Proyectos', value);
    setReloadKey(prev => prev + 1);
    setActiveMenu(value); // Actualizar el menú activo
  };

  return (
    <>
      <Menu>
        <span
          onClick={() => updateAndReload('Colab')}
          className={activeMenu === 'Colab' ? 'active' : ''}
        >
          <RxTriangleLeft /> <strong>Proyectos colaborativos y encargos</strong>
        </span>
        <span
          onClick={() => updateAndReload('Perso')}
          className={activeMenu === 'Perso' ? 'active' : ''}
        >
          <RxTriangleLeft /> <strong>Proyectos personales</strong>
        </span>
      </Menu>
      <Contenedor className="animate__animated animate__fadeIn" key={reloadKey}>
        {checkProyectosStatus() ? (
          <>
            <div style={{ backgroundImage: 'url(' + urlscola[0] + ')', gridColumn: colum[1] }} className="animate__animated animate__fadeInLeft"><a target='_blank' href="https://www.urbanhousecoo.com/"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a></div>
            <div style={{ backgroundImage: 'url(' + urlscola[1] + ')', gridColumn: colum[5], gridRow: row[1] }} className="animate__animated animate__zoomIn"><a target='_blank' href="https://www.uniajc.edu.co/semana-universitaria-unidiversidad/"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a></div>
            <div style={{ backgroundImage: 'url(' + urlscola[2] + ')', gridColumn: colum[2], gridRow: row[5] }} className="animate__animated animate__zoomIn"><a target='_blank' href="https://www.uniajc.edu.co/uniajc-virtual/"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a></div>
            <div style={{ backgroundImage: 'url(' + urlscola[3] + ')', gridColumn: colum[2] }} className="animate__animated animate__fadeInDown"><a target='_blank' href="https://fundacioncaminoatsiyon.org/"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a></div>
          </>
        ) : (<>
          <div style={{ backgroundImage: 'url(' + urlspersonal[0] + ')', gridColumn: colum[2] }} className="animate__animated animate__fadeInLeft"><span><a target='_blank' href="https://water-wise-six.vercel.app/"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a><a target='_blank' href="https://github.com/COLORBLUE1/WaterWise"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1751394220/info-icon-svgrepo-com_q4o9iu.svg" alt="visitar web icon" /></a></span></div>

          <div style={{ backgroundImage: 'url(' + urlspersonal[1] + ')', gridColumn: colum[1] }} className="animate__animated animate__zoomIn"><span><a target='_blank' href="https://dailybitsa-colorblue1s-projects.vercel.app/"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a><a target='_blank' href="https://github.com/COLORBLUE1/Examenes"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1751394220/info-icon-svgrepo-com_q4o9iu.svg" alt="visitar web icon" /></a></span></div>

          <div style={{ backgroundImage: 'url(' + urlspersonal[2] + ')', gridColumn: colum[1], gridRow: row[2] }} className="animate__animated animate__fadeInLeft"><span><a target='_blank' href="https://buffalo-react-beta.vercel.app/informacion"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a><a target='_blank' href="https://github.com/COLORBLUE1/Buffalo-React"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1751394220/info-icon-svgrepo-com_q4o9iu.svg" alt="visitar web icon" /></a></span></div>

          <div style={{ backgroundImage: 'url(' + urlspersonal[3] + ')', gridRow: row[2], }} className="animate__animated animate__zoomIn"><span><a target='_blank' href="https://red-family.vercel.app/"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a><a target='_blank' href="https://github.com/COLORBLUE1/RedFamily"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1751394220/info-icon-svgrepo-com_q4o9iu.svg" alt="visitar web icon" /></a></span></div>

          <div style={{ backgroundImage: 'url(' + urlspersonal[4] + ')', gridColumn: colum[4], display: "grid" }} className="animate__animated animate__fadeInLeft"><span><a target='_blank' href="https://red-family.vercel.app/"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704007/Portafolio/icons/fgr6lskpkpzy1zrs6kmw.svg" alt="visitar web icon" /></a><a target='_blank' href="https://github.com/COLORBLUE1/RedFamily"><img src="https://res.cloudinary.com/dehpi4905/image/upload/v1751394220/info-icon-svgrepo-com_q4o9iu.svg" alt="visitar web icon" /></a></span></div>
        </>
        )}
      </Contenedor>
    </>
  );
};

export default Gallery;
