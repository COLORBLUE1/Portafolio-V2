import React from 'react'
import { useTranslation } from '../i18n/useTranslation';
import { LayoutMain } from '../layouts/LayautMain'
import Herramientas from '../views/Skills/Herramientas';

const Stylos = {height: "150vh !important"}

const Skills = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.title = `${t('nav.skills')} - Portafolio`;
    window.scrollTo(0, 0);
  }, [t]);
  return (
    <LayoutMain stylo={"150vh"}><Herramientas /></LayoutMain>
  )
}

export default Skills