import styled from 'styled-components'
import { logo } from '../assets/const';

const FooterSection = styled.footer`
  width: 100%;
  height: 300px;
  color: white;
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
  
    div:first-child {
      margin: 0 auto;
      display: grid;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 30px;
      span{
      display: flex;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.59);
      backdrop-filter: blur(5px);
      height: 100px;
      width: 500px;
      transition: 0.5s linear;
      border-radius: 50px;
      align-items: center;
      gap: 40px;
      p {
        font-family: roboto;
      color: #4b4b4b;
      font-weight: 800;
      letter-spacing: 0.3em;
      }
  
      img {
      width: 65px;
      height: 65px;
      }
      strong{
        color: black;
      }
    }
  }


 div:last-child {
    background-color: red;
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
    align-items: center;

  }

  ul {
    list-style: none;
    padding: 0;
    h2{
      color: #ffffff;
      font-size: 1.5em;
      margin-bottom: 10px;
      font-family: roboto;
    }
    li{
      font-family: inco;
    }
  }

  h2 {
    margin-bottom: 10px;
  }

  li {
    margin: 5px 0;
  }

`;

const Footer = () => {
  return (
    <FooterSection>

      <div>
        <span>
          <img src={logo} alt="Description" />
          <p>Cada día se aprende algo</p>
        </span>
      <strong>2025 - <a href=""></a>@Color blue</strong>
      </div>
      <div><ul>
        <h2>Mira mis redes</h2>
        <li>Our Story</li>
        <li>Team</li>
        <li>Careers</li>
      </ul>
      
      <ul>
        <h2>COntactame</h2>
        <li>Mensaje</li>
      </ul>
      </div>

    </FooterSection>
  ) 
}

export default Footer