import React from 'react'
import { LayoutMain } from '../layouts/LayautMain'

const Skills = () => {
  React.useEffect(() => {
    document.title = 'Skills - Portafolio';
    window.scrollTo(0, 0);
  }, []);
  return (
    <LayoutMain>Skills</LayoutMain>
  )
}

export default Skills