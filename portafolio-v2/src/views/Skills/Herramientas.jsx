import styled from 'styled-components';
import { Diseno, Framework, lenguajes, Librerias } from '../../services/const';

const Sectionmain = styled.section`

section:first-child{
  display: flex;
  gap: 20px;
  padding: 30px;
  border-radius: 50px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  justify-content: center;

  div {
  width: 450px;
  height: 300px;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all 1s;
  position: relative;
  top: 0;
  overflow: hidden;

  h2 {
  color: #5a5a5a;
  text-align: center;
}

  &:hover{
  opacity: 0;
  position: relative;
  top: -60px;
  }
}

div:first-child{
  background: radial-gradient(at center, #fffd98, #ffffff);
  z-index: 20;
  animation: fadeIn 3s infinite;
}


div:nth-child(2){
  position: absolute;
  bottom: 0;
  top: 30px;
  left: 0;
  margin-left:60px ;
  background: radial-gradient(at center, #7f7df1, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

img{
    width: 100px;
    height: 100px;
}

  border: 4px solid white;
    @media (max-width: 768px) {
    width: 75%;
  }
}

div:nth-child(3){
  position: absolute;
  bottom: 0;
  top: 30px;
  right: 0;
  margin-right:60px;
  background: radial-gradient(at center, #918ff7, #ffffff);
  border: 4px solid white;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-items: center;
  align-items: center;
  gap: 5px;
  justify-content: center;
img{
    width: 100px;
    height: 100px;
    border-radius: 15px;
    background-color: white;
}
    @media (max-width: 768px) {
    width: 75%;
  }
}

div:last-child{
  background: radial-gradient(at center, #b2d48a, #fffffe);
  animation: fadeIn 4s infinite;
  z-index: 20;
  }
  @media (max-width: 768px) {
   display: : ;
}

    //Animations

      @keyframes fadeIn {
      0% {
        transform: translateY(-10px);
      }
      50% {
        transform: translateY(-25px);
      }
        100% {
        transform: translateY(-10px);
    }
  }
}

section:last-child {
  display: grid;
  gap: 20px;
  padding: 30px;
  border-radius: 50px;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  justify-content: center;
  text-align: center;
  margin: 20px auto;
  div:first-child {
  strong{
  text-transform: uppercase;
  color: #ffffff;
  font-size: 25px;
}

.cont{
  border-radius: 50px;
  display: flex;
  overflow: hidden;
  padding: 10px;
  justify-content: center;

img {
  animation: marquee 18s linear infinite;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  border-radius: 15px;
  object-fit: contain;
      }
    }
  }
}


//Animations

@keyframes marquee {
 
0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-1000%);
  }
  0% {
    transform: translateX(750%);
  }
}
`;

const Herramientas = () => {

  return (
    <Sectionmain>
      <section className='SkillsPrin'>

        <div><h2>Herramientas de diseno peincipales</h2> <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753734033/developer-2-06-512_jltg4u.webp" alt="" /></div>
        <div className='prin'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg" alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="" />
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753732485/Adobe_After_Effects_CC_icon.svg_v3ni2k.png" alt="" />
        </div>
        <div> <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753730230/6aecc665-9f30-4dc7-bacc-880d8e66c7bb_tf0ke2.png" alt="" />
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753732568/angular-icon-logo-5FC0C40EAC-seeklogo.com_ixngik.png" alt="" />
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753732702/mysql-5-logo-png-transparent_ebetfi.png" alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="" />
        </div>
        <div><h2>Herramientas de programacion peincipales</h2>
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753734033/developer-2-06-512_jltg4u.webp" alt="" /></div>
      </section>
      <section>

        <div>
          <strong>diseño</strong>
          <div className='cont'>
            {Diseno.map((element, index) => (
              <img key={index} src={element} alt="Diseño Programas" />
            ))}
          </div>

          <strong>frameworks</strong>
          <div className='cont'>
            {Framework.map((element, index) => (
              <img key={index} src={element} alt="Diseño Programas" />
            ))}
          </div>

          <strong>librerias</strong>
          <div className='cont'>
            {Librerias.map((element, index) => (
              <img key={index} src={element} alt="Diseño Programas" />
            ))}
          </div>
          <strong>lenguajes</strong>
          <div className='cont'>
            {lenguajes.map((element, index) => (
              <img key={index} src={element} alt="Diseño Programas" />
            ))}
          </div>
        </div>
      </section>
    </Sectionmain>
  )
}

export default Herramientas