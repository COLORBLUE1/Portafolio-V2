import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.display ? props.display : 'none')};
  position: fixed;
  inset: 0;
  background-color: #a1a1a191;
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 0.3s ease forwards;
  z-index: 1000;

  justify-content: center;
    align-items: center;
  
`;

const Container = styled.div`
  position: fixed;
  background-color: #fefefe;
  padding: 20px 40px;
  width: 90%;
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 0 15px #11111190;
  border-radius: 30px;
  font-size: 20px;
  color: #111111;
  text-align: center;
  animation: ${fadeInDown} 0.3s ease forwards;
  z-index: 1001;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    width: 60%;
}
`;

const BtnClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #111111;
  font-weight: 700;

  &:hover {
    color: #00ccd3;
  }
`;


const ModalContactos = ({ open, onClose }) => {
  // Cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, open]);

  // Cerrar clic en overlay (en cualquier dispositivo)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!open) return null;

  return (
    <>
      <Overlay display={open ? 'flex' : 'none'} onClick={handleOverlayClick} >

        <Container
          aria-modal="true"
          role="dialog"
        >
          <BtnClose onClick={onClose} aria-label="Cerrar modal">
            &times;
          </BtnClose>
          <h3>Contacto</h3>
          <ContactForm />
        </Container>
      </Overlay>
    </>
  );
};

export default ModalContactos;
