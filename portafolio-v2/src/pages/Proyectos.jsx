import React from 'react'
import { LayoutMain } from '../layouts/LayautMain'

const Proyectos = () => {
    React.useEffect(() => {
      document.title = 'Proyectos - Portafolio';
      window.scrollTo(0, 0);
    }, []);
  return (
    <LayoutMain>Proyectos</LayoutMain>
  )
}

export default Proyectos