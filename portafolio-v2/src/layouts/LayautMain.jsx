import styled from 'styled-components'; 


const Main = styled.section `
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
    scroll-behavior: smooth;
    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const LayoutMain = ({ children }) => {
  return (
    <>
    <Main>
        {children}
    </Main>
    </>
  )
}
