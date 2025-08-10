import React from 'react'
import { LayoutMain } from '../layouts/LayautMain'
import Herramientas from '../views/Skills/Herramientas';

const Stylos = {height: "150vh !important"}

const Skills = () => {
  React.useEffect(() => {
    document.title = 'Skills - Portafolio';
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain stylo={"150vh"}><Herramientas /></LayoutMain>
  )
}

export default Skills