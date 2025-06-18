import React from 'react'
import styled from 'styled-components'

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
`;
  
  

const LoUltimo = () => {
  return (
    <Section>
      <h2>Lo Último</h2>
      <p>Contenido de la sección "Lo Último"</p>
    </Section>
  )
}

export default LoUltimo