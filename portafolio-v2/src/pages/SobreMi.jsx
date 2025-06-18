import React, { useEffect } from 'react'
import Presentacion from '../views/SobreMi/Presentacion'
import Informacion from '../views/SobreMi/Informacion'
import LoUltimo from '../views/SobreMi/LoUltimo';

const SobreMi = () => {
  useEffect(() => {
    document.title = 'Sobre Mi - Portafolio';
    window.scrollTo(0, 0);
  AOS.init();
  }, []);

  return (
    <div>
      <Presentacion />
      <Informacion /> 
      <LoUltimo /> 
    </div>
  )
}

export default SobreMi