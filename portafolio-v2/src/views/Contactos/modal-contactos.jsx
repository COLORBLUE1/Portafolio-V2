import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: red;
    width: 100%;
    height: 60px;
    border-radius: 0 40px 40px 40px;
    padding: 10px;
    position: relative;
    top: 80px;
    display: none;
    z-index: 999;
`;

const ModalContactos = ({display}) => {
    console.log(display)
    return (
        <Container style={{ display: display}}>
                <div className="popup-content">
                    <span className="close" >&times;</span>
          <button>Enviar</button>
                </div>
        </Container>
    )
}

export default ModalContactos