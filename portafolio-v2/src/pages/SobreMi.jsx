import { useEffect } from 'react'
import Presentacion from '../views/SobreMi/Presentacion'
import Informacion from '../views/SobreMi/Informacion'
import LoUltimo from '../views/SobreMi/LoUltimo';
import ScrollFloat from '../components/ui/Texto/ScrollFloat';
import CardSwap from '../components/ui/ss/CardSwap';

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
   <CardSwap/>
      <LoUltimo /> 
    </div>
  )
}

export default SobreMi