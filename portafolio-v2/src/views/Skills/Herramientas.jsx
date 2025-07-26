import React from 'react'
import styled from 'styled-components';


const Sectionmain = styled.section`


section:first-child{
  display: flex;
  gap: 20px;
  background-color: #5e5e5e;
  padding: 30px;
  border-radius: 15px;
div{
  width: 450px;
  height: 300px;
  border-radius: 25px;
  padding: 10px;
  cursor: pointer;
  h2{
  color: #5a5a5a;
  text-align: center;
  }
}

div:first-child{
  background: radial-gradient(at center, #fffd98, #ffffff);
}

div:last-child{
  background: radial-gradient(at center, #00ffeb, #ffffff);
}
}
`;

const Herramientas = () => {
  return (
    <Sectionmain>
      <section>
        <div><h2>Diseno</h2></div>
        <div><h2>Programacion</h2></div>
      </section>
      <section>
        <div><h2>Diseno</h2></div>
        <div><h2>Programacion</h2></div>
      </section>
    </Sectionmain>
  )
}

export default Herramientas