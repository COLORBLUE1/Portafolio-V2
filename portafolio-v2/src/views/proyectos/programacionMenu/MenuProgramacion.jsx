import React from 'react'
import styled from 'styled-components'
import { RxTriangleLeft } from "react-icons/rx";

const Span = styled.span`
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  transition: all 0.5s;
  svg{
    width: 50px;
    height: 50px;
    color: white;
  }
h2{
text-align: left;
width: 300px;
}

&.active{
  background-color: rgba(255, 255, 255, 0.2);
  outline: 1px solid aqua;
  top: 40%;

  svg{
    transform: rotate(180deg);
  }
}

&:hover{ 
  scale: 1.1;
  cursor: pointer;
}
`;

const MenuProgramacion = () => {
  return (
       <>
       <h2>Que proyectos quires?</h2>
       <Span className=" animate__animated animate__fadeInRight"><RxTriangleLeft/> <h2>Proyectos en los que he colaborado</h2></Span>
         <Span className="active animate__animated animate__fadeInRight"><RxTriangleLeft/> <h2>Proyectos personales</h2></Span>
       </>
  )
}

export default MenuProgramacion

