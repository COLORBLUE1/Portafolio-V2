import React from 'react'
import { LayoutMain } from '../layouts/LayautMain'
import Herramientas from '../views/Skills/Herramientas';

const Skills = () => {
  React.useEffect(() => {
    document.title = 'Skills - Portafolio';
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain><Herramientas /></LayoutMain>
  )
}

export default Skills