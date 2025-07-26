import React from 'react'
import { LayoutMain } from '../layouts/LayautMain'
import Gallery from '../components/Gallery';

const Proyectos = () => {
  React.useEffect(() => {
    document.title = 'Proyectos - Portafolio';
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>
      <Gallery urlspersonal={[
        "https://i.postimg.cc/sXyfNqsp/Fire-Shot-Capture-1669-FOOD-DELIVERY-food-delivery-lovat-delta-vercel-app.png",
        "https://i.postimg.cc/NMpBHsS5/Fire-Shot-Capture-1677-Preguntas-dailybitsa-colorblue1s-projects-vercel-app.png",
        "https://i.postimg.cc/W1CPKQ3M/Screenshot-2024-09-29-120618.png",
        "https://res.cloudinary.com/dehpi4905/image/upload/v1751395255/Firefox_Screenshot_2025-07-01T18-40-31.152Z_kmbuzh.png"
      ]}

      urlscola={[
        "https://res.cloudinary.com/dehpi4905/image/upload/v1748704012/Portafolio/Programacion-port/tyh35nkuoo3tponj71u8.png",
        "https://res.cloudinary.com/dehpi4905/image/upload/v1748704012/Portafolio/Programacion-port/m5extryx2afpp5faz1gx.png",
        "https://res.cloudinary.com/dehpi4905/image/upload/v1748704012/Portafolio/Programacion-port/mbsnpbpvsndqeouie1qx.png",
        "https://res.cloudinary.com/dehpi4905/image/upload/v1751395626/Firefox_Screenshot_2025-07-01T18-46-55.913Z_ux8g7z.png",
      ]}

        colum={[
          "1/2",
          "1/3",
          "1/4",
          "1/5",
          "",
          "3/3"
        ]}

        row={[
          "2/2",
          "3/3",
          "2/4",
          "2/5",
          "3/1",
          "1/3"
        ]}
      />
    </LayoutMain>
  )
}

export default Proyectos