import styled from "styled-components";
import { Diseno, Framework, lenguajes, Librerias } from "../../services/const";

const SectionMain = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 30px;
`;

const SkillSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 40px;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Card = styled.div`
  width: 450px;
  height: 300px;
  border-radius: 30px;
  padding: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background: ${({ bg }) => bg || "#fff"};
  z-index: ${({ z }) => z || "1"};
  animation: ${({ animate }) => animate || "none"};
  top: 0;
  transition: all 1s;

  h2 {
    color: #5a5a5a;
    text-align: center;
  }

  img {
    width: 80%;
    position: relative;
    top: -20px;
  }

  &:hover {
    opacity: 0;
    top: -60px;
  }
`;

const OverlayFlex = styled(Card)`
  position: absolute;
  top: 30px;
  left: ${({ left }) => (left ? "60px" : "auto")};
  right: ${({ right }) => (right ? "60px" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: 4px solid white;

  img {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    background-color: white;
  }

  display: ${({ hide }) => (hide ? "none" : "flex")};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InfoSection = styled.section`
  text-align: center;
  padding: 30px;
  border-radius: 50px;

  > div > strong {
    text-transform: uppercase;
    color: #ffffff;
    font-size: 25px;
    display: block;
    margin-bottom: 10px;
  }

  > div > .cont {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    overflow: hidden;
    margin-bottom: 40px;
    padding: 10px;
    border-radius: 50px;
    gap: 15px;
    img {
      animation: marquee 18s linear infinite;
      width: 100px;
      height: 100px;
      margin: 0 10px;
      border-radius: 15px;
      object-fit: contain;
    }

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;

      img {
        animation: none;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 5px;
  }

  // Espaciado entre bloques de datos
  > div > strong:not(:first-of-type) {
    margin-top: 40px;
  }

  @keyframes fadeIn {
    0% {
      transform: translateY(30px);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(30px);
    }
  }

  @keyframes marquee {
    0% {
      transform: translateX(750%);
    }
    100% {
      transform: translateX(-1000%);
    }
  }
`;

const Herramientas = () => {
  return (
    <SectionMain>
      {/* Sección 1 - solo visible en desktop */}
      <SkillSection>
        {/* Tarjeta 1 */}
        <Card
          bg="radial-gradient(at center, #fffd98, #ffffff)"
          z={2}
          animate="fadeIn 3s infinite"
        >
          <h2>Herramientas de diseño principales</h2>
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1753734033/developer-2-06-512_jltg4u.webp"
            alt="Diseño"
          />
        </Card>

        {/* Tarjeta 2 */}
        <Card
          bg="radial-gradient(at center, #b2d48a, #fffffe)"
          z={2}
          animate="fadeIn 4s infinite"
        >
          <h2>Herramientas de programación principales</h2>
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1753734033/developer-2-06-512_jltg4u.webp"
            alt="Programación"
          />
        </Card>

        {/* Portada izquierda */}
        <OverlayFlex bg="radial-gradient(at center, #7f7df1, #ffffff)" left>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
            alt="Illustrator"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            alt="Figma"
          />
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1753732485/Adobe_After_Effects_CC_icon.svg_v3ni2k.png"
            alt="AE"
          />
        </OverlayFlex>

        {/* Portada derecha */}
        <OverlayFlex
          bg="radial-gradient(at center, #918ff7, #ffffff)"
          right
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 30%)",
            justifyItems: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React"
          />
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1753730230/6aecc665-9f30-4dc7-bacc-880d8e66c7bb_tf0ke2.png"
            alt="Icon"
          />
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1753732568/angular-icon-logo-5FC0C40EAC-seeklogo.com_ixngik.png"
            alt="Angular"
          />
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1753732702/mysql-5-logo-png-transparent_ebetfi.png"
            alt="MySQL"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
            alt="Sass"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            alt="JS"
          />
        </OverlayFlex>
      </SkillSection>

      {/* Sección 2 - visible en todos los dispositivos */}
      <InfoSection>
        <div>
          <strong>Diseño</strong>
          <div className="cont">
            {Diseno.map((src, i) => (
              <img key={i} src={src} alt="Diseño" />
            ))}
          </div>

          <strong>Frameworks</strong>
          <div className="cont">
            {Framework.map((src, i) => (
              <img key={i} src={src} alt="Framework" />
            ))}
          </div>

          <strong>Librerías</strong>
          <div className="cont">
            {Librerias.map((src, i) => (
              <img key={i} src={src} alt="Librería" />
            ))}
          </div>

          <strong>Lenguajes</strong>
          <div className="cont">
            {lenguajes.map((src, i) => (
              <img key={i} src={src} alt="Lenguaje" />
            ))}
          </div>
        </div>
      </InfoSection>
    </SectionMain>
  );
};

export default Herramientas;
