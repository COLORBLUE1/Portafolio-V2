import styled from 'styled-components'
import { logo } from '../assets/const';

const FooterSection = styled.footer`
  width: 100%;
  height: 300px;
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 30px 0;
  position: relative;
  bottom: 0;

    div:first-child {
      margin: 0 auto;
      display: grid;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 30px;
      justify-items: center;
      span {
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
      font-family: inco;
      color: #222222b9;
      font-weight: 800;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      }

      img {
      width: 65px;
      height: 65px;
      }
    }
    strong {
      font-size: 0.8em;
      font-family: inco;
      color: #494949f4;
      a {
      text-transform: uppercase;
      color: #008cff;
    }
  }
}

 div:last-child {
    display: flex;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
    align-items: center;

  ul {
    list-style: none;
    padding: 0;
    h2{
      color: #353434b5;
      font-size: 1.5em;
      margin-bottom: 10px;
      font-family: roboto;
      letter-spacing: 6px;
    }
    li {
         margin: 10px 0;
         text-align: left;
      a {
      color: #696969;
      font-family: inco;
      &:hover{
        color: #2366f7;
      }
    }
      @media (max-width: 768px) {
      text-align: center;
      }
    }
  }
}

@media (max-width: 768px) {
  grid-template-columns: 100%;
  height: auto;
  div:first-child {
    width: 100%;
    span {
      width: 90%;
      height: 80px;
      padding: 10px;
      gap: 0;
        p {
      letter-spacing: auto;
      }
    }
  }
  
  div:last-child {
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    li{
      text-align: center;
    }
  }
}
`;

const Footer = () => {
  return (
    <FooterSection className='footer'>
      <div>
        <span>
          <img src={logo} alt="Description" />
          <p>Cada día se aprende algo</p>
        </span>
        <strong>2025 - <a target='_blank' href="https://github.com/COLORBLUE1">@Color blue</a></strong>
      </div>
      <div><ul>
        <h2>Adicional</h2>
        <li><a href="https://github.com/COLORBLUE1">Github</a></li>
        <li><a href="https://codepen.io/COLORBLUE1">Codepen</a></li>
        <li><a href="https://www.linkedin.com/in/camilo-sol/">Linkedin</a></li>
      </ul>
        <ul>
          <h2>Contactame</h2>
          <li><a href="https://wa.me/573173457029">whatsapp</a></li>
          <li><a href="https://web.telegram.org/k/#@Camilo_boy">Telegram</a></li>
          <li><a href="mailto:camilosol123@gmail.com">camilosol123@gmail.com</a></li>
        </ul>
      </div>
    </FooterSection>
  )
}

export default Footer