import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { iconMoon, iconSon } from '../services/const';

const NavCont = styled.nav`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;

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
                color: #ffffff;
                padding: 13px 15px;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 10px;
    }

    .contenedor_swich {
        display: flex;
        gap: 10px;
        justify-content: center;
        position: absolute;
        right: -80%;
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
`;

const NavBar = () => {
    const [active, setActive] = useState('Sobre mí');
    const [theme, setTheme] = useState('light'); // default

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
        // Get saved theme or use prefers-color-scheme
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

    return (
        <NavCont>
            <ul>
                <li className={active === 'Sobre mí' ? 'active' : ''} onClick={() => { handleScroll('sobre-mi'); setActive('Sobre mí'); }}>Sobre mí</li>
                <li className={active === 'Proyectos' ? 'active' : ''} onClick={() => { handleScroll('proyectos'); setActive('Proyectos'); }}>Proyectos</li>
                <li className={active === 'Skills' ? 'active' : ''} onClick={() => { handleScroll('skills'); setActive('Skills'); }}>Skills</li>
                <li className={active === 'Contacto' ? 'active' : ''} onClick={() => { handleScroll('contacto'); setActive('Contacto'); }}>Contacto</li>
                <div className="contenedor_swich">
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
        </NavCont>
    );
};

export default NavBar;

