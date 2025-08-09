import styled, { keyframes } from 'styled-components';
import { useEffect } from 'react';

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
  background-color: #12121291;
  backdrop-filter: blur(5px);
  animation: ${fadeIn} 0.3s ease forwards;
  z-index: 1000;
`;

const Container = styled.div`
  position: ${(props) => (props.isMobile ? 'fixed' : 'absolute')};
  background-color: ${(props) => (props.isMobile ? 'rgba(255, 255, 255, 0.95)' : '#fefefe')};
  padding: 20px 40px;
  width: ${(props) => (props.isMobile ? '90%' : '320px')};
  max-width: 400px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 0 15px #11111190;
  border-radius: 30px;
  font-size: 20px;
  color: #111111;
  text-align: center;
  animation: ${fadeInDown} 0.3s ease forwards;
  top: ${(props) => (props.isMobile ? '50%' : props.position?.top + 'px')};
  left: ${(props) => (props.isMobile ? '50%' : props.position?.left + 'px')};
  transform: ${(props) => (props.isMobile ? 'translate(-50%, -50%)' : 'translate(-50%, 0)')};
  z-index: 1001;
  font-family: 'Roboto', sans-serif;
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

const ModalContactos = ({ display, onClose, isMobile, position }) => {
  // Cerrar con ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Cerrar clic en overlay (solo en móvil)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      {isMobile && <Overlay display={display} onClick={handleOverlayClick} />}
      <Container
        isMobile={isMobile}
        position={position}
        aria-modal="true"
        role="dialog"
      >
        <BtnClose onClick={onClose} aria-label="Cerrar modal">
          &times;
        </BtnClose>
        <h3>Contacto</h3>
        <p>
          Aquí puedes poner el formulario o datos de contacto que desees.
        </p>
        {/* Aquí más contenido */}
      </Container>
    </>
  );
};

export default ModalContactos;
