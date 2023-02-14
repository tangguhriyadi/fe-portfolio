import React from 'react'
import AppAbout from '../home/AppAbout'
import AppFeature from '../home/AppFeature'
import AppHero from '../home/AppHero'
import AppWorks from '../home/AppWorks'

const AppHome:React.FC = () => {
  return (
    <div className="main">
        <AppHero />
        <AppAbout />
        <AppFeature />
        <AppWorks />
    </div>
  )
}

export default AppHome