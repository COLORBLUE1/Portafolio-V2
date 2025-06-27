import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
background-color: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
  outline: 1px solid aqua;
  position: fixed;
  left: 5%;
  border-radius: 15px;
    top: 50%;
  transform: translateY(-50%);

  ul{
    padding: 10px;
    display: grid;
    gap: 10px;
  strong{
    color: white;
  }
  li {
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  background-color: #8181816d;
  color: white;
  transition: all 0.5s;
  &:hover{
  scale: 1.1;
    }
    &.active{
  background-color: #ffffffb9;
      color: #707070;
    }
  }
}
  @media (max-width: 768px) {
    height: auto;
    padding: 30px 0;
    }
`;

const MenuProyectos = () => {
  return (
    <Menu className="animate__animated animate__fadeInLeft">
      <ul>
        <strong>Ver proyectos de:</strong>
        <li className='active'>Programacion</li>
        <li>Diseno</li>
      </ul>
    </Menu>
  )
}

export default MenuProyectos

