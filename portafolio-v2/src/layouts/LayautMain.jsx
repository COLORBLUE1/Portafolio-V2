import React from 'react'
import styled from 'styled-components'; 
import NavBar from '../components/NavBar';

const Main = styled.section `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    color: #333;
    font-family: Arial, sans-serif;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding: 10px;
    }
`

export const LayoutMain = ({ children }) => {
  return (
    <>
    <NavBar/>
    <Main>
        {children}
    </Main>
    </>
  )
}
