import { useEffect } from 'react'
import Presentacion from '../views/SobreMi/Presentacion'
import Informacion from '../views/SobreMi/Informacion'
import LoUltimo from '../views/SobreMi/LoUltimo';
import CardSwap, { Card } from '../components/ui/CardSwap/CardSwap';
import FlowingMenu from '../components/ui/FlowingMenu/FlowingMenu';
import { Link } from 'react-router-dom';
import { demoItems } from '../components/ui/FlowingMenu/data';
import BlurText from '../components/ui/BlurText/BlurText';
import MetaBalls from '../components/ui/MetaBalls/MetaBalls';


const SobreMi = () => {
  useEffect(() => {
    document.title = 'Sobre Mi - Portafolio';
    window.scrollTo(0, 0);
    AOS.init();
  }, []);


  return (
    <section>
      <Presentacion />

      <Informacion />
      <CardSwap>
        <Card>
          <h3>landing page (UNIAJC)</h3>
          <p>Landing page desarrollada para institucion</p>
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704012/Portafolio/Programacion-port/mbsnpbpvsndqeouie1qx.png" alt="" />
        </Card>
        <Card>
          <h3>Página ORG</h3>
          <p>Página desarrollada para la organización fundacion camino a atsiyon</p>
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1751395626/Firefox_Screenshot_2025-07-01T18-46-55.913Z_ux8g7z.png" alt="" />

        </Card>
        <Card>
          <h3>Pagina Urbanhouse</h3>
          <p>Página reconstrida para la organización Urbanhouse</p>
          <img src="https://res.cloudinary.com/dehpi4905/image/upload/v1748704012/Portafolio/Programacion-port/tyh35nkuoo3tponj71u8.png" alt="" />

        </Card>
      </CardSwap>
      <LoUltimo />

      <section style={{ height: '600px', padding: '50px 0' }}>
        <FlowingMenu items={demoItems} />
        <Link className='more-skill' to="/skills">Ver mas informacion</Link>
      </section>
      <MetaBalls
        color="#1dafe9"
        cursorBallColor="#1b86ff"
        cursorBallSize={2}
        ballCount={15}
        animationSize={30}
        enableMouseInteraction={true}
        enableTransparency={true}
        hoverSmoothness={0.05}
        clumpFactor={1}
        speed={0.3}
      />
    </section>
  )
}

export default SobreMi