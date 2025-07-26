import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { iconMoon, iconSon } from '../services/const';
import { Link, useLocation } from "react-router-dom"; // Use useLocation from react-router-dom
import { RxHamburgerMenu, RxHeight } from "react-icons/rx";
import ModalContactos from '../views/Contactos/modal-contactos';

const NavCont = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 99;
.hamburgerMenu{
    z-index: 99;
    padding: 5px;
    background-color: #424242;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    display: none; /* oculto para pantallas grandes */
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #ffffff;
    position: absolute;
    left: 20px;
    top: 20px;
    box-shadow: -2px 3px 37px -9px rgba(0, 0, 0, 0.199);
    transition: all 0.9s ease-in-out !important;
    
    svg{
        height: 40px;
        width: 40px;
    }
    &:hover {
        scale: 1.2;
    }
    @media (max-width: 768px) {
        display: flex;
        left: 10px;
        top: 10px;
    }
}

.hamburgerMenuContainer{
    background-color: transparent;
    position: fixed;
    top: 0;
    left: -100%;
    width: 70%;
    height: 100%;
    z-index: 98;
    display: none; /* oculto para pantallas grandes */
    overflow: hidden;
    backdrop-filter: blur(20px);
    outline: 4px solid #00ffff78;
    border-radius: 0  30px  30px 0;
    transition: all 0.3s ease-in-out !important;

    ul {
        display: grid;
        box-shadow: -2px 3px 37px -13px rgba(0, 0, 0, 0.199);
        background-color: transparent;
        padding: 0;
        margin: 0 auto;
        margin-top: 200px;
        gap: 30px;
        justify-items: center;
        

  
        .contenedor_swich {
        right: 0; 
        box-shadow: -2px 3px 37px -9px rgba(255, 255, 255, 0.733);
        bottom: 0;
        position: relative;
}


        li {
            font-family: roboto;
            cursor: pointer;
            padding: 5px 15px;
            font-size: 20px;
            border-radius: 50px;
            text-transform: uppercase;
            transition: all 0.3s ease-in-out !important;
            a {
                color: #353535;
                text-decoration: none !important;
                font-weight: 600;
            }
                &.active {
                background-color: #00ccd373;
                padding: 13px 15px;

                a {
                color: #ffffff;
                font-weight: 800;
            }
        }
    }
}
    @media (max-width: 768px) {
        display: flex;
}
}
    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 30px;
        width: 550px;
        background-color: #ffffffdd;
        backdrop-filter: blur(10px);
        border-radius: 50px;
        padding: 15px;
        margin: 30px auto;
        box-shadow: -2px 3px 37px -13px rgba(0, 0, 0, 0.199);
   a {
                text-decoration: none !important;
                color: #6e6e6ed6;
                font-weight: 600;
          
        li {
            font-family: roboto;
            cursor: pointer;
            padding: 5px 15px;
            font-size: 20px;
            border-radius: 50px;
            text-transform: uppercase;
            transition: all 0.3s ease-in-out !important;
         
            &.active {
                background-color: #00ccd373;
                padding: 13px 15px;
                color: #ffffff;
                font-weight: 800;
        }
    }
  }
    .contenedor_swich {
        display: flex;
        gap: 10px;
        justify-content: center;
        position: absolute;
        right: -250px;
        background-color: #ffffff;
        border-radius: 50px;
        padding: 10px;
        box-shadow: -2px 3px 37px -9px rgba(0, 0, 0, 0.199);

        .swich,
        .swich_2 {
            box-shadow: -2px 3px 37px -9px rgba(0, 0, 0, 0.75);
            background-color: #424242;
            width: 45px;
            height: 45px;
            border-radius: 100px;
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            
        h6 {
            color: #ffffff;
            font-size: 15px;
            text-transform: uppercase;
            font-family: 'Roboto';
            margin: 0;
            padding: 0;
        }

            img {
                margin: auto;
                width: 25px;
                height: 25px;
            }
        &:hover {
               scale: 1.2;
        }
    }
}
  @media (max-width: 768px) {
   display: none;
}
}
`;

const NavBar = () => {
    const location = useLocation();
    const [active, setActive] = useState('Sobre mí');
    const [theme, setTheme] = useState('light'); // default


    useEffect(() => {
        const path = location.pathname;
        switch (path) {
            case '/':
                setActive('Sobre mí');
                break;
            case '/proyectos':
                setActive('Proyectos');
                break;
            case '/skills':
                setActive('Skills');
                break;
            case '/contacto':
                modal();
                break;
            default:
                setActive('Sobre mí');
        }
    }, [location]);


    // Handle scrolling to sections
    const handleScroll = (section) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
};

    // Toggle theme and persist in localStorage
    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    // Sync theme with body class and localStorage on mount and update
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, []);

    useEffect(() => {
        const body = document.body;
        if (theme === 'dark') {
            body.classList.add('dark');
            body.classList.remove('light');
        } else {
            body.classList.add('light');
            body.classList.remove('dark');
        }
    }, [theme]);


    const HandleResize = () => {
        const botonMenu = document.querySelector('.hamburgerMenu');
        const hamburgerMenuContainer = document.querySelector('.hamburgerMenuContainer');

        // Asegúrate que el menú empieza oculto con left -500px
        hamburgerMenuContainer.style.left = hamburgerMenuContainer.style.left || '-100%';

        // Evita añadir múltiples event listeners
        const onClick = () => {
            if (hamburgerMenuContainer.style.left === '0') {
                hamburgerMenuContainer.style.left = '-100%';  // Ocultar menú
            } else {
                hamburgerMenuContainer.style.left = '0';        // Mostrar menú
            }
        };

        // Remueve listener previo para evitar duplicados (por seguridad)
        botonMenu.removeEventListener('click', onClick);
        botonMenu.addEventListener('click', onClick);
    };

    return (
        <NavCont>
            <div onClick={() => HandleResize()} className="hamburgerMenu animate__animated animate__fadeInDown">
                <RxHamburgerMenu />
            </div>
            <ul className="animate__animated animate__fadeInDown">
                <Link to="/"><li className={active === 'Sobre mí' ? 'active' : ''} onClick={() => { handleScroll('sobre-mi'); setActive('Sobre mí'); }}>Sobre mí</li></Link>
                <Link to="/proyectos"><li className={active === 'Proyectos' ? 'active' : ''} onClick={() => { handleScroll('proyectos'); setActive('Proyectos'); }}>Proyectos</li></Link>
                <Link to="/skills"><li className={active === 'Skills' ? 'active' : ''} onClick={() => { handleScroll('skills'); setActive('Skills'); }}>Skills</li></Link>
                <a ><li onClick={() => { modal('block !important'); }}>Contacto</li></a>
                <div className="contenedor_swich animate__animated animate__fadeInUp">
                    <div className="swich" id="swich" onClick={toggleTheme} style={{ backgroundColor: theme === 'dark' ? '#424242' : 'white', outline: theme === 'light' ? '2px solid #0000007f' : 'none' }}>
                        <img className='animate__animated animate__fadeInDown'
                            id="icon_swich"
                            src={theme === 'light' ? iconMoon : iconSon}
                            alt="Switch Theme Icon"
                        />
                    </div>
                    <div className="swich_2" id="swich_2">
                        <h6 className='animate__animated animate__fadeInUp' id="ES-EN">EN</h6>
                    </div>
                </div>
            </ul>

            {/* //Hamburguer menu for mobile view */}

            <div className="hamburgerMenuContainer animate__animated animate__fadeInLeft">
                <ul>
                    <li className={active === 'Sobre mí' ? 'active' : ''} onClick={() => { handleScroll('sobre-mi'); setActive('Sobre mí'); }}><Link to="/">Sobre mí</Link></li>
                    <li className={active === 'Proyectos' ? 'active' : ''} onClick={() => { handleScroll('proyectos'); setActive('Proyectos'); }}><Link to="/proyectos">Proyectos</Link></li>
                    <li className={active === 'Skills' ? 'active' : ''} onClick={() => { handleScroll('skills'); setActive('Skills'); }}><Link to="/skills">Skills</Link></li>
                    <li className={active === 'Contacto' ? 'active' : ''} onClick={() => { handleScroll('contacto'); setActive('Contacto'); }}><Link to="/contacto">Contacto</Link></li>
                    <div className="contenedor_swich animate__animated animate__fadeInUp">
                        <div className="swich" id="swich" onClick={toggleTheme} style={{ backgroundColor: theme === 'dark' ? '#424242' : 'white', outline: theme === 'light' ? '2px solid #0000007f' : 'none' }}>
                            <img className='animate__animated animate__fadeInDown'
                                id="icon_swich"
                                src={theme === 'light' ? iconMoon : iconSon}
                                alt="Switch Theme Icon"
                            />
                        </div>
                        <div className="swich_2" id="swich_2">
                            <h6 className='animate__animated animate__fadeInUp' id="ES-EN">EN</h6>
                        </div>
                    </div>
                </ul>

            </div>

        </NavCont>
    );
};
export default NavBar
