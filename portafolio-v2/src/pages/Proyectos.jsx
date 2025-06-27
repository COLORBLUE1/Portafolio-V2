import React from 'react'
import { LayoutMain } from '../layouts/LayautMain'
import MenuProyectos from '../views/proyectos/menu/MenuProyectos';
import Gallery from '../components/gallery';

const Proyectos = () => {
  React.useEffect(() => {
    document.title = 'Proyectos - Portafolio';
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <MenuProyectos />
      <Gallery url1="https://cmsapi-frontend.naruto-official.com/site/api/naruto/Image/get?path=/naruto/import/images/naruto02/221%EF%BD%9E300/221/C225_0060.jpg"/>
    </LayoutMain>
  )
}

export default Proyectos