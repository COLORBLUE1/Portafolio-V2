import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Diseno, Framework, lenguajes, Librerias } from "../../services/const";

gsap.registerPlugin(ScrollTrigger);

/* ===================== Styled Components ===================== */
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
  /* Dejamos de usar CSS animations aquí; GSAP controla la animación */
  top: 0;
  will-change: transform, opacity;
  /* Pequeña sombra para dar profundidad */
  box-shadow: 0 20px 60px -25px rgba(0,0,0,.25);

  h2 {
    color: #5a5a5a;
    text-align: center;
  }

  img {
    width: 80%;
    position: relative;
    top: -20px;
    user-select: none;
    pointer-events: none;
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
  box-shadow: 0 10px 30px -15px rgba(0,0,0,.35);

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
      background: #fff;
    }

    /* Pausa el marquee cuando el usuario pasa el mouse */
    &:hover img {
      animation-play-state: paused;
      filter: saturate(120%);
    }

    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;

      img { animation: none; }
    }
  }

  @media (max-width: 768px) {
    padding: 5px;
  }

  /* Espaciado entre bloques de datos */
  > div > strong:not(:first-of-type) {
    margin-top: 40px;
  }

  @keyframes marquee {
    0% { transform: translateX(750%); }
    100% { transform: translateX(-1000%); }
  }
`;

/* ===================== Componente ===================== */
const Herramientas = () => {
  const rootRef = useRef(null);
  const cardsRef = useRef([]);
  const overlaysRef = useRef([]);
  const headingsRef = useRef([]);
  const contRef = useRef([]);
  const [prefersReduced, setPrefersReduced] = useState(false);

  // Helpers para refs múltiples
  const setCardRef = (el, idx) => {
    if (el) cardsRef.current[idx] = el;
  };
  const setOverlayRef = (el, idx) => {
    if (el) overlaysRef.current[idx] = el;
  };
  const setHeadingRef = (el, idx) => {
    if (el) headingsRef.current[idx] = el;
  };
  const setContRef = (el, idx) => {
    if (el) contRef.current[idx] = el;
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Animaciones de entrada y scroll
  useLayoutEffect(() => {
    if (prefersReduced) return; // respeta accesibilidad

    const ctx = gsap.context(() => {
      // Entrada general del bloque
      gsap.from(rootRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      });

      // Stagger para las 2 tarjetas superiores
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Micro-animación flotante sutil en overlays (logos)
      overlaysRef.current.forEach((overlay, i) => {
        const imgs = overlay?.querySelectorAll("img");
        imgs?.forEach((img, k) => {
          gsap.to(img, {
            y: gsap.utils.random(-6, 6),
            rotation: gsap.utils.random(-2, 2),
            duration: gsap.utils.random(3, 5),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: (i + k) * 0.1,
          });
        });
      });

      // Headings de InfoSection aparecen al hacer scroll
      headingsRef.current.forEach((h) => {
        if (!h) return;
        gsap.from(h, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: h,
            start: "top 85%",
          },
        });
      });

      // Contenedores con logos suben con stagger al entrar en viewport
      contRef.current.forEach((c) => {
        if (!c) return;
        gsap.from(c, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: c,
            start: "top 90%",
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  // Hover/Focus accesible para las Cards superiores (revela las overlays)
  useEffect(() => {
    if (prefersReduced) return;

    const enter = (el) => {
      gsap.to(el, { y: -60, opacity: 0, duration: 0.55, ease: "power3.out" });
    };
    const leave = (el) => {
      gsap.to(el, { y: 0, opacity: 1, duration: 0.55, ease: "power3.out" });
    };

    const cards = cardsRef.current.filter(Boolean);
    const handlers = cards.map((card) => {
      const onEnter = () => enter(card);
      const onLeave = () => leave(card);
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("focus", onEnter, true);
      card.addEventListener("blur", onLeave, true);
      return { card, onEnter, onLeave };
    });

    return () => {
      handlers.forEach(({ card, onEnter, onLeave }) => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("focus", onEnter, true);
        card.removeEventListener("blur", onLeave, true);
      });
    };
  }, [prefersReduced]);

  return (
    <SectionMain ref={rootRef}>
      {/* Sección 1 - solo visible en desktop */}
      <SkillSection>
        {/* Tarjeta 1 */}
        <Card
          ref={(el) => setCardRef(el, 0)}
          bg="radial-gradient(at center, #fffd98, #ffffff)"
          z={2}
          tabIndex={0}
          aria-label="Herramientas de diseño principales"
        >
          <h2>Herramientas de diseño principales</h2>
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1753734033/developer-2-06-512_jltg4u.webp"
            alt="Diseño"
            draggable={false}
          />
        </Card>

        {/* Tarjeta 2 */}
        <Card
          ref={(el) => setCardRef(el, 1)}
          bg="radial-gradient(at center, #b2d48a, #fffffe)"
          z={2}
          tabIndex={0}
          aria-label="Herramientas de programación principales"
        >
          <h2>Herramientas de programación principales</h2>
          <img
            src="https://res.cloudinary.com/dehpi4905/image/upload/v1753734033/developer-2-06-512_jltg4u.webp"
            alt="Programación"
            draggable={false}
          />
        </Card>

        {/* Portada izquierda (overlay) */}
        <OverlayFlex
          ref={(el) => setOverlayRef(el, 0)}
          bg="radial-gradient(at center, #7f7df1, #ffffff)"
          left
          aria-hidden="true"
        >
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
            alt="After Effects"
          />
        </OverlayFlex>

        {/* Portada derecha (overlay) */}
        <OverlayFlex
          ref={(el) => setOverlayRef(el, 1)}
          bg="radial-gradient(at center, #918ff7, #ffffff)"
          right
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 30%)",
            justifyItems: "center",
            alignItems: "center",
            gap: "5px",
          }}
          aria-hidden="true"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753730230/6aecc665-9f30-4dc7-bacc-880d8e66c7bb_tf0ke2.png" alt="Icono" />
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753732568/angular-icon-logo-5FC0C40EAC-seeklogo.com_ixngik.png" alt="Angular" />
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1753732702/mysql-5-logo-png-transparent_ebetfi.png" alt="MySQL" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg" alt="Sass" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" />
        </OverlayFlex>
      </SkillSection>

      {/* Sección 2 - visible en todos los dispositivos */}
      <InfoSection>
        <div>
          <strong ref={(el) => setHeadingRef(el, 0)}>Diseño</strong>
          <div className="cont" ref={(el) => setContRef(el, 0)}>
            {Diseno.map((src, i) => (
              <img key={i} src={src} alt={`Diseño ${i + 1}`} />
            ))}
          </div>

          <strong ref={(el) => setHeadingRef(el, 1)}>Frameworks</strong>
          <div className="cont" ref={(el) => setContRef(el, 1)}>
            {Framework.map((src, i) => (
              <img key={i} src={src} alt={`Framework ${i + 1}`} />
            ))}
          </div>

          <strong ref={(el) => setHeadingRef(el, 2)}>Librerías</strong>
          <div className="cont" ref={(el) => setContRef(el, 2)}>
            {Librerias.map((src, i) => (
              <img key={i} src={src} alt={`Librería ${i + 1}`} />
            ))}
          </div>

          <strong ref={(el) => setHeadingRef(el, 3)}>Lenguajes</strong>
          <div className="cont" ref={(el) => setContRef(el, 3)}>
            {lenguajes.map((src, i) => (
              <img key={i} src={src} alt={`Lenguaje ${i + 1}`} />
            ))}
          </div>
        </div>
      </InfoSection>
    </SectionMain>
  );
};

export default Herramientas;
