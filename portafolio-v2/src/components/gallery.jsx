import React from 'react'
import styled from 'styled-components'
import MenuProgramacion from '../views/proyectos/programacionMenu/MenuProgramacion';

const Contenedor = styled.div`
//background-color: aqua;
max-width: 40%;
width:100%;
height: 85%;
display: grid;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 25% 25% 25% 25%;
gap: 10px;

div:first-child {
    grid-column: 1/4;
    border-radius: 100px;
}

div:nth-child(2){
    background-color: #c8ff00;
    grid-column: 1/3;
    grid-row: 2/4;
    border-radius: 100px;

}

div:nth-child(3){
    background-color: #f700ff;
    grid-row: 2/4;
    border-radius: 100px;
}

div:nth-child(4){
    background-color: #ffffff;
    border-radius: 100px;

}

div:last-child{
    background-color: #0011ff;
    grid-column: 2/4;
    border-radius: 100px;
}


  @media (max-width: 768px) {
    height: auto;
    padding: 30px 0;
    }
`;



const Gallery = ({url1}) => {
    console.log(url1)
    return (
        <>
        <MenuProgramacion/>
            <Contenedor>
                <div style={{ backgroundImage: 'url(' + url1+ ')'}} className="animate__animated animate__fadeInDown">1</div>
                <div className="animate__animated animate__fadeInLeft">2</div>
                <div className="animate__animated animate__fadeInRight">3</div>
                <div className="animate__animated animate__fadeInLeft">4</div>
                <div className="animate__animated animate__fadeInUp">5</div>
            </Contenedor>
        </>
    )
}

export default Gallery